/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { ExtendKcContext } from "keycloakify/login";
import type { KcEnvName, ThemeName } from "../kc.gen";

export type KcContextExtension = {
    themeName: ThemeName;
    properties: {
        kcEnvName: KcEnvName;
    };
    msgStr: (key: string, ...args: string[]) => string;
    // NOTE: Here you can declare more properties to extend the KcContext
    // See: https://docs.keycloakify.dev/faq-and-help/some-values-you-need-are-missing-from-in-kccontext
};

export type KcContextExtensionPerPage = {
    "login.ftl": {
        social: {
            providers?: {
                providerId: string;
                displayName: string;
                loginUrl: string;
            }[];
        };
        realm: {
            rememberMe: boolean;
        };
        rememberMe: "on" | undefined;
    };
    "register.ftl": {
        social: {
            providers?: {
                providerId: string;
                displayName: string;
                loginUrl: string;
            }[];
        };
    };
    "login-reset-password.ftl": {};
    "login-update-password.ftl": {
        username: string;
    };
    "login-info.ftl": {};
    "error.ftl": {};
    "login-otp.ftl": {};
    "terms.ftl": {
        termsAndConditions: string;
    };
    "login-verify-email.ftl": {
        url: {
            loginUrl: string;
        }
    };
    "login-config-totp.ftl": {};
    "webauthn-register.ftl": {};
    "webauthn-authenticate.ftl": {};
    "login-update-profile.ftl": {
        profile: {
            attributes: {
                name: string;
                displayName: string;
                value?: string;
                validators: Record<string, unknown>;
            }[];
        };
    };
};

export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
