import type { KcContext } from "./KcContext";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaMicrosoft, FaApple, FaGithub, FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyDefaultPageProps = {
    kcContext: Extract<KcContext, { pageId: "login.ftl" }>;
};

export default function MyDefaultPage(props: MyDefaultPageProps) {
    const { kcContext } = props;
    const { url, social, realm, locale } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;
    const { msgStr } = i18n;
    const [showPassword, setShowPassword] = useState(false);

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

            {/* Language Selector */}
            {realm.internationalizationEnabled && locale && locale.supported.length > 1 && (
                <div className="absolute top-8 right-8 group z-10">
                    <button className="flex items-center text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-glass-backdrop rounded-lg px-3 py-2 border border-glass-border">
                        <FaGlobe className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{locale.currentLanguageTag.toUpperCase()}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-40 backdrop-blur-xl bg-glass-backdrop rounded-xl border border-glass-border opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        <ul className="py-2">
                            {locale.supported.map(({ label, url }) => (
                                <li key={label}>
                                    <a
                                        href={url}
                                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-glass-primary transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full max-w-md px-6 z-10 flex-1 flex flex-col justify-center">
                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-glass-backdrop border border-glass-border rounded-2xl shadow-glass p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Bem-vindo de volta
                        </h1>
                        <p className="text-white/70 text-sm">
                            Acesse sua conta para continuar
                        </p>
                    </div>

                    {/* Login Form */}
                    <form
                        id="kc-form-login"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* Email Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autoFocus
                                className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Email ou usuário"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                className="block w-full pl-12 pr-12 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Senha"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
                            >
                                {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Remember Me */}
                        {realm.rememberMe && (
                            <div className="flex items-center justify-between">
                                <label className="flex items-center text-white/80 hover:text-white transition-colors cursor-pointer">
                                    <input
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        defaultChecked={kcContext.rememberMe === "on"}
                                        className="h-4 w-4 rounded border-glass-border bg-glass-backdrop text-brand-400 focus:ring-brand-400 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm">{msgStr("rememberMe")}</span>
                                </label>
                                <a
                                    href={url.loginResetCredentialsUrl}
                                    className="text-sm text-brand-300 hover:text-brand-200 transition-colors"
                                >
                                    Esqueceu a senha?
                                </a>
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                        >
                            {msgStr("doLogIn")}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-white/70 text-sm">
                            Não tem uma conta?{" "}
                            <a
                                href={url.registrationUrl}
                                className="text-brand-300 hover:text-brand-200 font-medium transition-colors"
                            >
                                Criar conta
                            </a>
                        </p>
                    </div>

                    {/* Social Login */}
                    {social && Array.isArray(social.providers) && social.providers.length > 0 && (
                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-glass-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-transparent text-white/50">Ou continue com</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-3">
                                {social.providers.map((provider) => {
                                    const iconMap: { [key: string]: React.ElementType } = {
                                        google: FaGoogle,
                                        microsoft: FaMicrosoft,
                                        apple: FaApple,
                                        github: FaGithub
                                    };
                                    const Icon = iconMap[provider.providerId] || FaGlobe;
                                    return (
                                        <a
                                            key={provider.providerId}
                                            href={provider.loginUrl}
                                            className="flex items-center justify-center gap-3 w-full backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-3 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300"
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>Continuar com {provider.displayName}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-white/50 text-xs">
                    <p>© 2025 My Finance. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    );
}
