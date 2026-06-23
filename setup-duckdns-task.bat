@echo off
echo ========================================
echo  AgriNexa - Register DuckDNS Auto-Updater
echo  Run this as Administrator!
echo ========================================

powershell.exe -Command "& {$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '-NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -File ""C:\Users\LAB2_PC23\Desktop\agri\duckdns-updater.ps1""'; $trigger = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Minutes 5) -Once -At (Get-Date); $settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 1); Register-ScheduledTask -TaskName 'AgriNexa-DuckDNS-Updater' -Action $action -Trigger $trigger -Settings $settings -RunLevel Highest -Force; Write-Host 'Done!'}"

echo.
echo ✅ DuckDNS Auto-Updater scheduled every 5 minutes!
echo    Your IP will always stay updated automatically.
pause
