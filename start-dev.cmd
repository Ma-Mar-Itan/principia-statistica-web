@echo off
cd /d "%~dp0"
set "PATH=%~dp0.tools\node-v22.22.3-win-x64;%PATH%"
"%~dp0.tools\node-v22.22.3-win-x64\node.exe" "%~dp0node_modules\next\dist\bin\next" dev --webpack -p 3000 -H 127.0.0.1
