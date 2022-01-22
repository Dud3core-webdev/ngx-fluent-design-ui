param( [bool]$isPatch = $true, [bool]$isMinorUpdate = $false )

if(($isPatch -eq $true) -and ($isMinorUpdate -eq $false)) {
    Write-Host "Is a patch only"
}

if(($isPatch -eq $false) -and ($isMinorUpdate -eq $true)) {
    Write-Host "Is a minor update"
}
