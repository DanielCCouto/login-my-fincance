# Dockerfile para Kubbeevault Theme
# Multi-stage build para otimizar o tamanho da imagem final

# Etapa 1: Build da aplicação (REMOVIDA, pois o build será feito fora do Docker)
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json yarn.lock ./
# RUN yarn install --frozen-lockfile --production=false
# COPY . .
# RUN yarn build-keycloak-theme

# Etapa 2: Imagem final otimizada
FROM alpine:3.19

# Instalar dependências mínimas
RUN apk add --no-cache ca-certificates tzdata

# Definir diretório de trabalho
WORKDIR /theme

# Copiar apenas os artefatos necessários (direto do host)
COPY dist_keycloak ./dist_keycloak

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S themeuser && \
    adduser -S themeuser -u 1001

# Mudar propriedade dos arquivos
RUN chown -R themeuser:themeuser /theme

# Mudar para usuário não-root
USER themeuser

# Expor porta (opcional, para inspeção)
EXPOSE 3000

# Comando padrão: manter container rodando
CMD ["sleep", "infinity"]

# Dica: para extrair o .jar gerado, use:
# docker cp <container_id>:/theme/dist_keycloak/keycloak-theme-for-kc-22-to-25.jar ./ 