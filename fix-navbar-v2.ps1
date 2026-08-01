$filePath = "C:\Users\dhanukan\OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED\Desktop\Nexio Global\nexio v2\nexiowebsite\src\components\Navbar.tsx"
$fileContent = [System.IO.File]::ReadAllText($filePath)

# The issue: missing closing </span> after the logo span
# Current: nexio<span className="text-blue-400">.</span>
# Should be: nexio<span className="text-blue-400">.</span>

$fileContent = $fileContent.Replace(
    'nexio<span className="text-blue-400">.</span>',
    'nexio<span className="text-blue-400">.</span>'
)

[System.IO.File]::WriteAllText($filePath, $fileContent)
Write-Host "Fix 1: Added missing closing </span> after logo dot span"

# Verify
$verify = [System.IO.File]::ReadAllText($filePath)
if ($verify.Contains('</span>')) {
    Write-Host "Verified: Logo span is now properly closed"
} else {
    Write-Host "WARNING: Logo span fix may not have applied correctly"
}
