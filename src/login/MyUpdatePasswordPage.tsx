import type { KcContext } from "./KcContext";
import { FiEye, FiEyeOff, FiLock, FiShield } from "react-icons/fi";
import { useState } from "react";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyUpdatePasswordPageProps = {
    kcContext: Extract<KcContext, { pageId: "login-update-password.ftl" }>;
};

export default function MyUpdatePasswordPage(props: MyUpdatePasswordPageProps) {
    const { kcContext } = props;
    const { url } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                            Atualizar senha
                        </h1>
                        <p className="text-white/70 text-sm">
                            Crie uma nova senha segura
                        </p>
                    </div>

                    {/* Update Password Form */}
                    <form
                        id="kc-passwd-update-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* New Password */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password-new"
                                name="password-new"
                                autoFocus
                                className="block w-full pl-12 pr-12 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Nova senha"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
                            >
                                {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Confirm New Password */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="password-confirm"
                                name="password-confirm"
                                className="block w-full pl-12 pr-12 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Confirmar nova senha"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
                            >
                                {showConfirmPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                        >
                            Atualizar senha
                        </button>
                    </form>

                    {/* Password Requirements */}
                    <div className="mt-6 p-4 bg-glass-primary/20 border border-glass-border rounded-xl">
                        <h3 className="text-white font-medium text-sm mb-2">Requisitos da senha:</h3>
                        <ul className="text-white/70 text-xs space-y-1">
                            <li>• Mínimo 8 caracteres</li>
                            <li>• Pelo menos uma letra maiúscula</li>
                            <li>• Pelo menos uma letra minúscula</li>
                            <li>• Pelo menos um número</li>
                            <li>• Pelo menos um caractere especial</li>
                        </ul>
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
