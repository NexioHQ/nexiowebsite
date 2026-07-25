Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "public\work"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

function New-RoundedPath([int]$x, [int]$y, [int]$w, [int]$h, [int]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

function Fill-Round($g, $color, $x, $y, $w, $h, $r) {
  $b = New-Object System.Drawing.SolidBrush($color)
  $path = New-RoundedPath $x $y $w $h $r
  $g.FillPath($b, $path)
  $path.Dispose(); $b.Dispose()
}

function C([string]$hex) { return [System.Drawing.ColorTranslator]::FromHtml($hex) }

$W = 1536; $H = 1024

$specs = @(
  @{ name = "pulse-analytics";   bg = "#0B1220"; panel = "#141E33"; card = "#1B2A47"; accent = "#3B82F6"; accent2 = "#22D3EE"; layout = "dashboard" },
  @{ name = "aurora-commerce";   bg = "#F8FAFC"; panel = "#FFFFFF"; card = "#EEF2F7"; accent = "#6366F1"; accent2 = "#F59E0B"; layout = "storefront" },
  @{ name = "finora-banking";    bg = "#0F172A"; panel = "#1E293B"; card = "#27364B"; accent = "#10B981"; accent2 = "#34D399"; layout = "mobile" },
  @{ name = "nimbus-console";    bg = "#F1F5F9"; panel = "#FFFFFF"; card = "#E2E8F0"; accent = "#0EA5E9"; accent2 = "#38BDF8"; layout = "console" },
  @{ name = "sentinel-security"; bg = "#0A0F1A"; panel = "#121A2A"; card = "#1A2438"; accent = "#F43F5E"; accent2 = "#F59E0B"; layout = "security" },
  @{ name = "echo-assistant";    bg = "#FAFAFA"; panel = "#FFFFFF"; card = "#F0EDFB"; accent = "#8B5CF6"; accent2 = "#A78BFA"; layout = "chat" }
)

foreach ($s in $specs) {
  $bmp = New-Object System.Drawing.Bitmap($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear((C $s.bg))
  $accent = C $s.accent; $accent2 = C $s.accent2
  $panel = C $s.panel; $card = C $s.card
  $muted = [System.Drawing.Color]::FromArgb(60, $accent.R, $accent.G, $accent.B)

  switch ($s.layout) {
    "dashboard" {
      Fill-Round $g $panel 40 40 260 944 20
      Fill-Round $g $accent 70 80 200 44 10
      for ($i = 0; $i -lt 6; $i++) { Fill-Round $g $card 70 (170 + $i * 70) 200 40 10 }
      for ($i = 0; $i -lt 3; $i++) {
        Fill-Round $g $panel (340 + $i * 390) 40 370 160 20
        Fill-Round $g $accent2 (370 + $i * 390) 130 140 24 8
        Fill-Round $g $muted (370 + $i * 390) 80 220 30 8
      }
      Fill-Round $g $panel 340 240 1156 430 20
      $heights = @(120, 200, 160, 260, 220, 320, 280, 360, 300, 380)
      for ($i = 0; $i -lt 10; $i++) {
        $h = $heights[$i]
        $col = if ($i % 2 -eq 0) { $accent } else { $accent2 }
        Fill-Round $g $col (400 + $i * 105) (630 - $h) 60 $h 8
      }
      Fill-Round $g $panel 340 710 1156 274 20
      for ($i = 0; $i -lt 4; $i++) { Fill-Round $g $card 380 (750 + $i * 58) 1076 38 8 }
    }
    "storefront" {
      Fill-Round $g $panel 0 0 1536 100 0
      Fill-Round $g $accent 60 30 160 40 10
      for ($i = 0; $i -lt 4; $i++) { Fill-Round $g $card (700 + $i * 160) 36 120 28 8 }
      Fill-Round $g $accent 60 140 1416 320 24
      Fill-Round $g $panel 120 220 480 60 12
      Fill-Round $g $accent2 120 310 220 50 25
      for ($i = 0; $i -lt 3; $i++) {
        Fill-Round $g $panel (60 + $i * 480) 510 440 440 20
        Fill-Round $g $card (90 + $i * 480) 540 380 240 14
        Fill-Round $g $muted (90 + $i * 480) 810 260 26 8
        Fill-Round $g $accent (90 + $i * 480) 860 120 34 10
      }
    }
    "mobile" {
      Fill-Round $g $card 120 100 500 824 30
      Fill-Round $g $muted 160 160 420 40 12
      for ($i = 0; $i -lt 5; $i++) { Fill-Round $g $panel 160 (240 + $i * 130) 420 100 16 }
      Fill-Round $g $panel 660 60 420 904 60
      Fill-Round $g $accent 700 120 340 180 24
      Fill-Round $g $panel 720 150 200 30 10
      for ($i = 0; $i -lt 4; $i++) { Fill-Round $g $card (700 + ($i % 2) * 178) (340 + [math]::Floor($i / 2) * 130) 162 110 18 }
      for ($i = 0; $i -lt 3; $i++) { Fill-Round $g $card 700 (620 + $i * 90) 340 70 16 }
      Fill-Round $g $accent2 700 890 340 40 20
      Fill-Round $g $panel 1120 100 320 824 30
      for ($i = 0; $i -lt 6; $i++) { Fill-Round $g $card 1150 (140 + $i * 130) 260 100 16 }
    }
    "console" {
      Fill-Round $g $panel 40 40 220 944 20
      Fill-Round $g $accent 66 80 168 40 10
      for ($i = 0; $i -lt 7; $i++) { Fill-Round $g $card 66 (160 + $i * 62) 168 36 10 }
      for ($i = 0; $i -lt 4; $i++) {
        Fill-Round $g $panel (300 + $i * 305) 40 285 140 18
        Fill-Round $g $accent2 (330 + $i * 305) 120 100 22 8
        Fill-Round $g $muted (330 + $i * 305) 75 160 26 8
      }
      Fill-Round $g $panel 300 220 780 400 18
      for ($i = 0; $i -lt 12; $i++) {
        $h = 40 + ($i * 47) % 260
        Fill-Round $g $accent (340 + $i * 60) (580 - $h) 34 $h 6
      }
      Fill-Round $g $panel 1110 220 386 400 18
      for ($i = 0; $i -lt 5; $i++) { Fill-Round $g $card 1140 (260 + $i * 68) 326 48 10 }
      Fill-Round $g $panel 300 660 1196 324 18
      for ($i = 0; $i -lt 5; $i++) {
        Fill-Round $g $card 340 (700 + $i * 56) 1116 36 8
        Fill-Round $g $accent2 360 (708 + $i * 56) 20 20 10
      }
    }
    "security" {
      Fill-Round $g $panel 40 40 260 944 20
      Fill-Round $g $accent 70 80 200 44 10
      for ($i = 0; $i -lt 6; $i++) { Fill-Round $g $card 70 (170 + $i * 70) 200 40 10 }
      $pen = New-Object System.Drawing.Pen($accent, 5)
      $pen2 = New-Object System.Drawing.Pen($accent2, 3)
      $cx = 700; $cy = 400
      foreach ($r in 80, 150, 220, 290) { $g.DrawEllipse($pen2, ($cx - $r), ($cy - $r), ($r * 2), ($r * 2)) }
      $b = New-Object System.Drawing.SolidBrush($accent)
      foreach ($pt in @(@(640, 320), @(790, 430), @(700, 520), @(560, 460))) { $g.FillEllipse($b, $pt[0], $pt[1], 22, 22) }
      $b.Dispose(); $pen.Dispose(); $pen2.Dispose()
      Fill-Round $g $panel 1060 40 436 680 20
      for ($i = 0; $i -lt 7; $i++) {
        Fill-Round $g $card 1090 (80 + $i * 90) 376 66 12
        $col = if ($i % 3 -eq 0) { $accent } else { $accent2 }
        Fill-Round $g $col 1104 (96 + $i * 90) 34 34 17
      }
      Fill-Round $g $panel 340 760 1156 224 20
      for ($i = 0; $i -lt 3; $i++) { Fill-Round $g $card 380 (800 + $i * 56) 1076 36 8 }
    }
    "chat" {
      Fill-Round $g $panel 40 40 380 944 20
      Fill-Round $g $accent 70 80 240 44 12
      for ($i = 0; $i -lt 8; $i++) { Fill-Round $g $card 70 (170 + $i * 90) 320 64 14 }
      Fill-Round $g $panel 460 40 1036 944 20
      $left = @(180, 420, 660)
      foreach ($y in $left) {
        Fill-Round $g $card 520 $y 480 110 22
        Fill-Round $g $muted 550 ($y + 26) 380 20 8
        Fill-Round $g $muted 550 ($y + 60) 300 20 8
      }
      $right = @(320, 560)
      foreach ($y in $right) {
        Fill-Round $g $accent 900 $y 520 100 22
        $lighter = [System.Drawing.Color]::FromArgb(120, 255, 255, 255)
        Fill-Round $g $lighter 930 ($y + 24) 420 18 8
        Fill-Round $g $lighter 930 ($y + 54) 320 18 8
      }
      Fill-Round $g $card 520 860 800 70 35
      Fill-Round $g $accent2 1340 860 100 70 35
    }
  }

  $g.Dispose()
  $out = Join-Path $outDir ($s.name + ".png")
  $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output ("saved " + $out)
}
