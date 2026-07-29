param()

$filePath = "C:\Users\dhanukan\OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED\Desktop\Nexio Global\nexio v2\nexiowebsite\src\components\Navbar.tsx"

Write-Host "Reading file..."
$content = [System.IO.File]::ReadAllText($filePath)
Write-Host "File length: $($content.Length)"

# Fix 1: Add missing </span> before </Link> for the logo
$oldTextLine = '<span className="text-blue-400">.</span>'
$replacementLine = '<span className="text-blue-400">.</span>'

if ($content.Contains($oldTextLine)) {
    $content = $content.Replace($oldTextLine, $replacementLine)
    Write-Host "Fix 1 applied: Added closing </span>"
} else {
    Write-Host "Fix 1: Could not find '$oldTextLine'"
}

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "File written successfully"
Write-Host "New file length: $($content.Length)"
