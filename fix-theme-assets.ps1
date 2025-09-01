# Script para corrigir o caminho dos assets no .jar do tema Keycloakify
# Uso: Execute após rodar 'yarn build-keycloak-theme'

# Caminho do JAR de todas as versões
$jarPath = "dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar"

# Caminho temporário para extração
$tempDir = "_temp_theme_extract"

# Limpa diretório temporário se existir
if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }

# Cria diretório temporário
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Salva diretório atual
$origDir = Get-Location

# Muda para o diretório temporário e extrai o JAR
Set-Location $tempDir
jar xf ..\$jarPath
Set-Location $origDir

# Move a logo para o caminho correto (se necessário)
$logoSrc = Join-Path $tempDir "theme/keycloakify-starter/login/resources/dist/resources/img/logo.png"
$logoDst = Join-Path $tempDir "theme/keycloakify-starter/login/resources/img/logo.png"
if (Test-Path $logoSrc) {
    Move-Item $logoSrc $logoDst -Force
}

# Remove pastas 'dist' duplicadas se existirem
$distPath = Join-Path $tempDir "theme/keycloakify-starter/login/resources/dist"
if (Test-Path $distPath) {
    Remove-Item -Recurse -Force $distPath
}

# Recria o JAR corrigido
Remove-Item $jarPath -Force
jar cf $jarPath -C $tempDir theme

# Limpa diretório temporário
Remove-Item -Recurse -Force $tempDir

Write-Host "Assets corrigidos no JAR! Agora a logo estará em resources/img/logo.png dentro do tema." 