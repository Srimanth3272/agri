@echo off
title AgriNexa - Backend Server
echo ========================================
echo   AgriNexa Backend Starting...
echo   Port: 5000
echo   DB:   mongodb://127.0.0.1:27017/agrinexa
echo ========================================
cd /d "%~dp0server"
npm install
node index.js
pause
