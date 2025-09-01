import MyDefaultPage from "../MyDefaultPage";
import MyRegisterPage from "../MyRegisterPage";
import MyResetPasswordPage from "../MyResetPasswordPage";
import MyInfoPage from "../MyInfoPage";
import MyErrorPage from "../MyErrorPage";
import MyOtpPage from "../MyOtpPage";
import MyUpdatePasswordPage from "../MyUpdatePasswordPage";
import MyTermsPage from "../MyTermsPage";
import MyVerifyEmailPage from "../MyVerifyEmailPage";
import MyConfigTotpPage from "../MyConfigTotpPage";
import MyWebAuthnRegisterPage from "../MyWebAuthnRegisterPage";
import MyWebAuthnAuthenticatePage from "../MyWebAuthnAuthenticatePage";
import MyUpdateProfilePage from "../MyUpdateProfilePage";

// Mapeamento de páginas para componentes
const PAGE_COMPONENT_MAP = {
    "login.ftl": MyDefaultPage,
    "register.ftl": MyRegisterPage,
    "login-reset-password.ftl": MyResetPasswordPage,
    "info.ftl": MyInfoPage,
    "error.ftl": MyErrorPage,
    "login-otp.ftl": MyOtpPage,
    "login-update-password.ftl": MyUpdatePasswordPage,
    "terms.ftl": MyTermsPage,
    "login-verify-email.ftl": MyVerifyEmailPage,
    "login-config-totp.ftl": MyConfigTotpPage,
    "webauthn-register.ftl": MyWebAuthnRegisterPage,
    "webauthn-authenticate.ftl": MyWebAuthnAuthenticatePage,
    "login-update-profile.ftl": MyUpdateProfilePage,
} as const;

export type PageId = keyof typeof PAGE_COMPONENT_MAP;

/**
 * Mapeia o pageId para o componente correspondente
 * @param pageId - ID da página do Keycloak
 * @returns Componente React correspondente ou null se não encontrado
 */
export function getPageComponent(pageId: string) {
    return PAGE_COMPONENT_MAP[pageId as PageId] || null;
}

/**
 * Verifica se uma página é suportada
 * @param pageId - ID da página do Keycloak
 * @returns true se a página é suportada
 */
export function isPageSupported(pageId: string): pageId is PageId {
    return pageId in PAGE_COMPONENT_MAP;
} 