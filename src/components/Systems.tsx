import { motion } from 'framer-motion';
import { BarChart3, Box, Users, ShieldCheck, Zap, Wallet } from 'lucide-react';

const systems = [
    {
        icon: <Wallet className="w-6 h-6" />,
        title: "Gestão Financeira",
        description: "Controle total de fluxo de caixa com DRE em tempo real."
    },
    {
        icon: <Box className="w-6 h-6" />,
        title: "Supply Chain",
        description: "Rastreamento inteligente de produtos e alertas de reposição."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Capital Humano",
        description: "Gestão centralizada de colaboradores e folha de pagamento."
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Business Intelligence",
        description: "Data-driven decisions com dashboards interativos."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Cybersecurity",
        description: "Protocolos de segurança bancária e criptografia ponta a ponta."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "High Performance",
        description: "Arquitetura otimizada para máxima velocidade e estabilidade."
    }
];

export function Systems() {
    return (
        <section className="py-32 bg-background relative border-t border-white/5" id="systems">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Nossa Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 max-w-2xl">
                        Soluções que impulsionam a <br />
                        <span className="text-gray-500">evolução do seu negócio.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {systems.map((sys, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-surface hover:bg-[#252525] border border-white/5 p-8 rounded-lg transition-all hover:border-primary/50"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                {sys.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{sys.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {sys.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
