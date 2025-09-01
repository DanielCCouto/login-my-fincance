import type { KcContext } from "./KcContext";
import { FiFileText, FiCheck, FiArrowLeft } from "react-icons/fi";
import { useI18n } from "./i18n";
import StarryBackground from "./components/StarryBackground";

type MyTermsPageProps = {
    kcContext: Extract<KcContext, { pageId: "terms.ftl" }>;
};

export default function MyTermsPage(props: MyTermsPageProps) {
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
            <div className="w-full max-w-2xl px-6 z-10">
                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-glass-backdrop border border-glass-border rounded-2xl shadow-glass p-8">
                    {/* Terms Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiFileText className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Termos de Uso
                        </h1>
                        <p className="text-white/70 text-sm">
                            Leia e aceite nossos termos para continuar
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="mb-8 max-h-96 overflow-y-auto bg-glass-primary/10 border border-glass-border rounded-xl p-6">
                        <div className="text-white/80 text-sm space-y-4">
                            <h2 className="text-white font-semibold text-lg">1. Aceitação dos Termos</h2>
                            <p>
                                Ao usar o My Finance, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                                Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço.
                            </p>

                            <h2 className="text-white font-semibold text-lg">2. Descrição do Serviço</h2>
                            <p>
                                O My Finance é uma plataforma de controle financeiro pessoal que permite aos usuários 
                                gerenciar suas receitas, despesas, metas financeiras e relatórios.
                            </p>

                            <h2 className="text-white font-semibold text-lg">3. Privacidade e Segurança</h2>
                            <p>
                                Suas informações pessoais e financeiras são protegidas com os mais altos padrões de segurança. 
                                Utilizamos criptografia de ponta a ponta para proteger seus dados.
                            </p>

                            <h2 className="text-white font-semibold text-lg">4. Responsabilidades do Usuário</h2>
                            <p>
                                Você é responsável por manter a confidencialidade de sua conta e senha, 
                                bem como por todas as atividades que ocorrem em sua conta.
                            </p>

                            <h2 className="text-white font-semibold text-lg">5. Limitações de Responsabilidade</h2>
                            <p>
                                O My Finance não se responsabiliza por perdas financeiras decorrentes do uso da plataforma. 
                                O serviço é fornecido "como está" sem garantias expressas ou implícitas.
                            </p>

                            <h2 className="text-white font-semibold text-lg">6. Modificações</h2>
                            <p>
                                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                                As modificações entrarão em vigor imediatamente após a publicação.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <a
                            href={url.loginAction}
                            className="w-full bg-gradient-to-r from-brand-500 to-secondary-500 hover:from-brand-600 hover:to-secondary-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-brand hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <FiCheck className="w-5 h-5" />
                            Aceito os termos
                        </a>
                        
                        <a
                            href={url.loginUrl}
                            className="w-full backdrop-blur-sm bg-glass-backdrop border border-glass-border rounded-xl py-4 font-medium text-white/80 hover:text-white hover:bg-glass-primary transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            Voltar ao login
                        </a>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-white/50 text-xs">
                            Ao continuar, você confirma que leu e concorda com nossos Termos de Uso
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
