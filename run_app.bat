@echo off
echo Running Marketplace Sales Dashboard...
echo.

REM This batch file runs the application using cmd instead of PowerShell
REM to avoid execution policy issues

echo Installing dependencies...
call cmd /c npm install

echo.
echo Starting development server...
call cmd /c npm start

echo.
echo If the browser doesn't open automatically, go to http://localhost:3000 