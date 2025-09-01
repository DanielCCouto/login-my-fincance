# My Finance - Design System

## 🎨 Visão Geral

Este design system foi criado para o **My Finance**, um sistema de controle financeiro pessoal moderno e minimalista. O design utiliza **glassmorphism**, **gradientes suaves** e uma **paleta de cores clara** para criar uma experiência visual elegante e profissional.

## 🎯 Princípios de Design

### Moderno & Minimalista
- Interface limpa e focada na usabilidade
- Elementos visuais essenciais apenas
- Espaçamento generoso e hierarquia clara

### Glassmorphism
- Efeito de vidro fosco (backdrop-blur)
- Transparências sutis
- Bordas suaves e sombras delicadas

### Acessibilidade
- Contraste adequado para leitura
- Estados de foco bem definidos
- Animações suaves e não intrusivas

## 🌈 Paleta de Cores

### Cores Principais
```css
/* Azul Principal */
--brand-500: #0ea5e9
--brand-600: #0284c7
--brand-700: #0369a1

/* Verde Secundário */
--secondary-500: #10b981
--secondary-600: #059669
--secondary-700: #047857

/* Roxo Acento */
--accent-500: #a855f7
--accent-600: #9333ea
--accent-700: #7c3aed
```

### Cores Semânticas
```css
/* Sucesso */
--success-500: #22c55e

/* Aviso */
--warning-500: #f59e0b

/* Erro */
--error-500: #ef4444

/* Informação */
--info-500: #3b82f6
```

### Glassmorphism
```css
/* Transparências */
--glass-primary: rgba(14, 165, 233, 0.1)
--glass-backdrop: rgba(255, 255, 255, 0.05)
--glass-border: rgba(255, 255, 255, 0.2)
```

## 🎭 Gradientes

### Gradientes Principais
```css
/* Primário: Azul → Verde */
background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)

/* Secundário: Roxo → Azul */
background: linear-gradient(135deg, #a855f7 0%, #0ea5e9 100%)

/* Acento: Verde → Roxo */
background: linear-gradient(135deg, #10b981 0%, #a855f7 100%)
```

### Gradientes de Fundo
```css
/* Background Principal */
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)

/* Céu Estrelado */
background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 50%, #bae6fd 75%, #e0f2fe 100%)
```

## 📝 Tipografia

### Família de Fontes
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Hierarquia
```css
/* Títulos */
.text-3xl: 1.875rem (30px) - Títulos principais
.text-2xl: 1.5rem (24px) - Subtítulos
.text-xl: 1.25rem (20px) - Títulos de seção

/* Corpo */
.text-base: 1rem (16px) - Texto principal
.text-sm: 0.875rem (14px) - Texto secundário
.text-xs: 0.75rem (12px) - Texto pequeno
```

### Pesos
```css
font-thin: 100
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
```

## 🧩 Componentes

### Botões

#### Botão Primário
```css
.btn-primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(14 165 233 / 0.1);
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgb(14 165 233 / 0.2);
}
```

#### Botão Glassmorphism
```css
.btn-glass {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}
```

### Inputs

#### Input Glassmorphism
```css
.input-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.input-glass:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
}
```

### Cards

#### Card Glassmorphism
```css
.card-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2rem;
}
```

## 🎬 Animações

### Transições
```css
/* Transição Suave */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

/* Hover Scale */
transform: scale(1.02)

/* Fade In */
opacity: 0 → 1
transition: opacity 0.3s ease
```

### Animações de Background
```css
/* Estrelas Pulsantes */
@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.star {
  animation: pulse 3s infinite;
  animation-delay: var(--delay);
}
```

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Layout Adaptativo
- **Mobile**: Layout vertical, cards empilhados
- **Tablet**: Layout em grid 2 colunas
- **Desktop**: Layout em grid 3+ colunas

## 🎨 Estados Visuais

### Estados de Interação
```css
/* Hover */
.hover\:bg-glass-primary:hover {
  background: rgba(14, 165, 233, 0.2);
}

/* Focus */
.focus\:ring-brand-400:focus {
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
}

/* Active */
.active\:scale-95:active {
  transform: scale(0.95);
}
```

### Estados de Loading
```css
.loading {
  opacity: 0.7;
  pointer-events: none;
}

.spinner {
  animation: spin 1s linear infinite;
}
```

## 🔧 Implementação

### Tailwind CSS
O design system é implementado usando Tailwind CSS com configurações customizadas:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { /* ... */ },
        glass: { /* ... */ }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px'
      }
    }
  }
}
```

### React Components
Componentes reutilizáveis com TypeScript:

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'glass';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

## 📊 Métricas de Performance

### Bundle Size
- **CSS**: ~23KB (gzipped: ~4.5KB)
- **JS**: ~144KB (gzipped: ~46KB)
- **Total**: ~167KB (gzipped: ~50KB)

### Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Melhorias Futuras

### Planejadas
- [ ] Modo escuro/claro
- [ ] Mais variantes de componentes
- [ ] Sistema de ícones customizado
- [ ] Animações mais complexas
- [ ] Temas sazonais

### Considerações
- Acessibilidade WCAG 2.1 AA
- Performance em dispositivos móveis
- Compatibilidade cross-browser
- SEO e meta tags

---

**Desenvolvido com ❤️ para My Finance**
*Design System v1.0.0*
