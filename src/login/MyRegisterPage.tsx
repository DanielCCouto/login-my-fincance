import { useState } from "react";
import type { KcContext } from "./KcContext";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiUserCheck } from "react-icons/fi";
import { FaGoogle, FaMicrosoft, FaApple, FaGithub } from "react-icons/fa";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

const iconMap: { [key: string]: React.ElementType } = {
    google: FaGoogle,
    microsoft: FaMicrosoft,
    apple: FaApple,
    github: FaGithub
};

type MyRegisterPageProps = {
    kcContext: Extract<KcContext, { pageId: "register.ftl" }>;
};

export default function MyRegisterPage(props: MyRegisterPageProps) {
    const { kcContext } = props;
    const { url, social } = kcContext;
    const { i18n } = useI18n({ kcContext });
    if (i18n === null) return null;

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        "password-confirm": ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(prev => prev + 1);
    };

    const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(prev => prev - 1);
    };

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
                    <form
                        id="kc-register-form"
                        action={url.registrationAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* Hidden inputs for form state */}
                        <input type="hidden" name="firstName" value={formData.firstName} />
                        <input type="hidden" name="lastName" value={formData.lastName} />
                        <input type="hidden" name="username" value={formData.username} />
                        <input type="hidden" name="password" value={formData.password} />
                        <input type="hidden" name="password-confirm" value={formData["password-confirm"]} />

                        {/* Step 1: Email & Social */}
                        <div style={{ display: step === 1 ? "block" : "none" }}>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Criar conta
                                </h1>
                                <p className="text-white/70 text-sm">
                                    Comece sua jornada financeira
                                </p>
                            </div>

                            {/* Email Field */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiMail className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Seu email"
                                    autoFocus
                                />
                            </div>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                            >
                                Continuar
                            </button>

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
                                            const Icon = iconMap[provider.providerId] || FaGithub;
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

                        {/* Step 2: Personal Info */}
                        <div style={{ display: step === 2 ? "block" : "none" }}>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Informações pessoais
                                </h1>
                                <p className="text-white/70 text-sm">
                                    Conte-nos sobre você
                                </p>
                            </div>

                            {/* First Name */}
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Nome"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiUserCheck className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Sobrenome"
                                />
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-4 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300"
                                >
                                    Voltar
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>

                        {/* Step 3: Security */}
                        <div style={{ display: step === 3 ? "block" : "none" }}>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Segurança
                                </h1>
                                <p className="text-white/70 text-sm">
                                    Crie uma senha segura
                                </p>
                            </div>

                            {/* Username */}
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Nome de usuário"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
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

                            {/* Confirm Password */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-white/50" />
                                </div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="password-confirm"
                                    name="password-confirm"
                                    value={formData["password-confirm"]}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-12 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Confirmar senha"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                                </button>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-4 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300"
                                >
                                    Voltar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02]"
                                >
                                    Criar conta
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-white/70 text-sm">
                            Já tem uma conta?{" "}
                            <a
                                href={url.loginUrl}
                                className="text-brand-300 hover:text-brand-200 font-medium transition-colors"
                            >
                                Fazer login
                            </a>
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
