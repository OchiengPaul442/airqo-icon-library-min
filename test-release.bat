@echo off
echo Running semantic-release in dry-run mode...
set DRY_RUN=true
pnpm semantic-release --dry-run