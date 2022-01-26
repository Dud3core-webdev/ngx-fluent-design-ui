param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )

Write-Host -BackgroundColor "Red" "Warning! Make sure you have committed all your changes before running this script"

Set-Location .\

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Write-Host "Running patch update";
    Set-Location .\projects\ngx-fluent-design
    npm version patch -m "Upgrade to %s"
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host -BackgroundColor "Green" "Running minor update";
    Set-Location .\projects\ngx-fluent-design
    npm version minor -m "Upgrade to %s"
}

Write-Host -BackgroundColor "Green" "Running build";
ng b ngx-fluent-design --prod

Set-Location .\
Set-Location ..\..\dist\ngx-fluent-design

Write-Host -BackgroundColor "Green" "Publishing version";
npm publish

Write-Host -BackgroundColor "Green" "Committing and pushing package.json file";
Set-Location ..\..
Get-Location

$newVersionNumber = npm view ngx-fluent-design version

Write-Host $newVersionNumber
git add .
git commit -m "Upgraded package version to $newVersionNumber"

git push -u origin master
