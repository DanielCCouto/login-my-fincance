import { memo } from "react";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";

import MyDefaultPage from "./MyDefaultPage";
import MyRegisterPage from "./MyRegisterPage";
import MyResetPasswordPage from "./MyResetPasswordPage";
import MyInfoPage from "./MyInfoPage";
import MyErrorPage from "./MyErrorPage";
import MyOtpPage from "./MyOtpPage";
import MyUpdatePasswordPage from "./MyUpdatePasswordPage";
import MyTermsPage from "./MyTermsPage";
import MyVerifyEmailPage from "./MyVerifyEmailPage";
import MyConfigTotpPage from "./MyConfigTotpPage";
import MyWebAuthnRegisterPage from "./MyWebAuthnRegisterPage";
import MyWebAuthnAuthenticatePage from "./MyWebAuthnAuthenticatePage";
import MyUpdateProfilePage from "./MyUpdateProfilePage";

const KcPage = (props: { kcContext: KcContext }) => {
    const { kcContext } = props;
    const i18n = useI18n({ kcContext });

    if (i18n === null) {
        return null;
    }

    if (kcContext.pageId === "login.ftl") {
        return <MyDefaultPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "register.ftl") {
        return <MyRegisterPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-reset-password.ftl") {
        return <MyResetPasswordPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "info.ftl") {
        return <MyInfoPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "error.ftl") {
        return <MyErrorPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-otp.ftl") {
        return <MyOtpPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-update-password.ftl") {
        return <MyUpdatePasswordPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "terms.ftl") {
        return <MyTermsPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-verify-email.ftl") {
        return <MyVerifyEmailPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-config-totp.ftl") {
        return <MyConfigTotpPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "webauthn-register.ftl") {
        return <MyWebAuthnRegisterPage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "webauthn-authenticate.ftl") {
        return <MyWebAuthnAuthenticatePage kcContext={kcContext} />;
    }

    if (kcContext.pageId === "login-update-profile.ftl") {
        return <MyUpdateProfilePage kcContext={kcContext} />;
    }

    // Fallback para páginas não mapeadas
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-4 font-sans">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                    Page not implemented
                </h1>
                <p className="text-gray-500">
                    This page ({kcContext.pageId}) has not been customized yet.
                </p>
            </div>
        </div>
    );
};

export default memo(KcPage);
