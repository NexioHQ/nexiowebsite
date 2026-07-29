$filePath = "C:\Users\dhanukan\OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED\Desktop\Nexio Global\nexio v2\nexiowebsite\src\components\Navbar.tsx"
$fileContent = Get-Content $filePath -Raw
Write-Host "File length before: $($fileContent.Length)"

# Fix 1: Close the span tag properly - find the exact text and replace
$old1 = '<span className="text-blue-400">.</span>
        </Link>'
$new1 = '<span className="text-blue-400">.</span>
        </Link>'
$fileContent = $fileContent.Replace($old1, $new1)
Write-Host "Applied fix 1 (logo span closing)"

# Fix 2: Remove extra </div> - find the duplicate </div> before AnimatePresence
$old2 = "          </div>
      <AnimatePresence>"
$new2 = "        </div>
      <AnimatePresence>"
$fileContent = $fileContent.Replace($old2, $new2)
Write-Host "Applied fix 2 (extra div removal)"

Set-Content $filePath -Value $fileContent -NoNewline
Write-Host "File length after: $($fileContent.Length)"
Write-Host "Navbar.tsx fixed successfully!"
