/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Brand Colors - Light & Modern
                'brand': {
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
                'secondary': {
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
                'accent': {
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
                },
                // Glassmorphism Colors
                'glass': {
                    primary: 'rgba(14, 165, 233, 0.1)',
                    secondary: 'rgba(16, 185, 129, 0.1)',
                    accent: 'rgba(168, 85, 247, 0.1)',
                    neutral: 'rgba(255, 255, 255, 0.1)',
                    backdrop: 'rgba(255, 255, 255, 0.05)',
                    border: 'rgba(255, 255, 255, 0.2)',
                    shadow: 'rgba(0, 0, 0, 0.1)',
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #a855f7 0%, #0ea5e9 100%)',
                'gradient-accent': 'linear-gradient(135deg, #10b981 0%, #a855f7 100%)',
                'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                'gradient-background': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                'gradient-sky': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 50%, #bae6fd 75%, #e0f2fe 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glass-light': '0 4px 16px 0 rgba(255, 255, 255, 0.1)',
                'brand': '0 4px 6px -1px rgb(14 165 233 / 0.1), 0 2px 4px -1px rgb(14 165 233 / 0.06)',
                'secondary': '0 4px 6px -1px rgb(16 185 129 / 0.1), 0 2px 4px -1px rgb(16 185 129 / 0.06)',
            },
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
                '3xl': '40px',
            }
        }
    },
    plugins: []
};