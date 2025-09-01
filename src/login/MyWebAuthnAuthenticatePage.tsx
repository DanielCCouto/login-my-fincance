import type { KcContext } from "./KcContext";
import { FiShield, FiArrowLeft, FiSmartphone } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyWebAuthnAuthenticatePageProps = {
    kcContext: Extract<KcContext, { pageId: "webauthn-authenticate.ftl" }>;
};

export default function MyWebAuthnAuthenticatePage(props: MyWebAuthnAuthenticatePageProps) {
    const { kcContext } = props;
    const { url } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;
    const { msgStr } = i18n;

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative font-sans">
            {/* Animated Background */}
            <StarryBackground />

            {/* Top Left Brand */}
            <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
                <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">$</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-secondary-400 rounded-full blur-lg opacity-30"></div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    My Finance
                </h1>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md px-6 z-10">
                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-glass-backdrop border border-glass-border rounded-2xl shadow-glass p-8">
                    {/* Security Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiSmartphone className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Login biométrico
                        </h1>
                        <p className="text-white/70 text-sm">
                            Use sua impressão digital ou PIN para acessar
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="mb-6 p-4 bg-glass-primary/20 border border-glass-border rounded-xl">
                        <div className="flex items-start gap-3">
                            <FiShield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div className="text-white/80 text-sm">
                                <p className="mb-2">Para fazer login:</p>
                                <ol className="list-decimal list-inside space-y-1 text-white/70">
                                    <li>Clique em "Autenticar"</li>
                                    <li>Siga as instruções do seu navegador</li>
                                    <li>Use sua impressão digital ou PIN</li>
                                    <li>Aguarde a verificação</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Authentication Form */}
                    <form
                        id="kc-webauthn-authenticate-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <FiSmartphone className="w-5 h-5" />
                            Autenticar
                        </button>
                    </form>

                    {/* Alternative Login */}
                    <div className="mt-6 text-center">
                        <a
                            href={url.loginUrl}
                            className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-medium transition-colors"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            Usar senha tradicional
                        </a>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-white/50 text-xs">
                            Certifique-se de que seu dispositivo está conectado
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-white/50 text-xs">
                    <p>© 2025 My Finance. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    );
}
