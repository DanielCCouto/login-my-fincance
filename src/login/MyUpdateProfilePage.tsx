import type { KcContext } from "./KcContext";
import { FiUser, FiMail, FiSave, FiArrowLeft } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyUpdateProfilePageProps = {
    kcContext: Extract<KcContext, { pageId: "login-update-profile.ftl" }>;
};

export default function MyUpdateProfilePage(props: MyUpdateProfilePageProps) {
    const { kcContext } = props;
    const { url, profile } = kcContext;
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
                    {/* Profile Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiUser className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Atualizar perfil
                        </h1>
                        <p className="text-white/70 text-sm">
                            Complete suas informações pessoais
                        </p>
                    </div>

                    {/* Update Profile Form */}
                    <form
                        id="kc-update-profile-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {/* First Name */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiUser className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                defaultValue=""
                                className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Nome"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiUser className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                defaultValue=""
                                className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Sobrenome"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-white/50" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue=""
                                className="block w-full pl-12 pr-4 py-4 text-white placeholder-white/50 bg-glass-backdrop border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Email"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <FiSave className="w-5 h-5" />
                            Salvar perfil
                        </button>
                    </form>

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