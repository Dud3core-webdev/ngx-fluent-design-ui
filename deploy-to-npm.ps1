param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Write-Host "Is a patch only"

    # cd into projects/ngx-fluent-design
    # npm version command to upgrade patch version
    Set-Location .\projects\ngx-fluent-design
    npm version patch -m "Upgrade to %s"

    Set-Location ..\..
    Get-Location

    git add .
    git commit -m "Upgraded package version"
   # cd back to root
   # git add .
   # git commit -m "new patch version: {{versionNumber}}"
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host "Is a minor update"

    # cd into projects/ngx-fluent-design
    # npm version command to upgrade minor version

    # cd back to root
    # git add .
    # git commit -m "new minor version: {{versionNumber}}"
}

    # git push -u origin master <-- We might need to pass a branch name in, will see.
    git push -u origin master
    ng b ngx-fluent-design --prod

    cd dist/ngx-fluent-design
    npm publish

    # cd back to root
    # ng b ngx-fluent-design --prod
    # cd dist/ngx-fluent-design
    # npm publish

