param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )

Write-Host -BackgroundColor "Red" "Warming! Make sure you have committed all your changes before running this script"

Set-Location .\

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Set-Location .\projects\ngx-fluent-design
    npm version patch -m "Upgrade to %s"

    Set-Location ..\..
    Get-Location

    git add .
    git commit -m "Upgraded package version"
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host "Is a minor update"

    # cd into projects/ngx-fluent-design
    # npm version command to upgrade minor version

    # cd back to root
    # git add .
    # git commit -m "new minor version: {{versionNumber}}"
}

    git push -u origin master
    ng b ngx-fluent-design --prod

    cd .\dist\ngx-fluent-design
    Get-Location
    npm publish

