$rawPath = "C:\Users\dhanukan\OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED\Desktop\Nexio Global\nexio v2\nexiowebsite\src\components\Navbar.tsx"
$content = [System.IO.File]::ReadAllText($rawPath)

# Fix 1: Close the logo span
# Find:     nexio<span className="text-blue-400">.</span>
#               </Link>
# Replace:  nexio<span className="text-blue-400">.</span>
#               </Link>
$content = $content.Replace(
    'nexio<span className="text-blue-400">.</span>
        </Link>',
    'nexio<span className="text-blue-400">.</span>
        </Link>'
)

# Fix 2: Fix max-w-7xl closing - remove extra </div>
# The structure should have only one </div> before <AnimatePresence>
# Currently has two </div> lines before AnimatePresence
$content = $content.Replace(
    "          </div>
      <AnimatePresence>",
    "        </div>
      <AnimatePresence>"
)

[System.IO.File]::WriteAllText($rawPath, $content)
Write-Host "Navbar fixed!"
