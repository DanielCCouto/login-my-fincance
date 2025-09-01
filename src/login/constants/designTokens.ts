// My Finance Design System - Modern & Minimalist
export const DESIGN_TOKENS = {
    // Brand Colors - Light & Modern
    brand: {
        primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9', // Main brand blue
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
        },
        secondary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#10b981', // Success green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
        },
        accent: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7', // Purple accent
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
        }
    },

    // Semantic Colors
    semantic: {
        success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
        },
        warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
        },
        error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
        },
        info: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        }
    },

    // Neutral Colors - Light Theme
    neutral: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
    },

    // Glassmorphism Colors
    glass: {
        primary: 'rgba(14, 165, 233, 0.1)',
        secondary: 'rgba(16, 185, 129, 0.1)',
        accent: 'rgba(168, 85, 247, 0.1)',
        neutral: 'rgba(255, 255, 255, 0.1)',
        backdrop: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.2)',
        shadow: 'rgba(0, 0, 0, 0.1)',
    },

    // Gradients
    gradients: {
        primary: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
        secondary: 'linear-gradient(135deg, #a855f7 0%, #0ea5e9 100%)',
        accent: 'linear-gradient(135deg, #10b981 0%, #a855f7 100%)',
        glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        sky: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 50%, #bae6fd 75%, #e0f2fe 100%)',
    },

    // Typography
    typography: {
        fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        }
    },

    // Spacing
    spacing: {
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },

    // Border Radius
    borderRadius: {
        none: '0px',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },

    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: '0 0 #0000',
        // Glassmorphism shadows
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        glassLight: '0 4px 16px 0 rgba(255, 255, 255, 0.1)',
        // Custom shadows for My Finance
        finance: '0 4px 6px -1px rgb(14 165 233 / 0.1), 0 2px 4px -1px rgb(14 165 233 / 0.06)',
        trust: '0 4px 6px -1px rgb(16 185 129 / 0.1), 0 2px 4px -1px rgb(16 185 129 / 0.06)',
        success: '0 4px 6px -1px rgb(34 197 94 / 0.1), 0 2px 4px -1px rgb(34 197 94 / 0.06)',
    },

    // Transitions
    transitions: {
        duration: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
        timing: {
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
    },

    // Z-Index
    zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        auto: 'auto',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        modalBackdrop: '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
    }
};

// Component-specific tokens
export const COMPONENT_TOKENS = {
    // Button variants
    button: {
        primary: {
            background: DESIGN_TOKENS.gradients.primary,
            backgroundHover: 'linear-gradient(135deg, #0284c7 0%, #059669 100%)',
            backgroundActive: 'linear-gradient(135deg, #0369a1 0%, #047857 100%)',
            text: '#ffffff',
            border: 'transparent',
            shadow: DESIGN_TOKENS.shadows.finance,
        },
        secondary: {
            background: DESIGN_TOKENS.glass.primary,
            backgroundHover: 'rgba(14, 165, 233, 0.2)',
            backgroundActive: 'rgba(14, 165, 233, 0.3)',
            text: '#ffffff',
            border: `1px solid ${DESIGN_TOKENS.glass.border}`,
            shadow: DESIGN_TOKENS.shadows.glass,
        },
        outline: {
            background: 'transparent',
            backgroundHover: DESIGN_TOKENS.glass.backdrop,
            backgroundActive: DESIGN_TOKENS.glass.primary,
            text: '#ffffff',
            border: `1px solid ${DESIGN_TOKENS.glass.border}`,
            shadow: 'none',
        },
        ghost: {
            background: 'transparent',
            backgroundHover: DESIGN_TOKENS.glass.backdrop,
            backgroundActive: DESIGN_TOKENS.glass.primary,
            text: '#ffffff',
            border: 'transparent',
            shadow: 'none',
        }
    },

    // Input variants
    input: {
        default: {
            background: DESIGN_TOKENS.glass.backdrop,
            border: `1px solid ${DESIGN_TOKENS.glass.border}`,
            borderFocus: `2px solid ${DESIGN_TOKENS.brand.primary[400]}`,
            text: '#ffffff',
            placeholder: 'rgba(255, 255, 255, 0.7)',
            shadow: DESIGN_TOKENS.shadows.glass,
        },
        error: {
            background: DESIGN_TOKENS.glass.backdrop,
            border: `1px solid ${DESIGN_TOKENS.semantic.error[400]}`,
            borderFocus: `2px solid ${DESIGN_TOKENS.semantic.error[500]}`,
            text: '#ffffff',
            placeholder: 'rgba(255, 255, 255, 0.7)',
            shadow: DESIGN_TOKENS.shadows.glass,
        },
        success: {
            background: DESIGN_TOKENS.glass.backdrop,
            border: `1px solid ${DESIGN_TOKENS.semantic.success[400]}`,
            borderFocus: `2px solid ${DESIGN_TOKENS.semantic.success[500]}`,
            text: '#ffffff',
            placeholder: 'rgba(255, 255, 255, 0.7)',
            shadow: DESIGN_TOKENS.shadows.glass,
        }
    },

    // Card variants
    card: {
        glass: {
            background: DESIGN_TOKENS.glass.backdrop,
            border: `1px solid ${DESIGN_TOKENS.glass.border}`,
            shadow: DESIGN_TOKENS.shadows.glass,
            backdropFilter: 'blur(16px)',
        },
        elevated: {
            background: DESIGN_TOKENS.glass.backdrop,
            border: 'transparent',
            shadow: DESIGN_TOKENS.shadows.glassLight,
            backdropFilter: 'blur(24px)',
        },
        outline: {
            background: 'transparent',
            border: `1px solid ${DESIGN_TOKENS.glass.border}`,
            shadow: 'none',
            backdropFilter: 'none',
        }
    }
};

// Export individual sections for easier use
export const { brand, semantic, neutral, glass, gradients, typography, spacing, borderRadius, shadows, transitions, zIndex } = DESIGN_TOKENS;
export const { button, input, card } = COMPONENT_TOKENS;
