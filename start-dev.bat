@echo off
REM Start ASP.NET WebAPI
start cmd /k "dotnet run --project API\Teniszpalya.API\"

REM Start Vite React
start cmd /k "cd frontend\ && npm run dev"

echo Both backend and frontend are running.
pause