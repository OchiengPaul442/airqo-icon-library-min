@echo off
echo Building website for GitHub Pages deployment...
call pnpm build:website
echo.
echo You can view the built website in the website/out directory.
echo To simulate GitHub Pages deployment, you can serve the website with:
echo "npx serve -s website/out"
echo.
echo Press any key to serve the website locally...
pause
npx serve -s website/out
