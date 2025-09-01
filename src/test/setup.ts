import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Configurações globais para testes
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock do window.kcContext para testes
Object.defineProperty(window, 'kcContext', {
    writable: true,
    value: undefined,
}); 