import { motion } from 'framer-motion';
import { Zap, MessageSquare, Bot, Database } from 'lucide-react';

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
                        {/* Minimalist Flowchart */}
                        <div className="relative z-10 p-10 border border-white/5 rounded-2xl bg-surface/50 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Zap className="w-24 h-24 text-primary" />
                            </div>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center border border-white/10 relative z-10">
                                        <MessageSquare className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div className="flex-1 p-4 bg-[#1A1A1A] rounded-lg border border-white/5">
                                        <div className="text-xs text-primary mb-1">Input</div>
                                        <div className="text-sm font-medium">Demanda Operacional</div>
                                    </div>
                                </div>

                                {/* Connector Line */}
                                <div className="absolute left-[74px] top-[88px] w-0.5 h-12 bg-white/10" />

                                {/* Step 2 */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(212,240,12,0.3)] relative z-10">
                                        <Bot className="w-6 h-6 text-background" />
                                    </div>
                                    <div className="flex-1 p-4 bg-[#1A1A1A] rounded-lg border border-primary/30">
                                        <div className="text-xs text-primary mb-1">Processing</div>
                                        <div className="text-sm font-medium text-white">Agentes de IA</div>
                                    </div>
                                </div>

                                {/* Connector Line */}
                                <div className="absolute left-[74px] top-[184px] w-0.5 h-12 bg-white/10" />

                                {/* Step 3 */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center border border-white/10 relative z-10">
                                        <Database className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div className="flex-1 p-4 bg-[#1A1A1A] rounded-lg border border-white/5">
                                        <div className="text-xs text-green-500 mb-1">Action</div>
                                        <div className="text-sm font-medium">Execução & Relatório</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
