$rawPath = "C:\Users\dhanukan\OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED\Desktop\Nexio Global\nexio v2\nexiowebsite\src\components\TrustSection.tsx"
$content = [System.IO.File]::ReadAllText($rawPath)

$old = "        </div>`r`n    </section>"
$new = "        </div>`r`n      </div>`r`n    </section>"

if ($content.Contains($old)) {
    $content = $content.Replace($old, $new)
    [System.IO.File]::WriteAllText($rawPath, $content)
    Write-Host "Fixed! Added missing </div>"
} else {
    Write-Host "Pattern not found. Let me check..."
    $end = $content.Substring([Math]::Max(0, $content.Length - 300))
    Write-Host "Last chars: [$end]"
}
