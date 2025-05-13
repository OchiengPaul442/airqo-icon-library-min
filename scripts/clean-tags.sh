#!/bin/bash
# Script to clean up existing git tags both locally and remotely

# Get the version to clean up
VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version>"
  echo "Example: $0 1.1.0"
  exit 1
fi

# Remove the 'v' prefix if it exists
VERSION=${VERSION#v}

echo "Cleaning up tags for version v$VERSION"

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

echo "Cleanup complete!"
