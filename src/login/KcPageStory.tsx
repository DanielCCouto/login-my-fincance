import type { DeepPartial } from "keycloakify/tools/DeepPartial";
import type { KcContext } from "./KcContext";
import KcPage from "./KcPage";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext";
import { themeNames } from "../kc.gen";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        kcEnvName: "never" as never
    },
    // Mocking the msgStr function for Storybook
    msgStr: (_key: string) => _key
};

const kcContextExtensionPerPage: KcContextExtensionPerPage = {
    "login.ftl": {
        social: {
            providers: [
                { providerId: "google", displayName: "Google", loginUrl: "#" },
                { providerId: "microsoft", displayName: "Microsoft", loginUrl: "#" },
                { providerId: "apple", displayName: "Apple", loginUrl: "#" },
                { providerId: "github", displayName: "GitHub", loginUrl: "#" }
            ]
        },
        realm: {
            rememberMe: true
        },
        rememberMe: "on"
    },
    "register.ftl": {
        social: {
            providers: []
        }
    },
    "login-reset-password.ftl": {},
    "login-update-password.ftl": {
        username: "testuser"
    },
    "login-info.ftl": {},
    "error.ftl": {},
    "login-otp.ftl": {},
    "terms.ftl": {
        termsAndConditions: "<p>Termos e condições de teste</p>"
    },
    "login-verify-email.ftl": {
        url: {
            loginUrl: "#"
        }
    },
    "login-config-totp.ftl": {},
    "webauthn-register.ftl": {},
    "webauthn-authenticate.ftl": {},
    "login-update-profile.ftl": {
        profile: {
            attributes: []
        }
    }
};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {}
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
    pageId: PageId;
}) {
    const { pageId } = params;

    function KcPageStory(props: {
        kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
    }) {
        const { kcContext: overrides } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides
        });

        return <KcPage kcContext={kcContextMock} />;
    }

    return { KcPageStory };
}
