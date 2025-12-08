import { motion } from 'framer-motion';
import { Bot, Database, MessageSquare, Zap } from 'lucide-react';

export function Automations() {
    return (
        <section className="py-32 bg-[#0E0E0E] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Automação Inteligente</span>
                        <h2 className="text-4xl font-display font-bold mb-8">
                            Elimine o trabalho manual. <br />
                            foque na <span className="text-primary underline decoration-primary/30 underline-offset-8">Estratégia.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
                            Conectamos seus sistemas e criamos fluxos de trabalho autônomos que operam 24/7. Reduza custos operacionais e aumente a eficiência da sua equipe.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Integração Total", desc: "Conexão fluida entre ERPs, CRMs e Ferramentas." },
                                { title: "Agentes de IA", desc: "Automação de processos complexos e atendimento." },
                                { title: "Processamento de Dados", desc: "ETL automático para relatórios gerenciais." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group cursor-default">
                                    <div className="w-1 h-12 bg-gray-800 group-hover:bg-primary transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* AI Visual Representation */}
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

                            {/* Main Image */}
                            <img
                                src="/images/ai-robot.png"
                                alt="AI Automation Agent"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Animated Scanning Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-primary/10 z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.1, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-primary/50 shadow-[0_0_20px_#D4F00C] z-20"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Floating Data Points Effect */}
                            <div className="absolute bottom-8 left-8 z-30 space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-mono text-primary/80">SYSTEM_ACTIVE</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75" />
                                    <span className="text-xs font-mono text-primary/80">PROCESSING_DATA...</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
