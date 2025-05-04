@echo off
echo Testing package publishing process in dry-run mode...

:: First build the packages
echo Building packages...
call pnpm build

:: Loop through each package and simulate publishing with npm's dry-run option
echo.
echo Simulating package publishing...
cd packages\core
echo.
echo Testing publish for @airqo-icons-min/core...
call npm publish --dry-run
cd ..\..

cd packages\react
echo.
echo Testing publish for @airqo-icons-min/react...
call npm publish --dry-run
cd ..\..

cd packages\react-native
echo.
echo Testing publish for @airqo-icons-min/react-native...
call npm publish --dry-run
cd ..\..

cd packages\vue
echo.
echo Testing publish for @airqo-icons-min/vue...
call npm publish --dry-run
cd ..\..

echo.
echo Publishing test complete!