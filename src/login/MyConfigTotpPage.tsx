import type { KcContext } from "./KcContext";
import { FiShield, FiCode, FiKey, FiArrowLeft } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyConfigTotpPageProps = {
    kcContext: Extract<KcContext, { pageId: "login-config-totp.ftl" }>;
};

export default function MyConfigTotpPage(props: MyConfigTotpPageProps) {
    const { kcContext } = props;
    const { url, totp } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;

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
                            <FiShield className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Autenticação 2FA
                        </h1>
                        <p className="text-white/70 text-sm">
                            Configure a verificação em duas etapas
                        </p>
                    </div>

                    {/* QR Code Section */}
                    {totp.qrUrl && (
                        <div className="mb-6 text-center">
                            <div className="inline-block p-4 bg-white rounded-xl">
                                <img 
                                    src={totp.qrUrl} 
                                    alt="QR Code" 
                                    className="w-48 h-48"
                                />
                            </div>
                            <p className="text-white/70 text-sm mt-3">
                                Escaneie o QR Code com seu app de autenticação
                            </p>
                        </div>
                    )}

                    {/* Manual Key */}
                    {totp.totpSecretEncoded && (
                        <div className="mb-6 p-4 bg-glass-primary/20 border border-glass-border rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <FiKey className="w-4 h-4 text-white/70" />
                                <span className="text-white/70 text-sm font-medium">Chave manual:</span>
                            </div>
                            <div className="bg-glass-backdrop border border-glass-border rounded-lg p-3">
                                <code className="text-white font-mono text-sm break-all">
                                    {totp.totpSecretEncoded}
                                </code>
                            </div>
                        </div>
                    )}

                    {/* Verification Form */}
                    <form
                        id="kc-totp-settings-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* OTP Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiKey className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type="text"
                                id="totp"
                                name="totp"
                                autoFocus
                                className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-center text-2xl tracking-widest"
                                placeholder="000000"
                                maxLength={6}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                        >
                            Verificar e ativar
                        </button>
                    </form>

                    {/* Instructions */}
                    <div className="mt-6 p-4 bg-glass-primary/20 border border-glass-border rounded-xl">
                        <h3 className="text-white font-medium text-sm mb-2">Como configurar:</h3>
                        <ol className="text-white/70 text-xs space-y-1 list-decimal list-inside">
                            <li>Baixe um app de autenticação (Google Authenticator, Authy, etc.)</li>
                            <li>Escaneie o QR Code ou digite a chave manual</li>
                            <li>Digite o código de 6 dígitos gerado pelo app</li>
                            <li>Clique em "Verificar e ativar"</li>
                        </ol>
                    </div>

                    {/* Back to Login */}
                    <div className="mt-6 text-center">
                        <a
                            href={url.loginUrl}
                            className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-medium transition-colors"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            Voltar ao login
                        </a>
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
