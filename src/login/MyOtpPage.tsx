import type { KcContext } from "./KcContext";
import { FiShield, FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyOtpPageProps = {
    kcContext: Extract<KcContext, { pageId: "login-otp.ftl" }>;
};

export default function MyOtpPage(props: MyOtpPageProps) {
    const { kcContext } = props;
    const { url } = kcContext;
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
                            Verificação de segurança
                        </h1>
                        <p className="text-white/70 text-sm">
                            Digite o código enviado para seu dispositivo
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form
                        id="kc-otp-login-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* OTP Input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                autoFocus
                                className="block w-full px-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-center text-2xl tracking-widest"
                                placeholder="000000"
                                maxLength={6}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                        >
                            Verificar código
                        </button>
                    </form>

                    {/* Alternative Actions */}
                    <div className="mt-6 space-y-3">
                        <button
                            type="button"
                            className="w-full backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-3 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiRefreshCw className="w-4 h-4" />
                            Reenviar código
                        </button>
                        
                        <a
                            href={url.loginUrl}
                            className="w-full backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-3 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            Voltar ao login
                        </a>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-white/50 text-xs">
                            O código expira em 5 minutos
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
