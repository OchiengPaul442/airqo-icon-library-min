#!/bin/bash
set -e

# Ensure .npmrc exists and has the right content
echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" > ~/.npmrc
echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
echo "always-auth=true" >> ~/.npmrc

# Show npm config for debugging (hide secrets)
npm config list | grep -v _authToken

# Track if all packages published successfully
PUBLISH_SUCCESS=true
AUTO_INCREMENTED=false
NEW_VERSION="1.0.2"

# Check if this version already exists before we start
echo "🔍 Checking if version ${NEW_VERSION} already exists in npm registry..."
CORE_PKG_NAME="@airqo-icons-min/core"
if npm view ${CORE_PKG_NAME}@${NEW_VERSION} version &>/dev/null; then
  echo "⚠️ Warning: Version ${NEW_VERSION} already exists for ${CORE_PKG_NAME} in npm registry"
  echo "🔄 Will auto-increment during publishing"
fi

# Function to handle version conflict by incrementing patch version
handle_version_conflict() {
  local pkg_dir=$1
  local pkg_name=$2
  local current_version=$3
  
  echo "⚠️ Version conflict detected for ${pkg_name}@${current_version}"
  
  # Split the version into components
  IFS='.' read -r -a ver_parts <<< "$current_version"
  local major=${ver_parts[0]}
  local minor=${ver_parts[1]}
  local patch=${ver_parts[2]}
  
  # Increment patch version
  local new_patch_version=$((patch + 1))
  local incremented_version="${major}.${minor}.${new_patch_version}"
  echo "🔄 Auto-incrementing to version ${incremented_version}"
  
  # Update package.json with incremented version
  (cd "${pkg_dir}" && pnpm version ${incremented_version} --no-git-tag-version --allow-same-version)
  
  # Mark as auto-incremented so we know to update all packages later
  AUTO_INCREMENTED=true
  NEW_VERSION="${incremented_version}"
  return 0
}

for PKG_DIR in packages/core packages/react packages/react-native packages/vue; do
  if [ -f "${PKG_DIR}/package.json" ]; then
    PACKAGE_NAME=$(node -p "require('./${PKG_DIR}/package.json').name")
    CURRENT_PKG_VERSION=$(node -p "require('./${PKG_DIR}/package.json').version")
    echo "📦 Publishing ${PKG_DIR} - ${PACKAGE_NAME}@${CURRENT_PKG_VERSION}"
    
    # Check if version already exists in npm registry
    if npm view ${PACKAGE_NAME}@${CURRENT_PKG_VERSION} version &>/dev/null; then
      echo "⚠️ Version ${PACKAGE_NAME}@${CURRENT_PKG_VERSION} already exists in npm registry"
      handle_version_conflict "${PKG_DIR}" "${PACKAGE_NAME}" "${CURRENT_PKG_VERSION}"
      
      # Process any workspace: references before publishing
      echo "🔧 Pre-processing package.json to resolve workspace references..."
      node -e "
        const fs = require('fs');
        const path = require('path');
        const pkgPath = path.join('${PKG_DIR}', 'package.json');
        const pkg = require(pkgPath);
        let hasChanges = false;
        
        if (pkg.dependencies) {
          Object.keys(pkg.dependencies).forEach(dep => {
            if (typeof pkg.dependencies[dep] === 'string' && pkg.dependencies[dep].startsWith('workspace:')) {
              console.log('🔄 Replacing workspace reference for dependency ' + dep);
              pkg.dependencies[dep] = '${NEW_VERSION}';
              hasChanges = true;
            }
          });
        }
        
        if (pkg.peerDependencies) {
          Object.keys(pkg.peerDependencies).forEach(dep => {
            if (typeof pkg.peerDependencies[dep] === 'string' && 
                pkg.peerDependencies[dep].startsWith('workspace:')) {
              console.log('🔄 Replacing workspace reference for peerDependency ' + dep);
              pkg.peerDependencies[dep] = '${NEW_VERSION}';
              hasChanges = true;
            }
          });
        }
        
        if (hasChanges) {
          console.log('📝 Writing updated package.json without workspace references');
          fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\\n');
        }
      "
        
      # Try publishing with incremented version
      echo "🔄 Attempting to publish with incremented version ${NEW_VERSION}..."
      if (cd "${PKG_DIR}" && npm publish --access public); then
        echo "✅ Successfully published ${PACKAGE_NAME}@${NEW_VERSION}"
      else
        echo "❌ Failed to publish ${PACKAGE_NAME} even with incremented version"
        PUBLISH_SUCCESS=false
      fi
    else
      # Version doesn't exist, try to publish
      # First process workspace references
      (cd "${PKG_DIR}" && echo "🔧 Pre-processing package.json to resolve workspace references..." &&
      node -e "
        const fs = require('fs');
        const path = require('path');
        const pkgPath = path.join(process.cwd(), 'package.json');
        const pkg = require(pkgPath);
        let hasChanges = false;
        
        if (pkg.dependencies) {
          Object.keys(pkg.dependencies).forEach(dep => {
            if (typeof pkg.dependencies[dep] === 'string' && pkg.dependencies[dep].startsWith('workspace:')) {
              console.log('🔄 Replacing workspace reference for dependency ' + dep);
              pkg.dependencies[dep] = '${CURRENT_PKG_VERSION}';
              hasChanges = true;
            }
          });
        }
        
        if (pkg.peerDependencies) {
          Object.keys(pkg.peerDependencies).forEach(dep => {
            if (typeof pkg.peerDependencies[dep] === 'string' && 
                pkg.peerDependencies[dep].startsWith('workspace:')) {
              console.log('🔄 Replacing workspace reference for peerDependency ' + dep);
              pkg.peerDependencies[dep] = '${CURRENT_PKG_VERSION}';
              hasChanges = true;
            }
          });
        }
        
        if (hasChanges) {
          console.log('📝 Writing updated package.json without workspace references');
          fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\\n');
        }
      ")

      # Attempt to publish
      if (cd "${PKG_DIR}" && npm publish --access public); then
        echo "✅ Successfully published ${PACKAGE_NAME}@${CURRENT_PKG_VERSION}"
        
        # Verify package was published
        echo "🔍 Verifying package was published to npm..."
        if npm view ${PACKAGE_NAME}@${CURRENT_PKG_VERSION} version --json; then
          echo "✅ Verified ${PACKAGE_NAME}@${CURRENT_PKG_VERSION} is available in npm registry"
        else
          echo "⚠️ Warning: Could not verify ${PACKAGE_NAME}@${CURRENT_PKG_VERSION} in npm registry"
          echo "This may be due to npm registry propagation delay and not necessarily an error"
        fi
      else
        # Handle publishing error
        ERROR_OUTPUT=$(cd "${PKG_DIR}" && npm publish --access public 2>&1 || true)
        
        if echo "$ERROR_OUTPUT" | grep -q "You cannot publish over the previously published versions" || \
           echo "$ERROR_OUTPUT" | grep -q "EPUBLISHCONFLICT" || \
           echo "$ERROR_OUTPUT" | grep -q "already exists"; then
          # Handle version conflict by incrementing patch version
          handle_version_conflict "${PKG_DIR}" "${PACKAGE_NAME}" "${CURRENT_PKG_VERSION}"
          
          # Try publishing again with incremented version
          echo "🔄 Attempting to publish with incremented version ${NEW_VERSION}..."
          if (cd "${PKG_DIR}" && npm publish --access public); then
            echo "✅ Successfully published ${PACKAGE_NAME}@${NEW_VERSION}"
          else
            echo "❌ Failed to publish ${PACKAGE_NAME} even with incremented version"
            PUBLISH_SUCCESS=false
          fi
        else
          echo "❌ Failed to publish ${PACKAGE_NAME} due to an unexpected error:"
          echo "$ERROR_OUTPUT"
          PUBLISH_SUCCESS=false
        fi
      fi
    fi
  fi
done

# Always output the final version used, whether auto-incremented or not
echo "new_version=${NEW_VERSION}" >> $GITHUB_OUTPUT
echo "Final version used for publishing: ${NEW_VERSION}"

# If we auto-incremented any package version, we need to update all packages to match
if [ "$AUTO_INCREMENTED" = true ]; then
  echo "🔄 Auto-incremented version to ${NEW_VERSION}. Updating all packages to match..."
  
  # Update all packages to the new version
  for PKG_DIR in packages/*/; do
    if [ -f "${PKG_DIR}package.json" ]; then
      echo "Updating ${PKG_DIR}package.json to version ${NEW_VERSION}"
      (cd "${PKG_DIR}" && pnpm version ${NEW_VERSION} --no-git-tag-version --allow-same-version)
    fi
  done
  
  # Update root package.json
  pnpm version ${NEW_VERSION} --no-git-tag-version --allow-same-version
  
  # Update Git commit and tag
  git add package.json packages/*/package.json
  git commit -m "chore(release): auto-increment version to ${NEW_VERSION} [skip ci]"
  git tag -d "v1.0.2" || true
  git tag -a "v${NEW_VERSION}" -m "Release v${NEW_VERSION}"
fi

# If any package failed to publish, mark the step as failed
if [ "$PUBLISH_SUCCESS" = false ]; then
  echo "❌ At least one package failed to publish"
  exit 1
fi
