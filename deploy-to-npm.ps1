param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )

Write-Host -BackgroundColor "Red" "Warming! Make sure you have committed all your changes before running this script"

Set-Location .\

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Write-Host "Running patch update";
    Set-Location .\projects\ngx-fluent-design
    npm version patch -m "Upgrade to %s"
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host "Running minor update";
    Set-Location .\projects\ngx-fluent-design
    npm version minor -m "Upgrade to %s"
}

    $newVersion = npm view ngx-fluent-design version
    npm view ngx-fluent-design version

    Set-Location ..\..
    Get-Location

    git add .
    git commit -m "Upgraded package version to ${newVersion}"

    git push -u origin master
    ng b ngx-fluent-design --prod

    cd .\dist\ngx-fluent-design
    Get-Location
    npm publish

