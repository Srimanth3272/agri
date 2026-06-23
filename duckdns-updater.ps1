# AgriNexa - DuckDNS Auto IP Updater
# Runs every 5 minutes to keep agrinexa-api.duckdns.org pointing to this laptop

$token = "39523f3f-1365-400e-89ce-64ad526ba063"
$domain = "agrinexa-api"
$logFile = "C:\Users\LAB2_PC23\Desktop\agri\duckdns-update.log"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

try {
    $url = "https://www.duckdns.org/update?domains=$domain&token=$token&verbose=true"
    $response = (Invoke-WebRequest -Uri $url -UseBasicParsing).Content
    "$timestamp - SUCCESS: $response" | Add-Content $logFile
    Write-Host "[$timestamp] DuckDNS Updated: $response" -ForegroundColor Green
} catch {
    "$timestamp - ERROR: $_" | Add-Content $logFile
    Write-Host "[$timestamp] DuckDNS Update Failed: $_" -ForegroundColor Red
}
