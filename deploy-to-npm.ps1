param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )
$ErrorActionPreference = 'Stop'

Write-Host -BackgroundColor "Red" "Warning! Make sure you have committed all your changes before running this script"

$rootDir = Get-Location

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Write-Host "Running patch update"
    Set-Location .\projects\ngx-fluent-design
    npm version patch -m "Upgrade to %s"
    if ($LASTEXITCODE -ne 0) { Write-Host -BackgroundColor "Red" "npm version failed!"; exit $LASTEXITCODE }
    Set-Location $rootDir
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host -BackgroundColor "Green" "Running minor update"
    Set-Location .\projects\ngx-fluent-design
    npm version minor -m "Upgrade to %s"
    if ($LASTEXITCODE -ne 0) { Write-Host -BackgroundColor "Red" "npm version failed!"; exit $LASTEXITCODE }
    Set-Location $rootDir
}

Write-Host -BackgroundColor "Green" "Running build"
ng b ngx-fluent-design --configuration production
if ($LASTEXITCODE -ne 0) { Write-Host -BackgroundColor "Red" "Build failed!"; exit $LASTEXITCODE }

Write-Host -BackgroundColor "Green" "Publishing version"
Set-Location .\dist\ngx-fluent-design
npm publish
if ($LASTEXITCODE -ne 0) { Write-Host -BackgroundColor "Red" "npm publish failed!"; exit $LASTEXITCODE }

Write-Host -BackgroundColor "Green" "Committing and pushing package.json file"
Set-Location $rootDir

# Get version from package.json locally, rather than remote registry which may not have updated yet
$packageJson = Get-Content .\projects\ngx-fluent-design\package.json | ConvertFrom-Json
$newVersionNumber = $packageJson.version

Write-Host "Comitting new version: $newVersionNumber"
git add .
git commit -m "Upgraded package version to $newVersionNumber"
if ($LASTEXITCODE -ne 0) { Write-Host -BackgroundColor "Red" "git commit failed!"; exit $LASTEXITCODE }

git push -u origin master
