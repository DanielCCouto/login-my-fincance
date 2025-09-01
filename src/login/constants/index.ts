// Constantes de tempo (em segundos)
export const TIMEOUTS = {
    DEPLOY_WAIT: 10,
    DOCKER_STARTUP: 30,
    HEALTH_CHECK: 5,
} as const;

// Constantes de portas
export const PORTS = {
    KEYCLOAK: 8080,
    POSTGRES: 5432,
    REDIS: 6379,
    STORYBOOK: 6006,
    VITE_DEV: 5173,
} as const;

// Constantes de tamanhos de arquivo (em MB)
export const FILE_SIZES = {
    MAX_JAR_SIZE: 10,
    MIN_JAR_SIZE: 1,
} as const;

// Constantes de URLs
export const URLS = {
    KEYCLOAK_ADMIN: 'http://localhost:8080',
    STORYBOOK: 'http://localhost:6006',
    VITE_DEV: 'http://localhost:5173',
} as const;

// Constantes de credenciais padrão
export const DEFAULT_CREDENTIALS = {
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'admin123',
    DB_USERNAME: 'keycloak',
    DB_PASSWORD: 'password',
} as const;

// Constantes de CSS classes
export const CSS_CLASSES = {
    CONTAINER: 'min-h-screen w-full flex flex-col items-center justify-center bg-white p-4 font-sans',
    CENTERED: 'flex items-center justify-center',
    TEXT_CENTER: 'text-center',
    HEADING: 'text-2xl font-semibold text-gray-900 mb-4',
    SUBTEXT: 'text-gray-500',
    BUTTON_PRIMARY: 'w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg',
    INPUT_FIELD: 'block px-4 py-3 w-full text-base text-gray-900 bg-transparent rounded-full border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 peer',
} as const;

// Constantes de mensagens
export const MESSAGES = {
    ERRORS: {
        DOCKER_NOT_RUNNING: 'Docker não está rodando. Por favor, inicie o Docker Desktop.',
        BUILD_FAILED: 'Erro ao construir o tema',
        JAR_NOT_FOUND: 'Arquivo JAR não encontrado',
        SERVICES_FAILED: 'Erro ao iniciar serviços',
    },
    SUCCESS: {
        DOCKER_RUNNING: 'Docker está rodando',
        THEME_BUILT: 'Tema construído com sucesso',
        SERVICES_STARTED: 'Serviços iniciados com sucesso',
        DEPLOY_COMPLETED: 'Deploy concluído com sucesso',
    },
    INFO: {
        CHECKING_DOCKER: 'Verificando Docker...',
        CHECKING_PORTS: 'Verificando portas...',
        BUILDING_THEME: 'Construindo tema...',
        STARTING_SERVICES: 'Iniciando serviços com Docker Compose...',
        WAITING_SERVICES: 'Aguardando serviços inicializarem...',
    },
} as const;

// Constantes de provedores sociais
export const SOCIAL_PROVIDERS = {
    GOOGLE: 'google',
    MICROSOFT: 'microsoft',
    APPLE: 'apple',
    GITHUB: 'github',
} as const;

// Mapeamento de ícones para provedores sociais
export const SOCIAL_ICON_MAP = {
    [SOCIAL_PROVIDERS.GOOGLE]: 'FaGoogle',
    [SOCIAL_PROVIDERS.MICROSOFT]: 'FaMicrosoft',
    [SOCIAL_PROVIDERS.APPLE]: 'FaApple',
    [SOCIAL_PROVIDERS.GITHUB]: 'FaGithub',
} as const;

// My Finance Theme Constants
export const MY_FINANCE_THEME = {
    // Branding
    name: "My Finance",
    description: "Sistema de Controle Financeiro Pessoal",
    version: "1.0.0",
    
    // Colors
    colors: {
        primary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#10b981', // Main green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
        },
        secondary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6', // Trust blue
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },
        accent: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b', // Success gold
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
        },
        neutral: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280', // Professional gray
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
        }
    },
    
    // Typography
    typography: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        }
    },
    
    // Spacing
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
    },
    
    // Border radius
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
    },
    
    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        finance: '0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06)',
        trust: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
    },
    
    // Messages
    messages: {
        welcome: "Bem-vindo ao My Finance",
        subtitle: "Controle total das suas finanças",
        login: "Entrar",
        register: "Criar conta",
        forgotPassword: "Esqueceu a senha?",
        rememberMe: "Lembrar de mim",
        email: "E-mail",
        password: "Senha",
        confirmPassword: "Confirmar senha",
        firstName: "Nome",
        lastName: "Sobrenome",
        username: "Nome de usuário",
        terms: "Termos de uso",
        privacy: "Política de privacidade",
    },
    
    // Features
    features: {
        authentication: {
            enabled: true,
            socialLogin: true,
            twoFactor: true,
            passwordReset: true,
        },
        dashboard: {
            enabled: false, // Will be implemented in Phase 2
            widgets: ['balance', 'transactions', 'goals', 'charts'],
        },
        transactions: {
            enabled: false, // Will be implemented in Phase 3
            categories: ['income', 'expense', 'transfer', 'investment'],
        },
        reports: {
            enabled: false, // Will be implemented in Phase 4
            types: ['monthly', 'annual', 'category', 'trend'],
        },
        goals: {
            enabled: false, // Will be implemented in Phase 5
            types: ['savings', 'debt', 'investment', 'emergency'],
        },
    }
};

// Export individual constants for easier use
export const { colors, typography, spacing, borderRadius, shadows, messages, features } = MY_FINANCE_THEME; 