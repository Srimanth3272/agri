@echo off
title AgriNexa - Frontend Server
echo ========================================
echo   AgriNexa Frontend Starting...
echo   URL: http://172.16.1.62:3000
echo   URL: http://localhost:3000
echo ========================================
cd /d "%~dp0client"
npm install
npm run dev
pause
