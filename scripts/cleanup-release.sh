#!/bin/bash
# Script to clean up existing git tags and GitHub releases

# Get the version to clean up
VERSION=$1
GITHUB_TOKEN=$2

if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version> [github_token]"
  echo "Example: $0 1.1.0 ghp_xxxxxxxxxxxx"
  exit 1
fi

# Remove the 'v' prefix if it exists
VERSION=${VERSION#v}

echo "=== Cleaning up release v$VERSION ==="

# === Clean up Git tags ===
echo -e "\n--- Cleaning up Git tags ---"
# Delete local tag if it exists
if git tag -l "v$VERSION" | grep -q "v$VERSION"; then
  echo "Deleting local tag v$VERSION"
  git tag -d "v$VERSION"
else
  echo "Local tag v$VERSION does not exist"
fi

# Delete remote tag if it exists
if git ls-remote --tags origin | grep -q "refs/tags/v$VERSION"; then
  echo "Deleting remote tag v$VERSION"
  git push --delete origin "v$VERSION"
else
  echo "Remote tag v$VERSION does not exist"
fi

# === Clean up GitHub release ===
if [ -n "$GITHUB_TOKEN" ]; then
  echo -e "\n--- Cleaning up GitHub release ---"
  # Get repository info
  REPO=$(git remote get-url origin | sed -E 's/.*github.com[:\/](.*)\/(.*).git/\1\/\2/')
  
  # Get release ID
  RELEASE_ID=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
    "https://api.github.com/repos/$REPO/releases/tags/v$VERSION" | \
    grep -o '"id": [0-9]*' | head -1 | awk '{print $2}')
  
  if [ -n "$RELEASE_ID" ] && [ "$RELEASE_ID" != "null" ]; then
    echo "Found release with ID $RELEASE_ID, deleting..."
    curl -X DELETE -H "Authorization: token $GITHUB_TOKEN" \
      "https://api.github.com/repos/$REPO/releases/$RELEASE_ID"
    echo "Release deleted!"
  else
    echo "No release found for tag v$VERSION"
  fi
else
  echo -e "\n--- Skipping GitHub release cleanup (no token provided) ---"
fi

echo -e "\n=== Cleanup complete! ==="
