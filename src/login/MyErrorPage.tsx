import type { KcContext } from "./KcContext";
import { FiAlertTriangle, FiArrowLeft, FiHome } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyErrorPageProps = {
    kcContext: Extract<KcContext, { pageId: "error.ftl" }>;
};

export default function MyErrorPage(props: MyErrorPageProps) {
    const { kcContext } = props;
    const { url, message, client } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative font-sans py-8">
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
            <div className="w-full max-w-md px-6 z-10 flex-1 flex flex-col justify-center">
                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-glass-backdrop border border-glass-border rounded-2xl shadow-glass p-8">
                    {/* Error Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                            <FiAlertTriangle className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Ops! Algo deu errado
                        </h1>
                        <p className="text-white/70 text-sm">
                            Encontramos um problema inesperado
                        </p>
                    </div>

                    {/* Error Message */}
                    {message && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-300 text-sm text-center">
                                {message.summary}
                            </p>
                        </div>
                    )}

                    {/* Client Info */}
                    {client && (
                        <div className="mb-6 p-4 bg-glass-primary/20 border border-glass-border rounded-xl">
                            <p className="text-white/70 text-sm text-center">
                                Aplicação: <span className="text-white font-medium">{client.name}</span>
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <a
                            href={url.loginUrl}
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <FiArrowLeft className="w-5 h-5" />
                            Tentar novamente
                        </a>
                        
                        <a
                            href="/"
                            className="w-full backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-4 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiHome className="w-5 h-5" />
                            Voltar ao início
                        </a>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-white/50 text-xs">
                            Se o problema persistir, entre em contato com nosso suporte
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
