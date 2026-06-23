@echo off
title AgriNexa - Seed Database
echo ========================================
echo   Seeding AgriNexa Database...
echo   Make sure MongoDB is running first!
echo ========================================
cd /d "%~dp0server"
node seeder.js
echo.
echo Done! You can close this window.
pause
