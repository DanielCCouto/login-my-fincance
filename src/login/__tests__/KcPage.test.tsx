import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import KcPage from '../KcPage';
import { getKcContextMock } from '../KcPageStory';

// Mock do hook useI18n
vi.mock('../i18n', () => ({
    useI18n: () => ({
        msgStr: (key: string) => key
    })
}));

describe('KcPage', () => {
    it('deve renderizar página de login corretamente', () => {
        const mockContext = getKcContextMock({
            pageId: 'login.ftl',
            overrides: {}
        });

        render(<KcPage kcContext={mockContext} />);
        
        expect(screen.getByText('doLogIn')).toBeInTheDocument();
        expect(screen.getByLabelText('Username or email')).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
    });

    it('deve renderizar página de registro corretamente', () => {
        const mockContext = getKcContextMock({
            pageId: 'register.ftl',
            overrides: {}
        });

        render(<KcPage kcContext={mockContext} />);
        
        // Verificar se o componente de registro foi renderizado
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('deve renderizar fallback para página não implementada', () => {
        const mockContext = getKcContextMock({
            pageId: 'login-oauth2-device-verify-user-code.ftl',
            overrides: {}
        });

        render(<KcPage kcContext={mockContext} />);
        
        expect(screen.getByText('Page not implemented')).toBeInTheDocument();
        expect(screen.getByText(/login-oauth2-device-verify-user-code\.ftl/)).toBeInTheDocument();
    });

    it('deve retornar null quando i18n é null', () => {
        // Mock do hook para retornar null
        vi.mocked(require('../i18n').useI18n).mockReturnValue(null);

        const mockContext = getKcContextMock({
            pageId: 'login.ftl',
            overrides: {}
        });

        const { container } = render(<KcPage kcContext={mockContext} />);
        expect(container.firstChild).toBeNull();
    });
}); 