# Script de Deploy - Kubbeevault Theme
# PowerShell script para automatizar o processo de deploy

Write-Host "🚀 Iniciando deploy do Kubbeevault Theme..." -ForegroundColor Green

# Verificar se o Docker está rodando
Write-Host "📋 Verificando Docker..." -ForegroundColor Yellow
try {
    docker version | Out-Null
    Write-Host "✅ Docker está rodando" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker não está rodando. Por favor, inicie o Docker Desktop." -ForegroundColor Red
    exit 1
}

# Verificar se as portas estão livres
Write-Host "🔍 Verificando portas..." -ForegroundColor Yellow
$port8080 = Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue
$port5432 = Get-NetTCPConnection -LocalPort 5432 -ErrorAction SilentlyContinue

if ($port8080) {
    Write-Host "⚠️  Porta 8080 está em uso. Parando serviços conflitantes..." -ForegroundColor Yellow
    # Tentar parar containers que possam estar usando a porta
    docker-compose down 2>$null
}

if ($port5432) {
    Write-Host "⚠️  Porta 5432 está em uso. Verifique se não há outro PostgreSQL rodando." -ForegroundColor Yellow
}

# Build do tema
Write-Host "🔨 Construindo tema..." -ForegroundColor Yellow
try {
    npm run build-keycloak-theme
    Write-Host "✅ Tema construído com sucesso" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro ao construir o tema" -ForegroundColor Red
    exit 1
}

# Verificar se os arquivos foram gerados
$jarFile = "dist_keycloak/keycloak-theme-for-kc-22-to-25.jar"
if (Test-Path $jarFile) {
    $fileSize = (Get-Item $jarFile).Length / 1MB
    $fileSizeMB = [math]::Round($fileSize, 2)
    Write-Host "✅ Arquivo JAR gerado: $jarFile ($fileSizeMB MB)" -ForegroundColor Green
} else {
    Write-Host "❌ Arquivo JAR não encontrado" -ForegroundColor Red
    exit 1
}

# Deploy com Docker Compose
Write-Host "🐳 Iniciando serviços com Docker Compose..." -ForegroundColor Yellow
try {
    docker-compose up -d
    Write-Host "✅ Serviços iniciados com sucesso" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro ao iniciar serviços" -ForegroundColor Red
    exit 1
}

# Aguardar serviços inicializarem
Write-Host "⏳ Aguardando serviços inicializarem..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Verificar status dos containers
Write-Host "📊 Status dos containers:" -ForegroundColor Yellow
docker-compose ps

# Verificar logs
Write-Host "📋 Últimos logs do Keycloak:" -ForegroundColor Yellow
docker-compose logs --tail=10 keycloak

Write-Host ""
Write-Host "🎉 Deploy concluído com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Acesse o Keycloak em: http://localhost:8080" -ForegroundColor Cyan
Write-Host "👤 Login: admin / admin123" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Comandos úteis:" -ForegroundColor Yellow
Write-Host "   docker-compose logs -f          # Ver logs em tempo real" -ForegroundColor White
Write-Host "   docker-compose down             # Parar serviços" -ForegroundColor White
Write-Host "   docker-compose restart          # Reiniciar serviços" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Para instalar o tema no Keycloak:" -ForegroundColor Yellow
Write-Host "   1. Acesse http://localhost:8080" -ForegroundColor White
Write-Host "   2. Login com admin/admin123" -ForegroundColor White
Write-Host "   3. Vá em 'Themes' no menu lateral" -ForegroundColor White
Write-Host "   4. Faça upload do arquivo .jar" -ForegroundColor White
Write-Host "   5. Selecione o tema 'kubbeevault'" -ForegroundColor White 