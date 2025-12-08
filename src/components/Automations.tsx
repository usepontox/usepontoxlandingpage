import { motion } from 'framer-motion';


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
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-square flex items-center justify-center">
                            {/* Tech Background Grid - making it feel connected */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] opacity-50" />

                            {/* Main Image with blending */}
                            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl opacity-20 animate-pulse pointer-events-none" />

                            <img
                                src="/images/ai-robot.png"
                                alt="AI Automation Agent"
                                className="relative z-10 w-full h-full object-contain [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)] contrast-125 brightness-110 drop-shadow-[0_0_30px_rgba(212,240,12,0.15)]"
                                style={{ mixBlendMode: 'lighten' }}
                            />

                            {/* Animated Holographic Scanlines */}
                            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]">
                                <motion.div
                                    className="w-full h-[2px] bg-primary/50 shadow-[0_0_20px_#D4F00C]"
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#D4F00C_2px)] bg-[size:100%_4px] opacity-[0.03]" />
                            </div>

                            {/* Floating Data Points Effect */}
                            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-8 z-30">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-mono text-primary/80 tracking-widest">NEURAL_NET</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-75" />
                                    <span className="text-[10px] font-mono text-primary/80 tracking-widest">ACTIVE</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
