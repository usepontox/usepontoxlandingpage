import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-48">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-surface border border-white/5 rounded-full px-4 py-2 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-primary tracking-wide">SOFTWARE DEVELOPMENT STUDIO</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
                        Reinvente o seu <br />
                        <span className="text-primary">Negócio Digital</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
                        Desenvolvemos ecossistemas digitais robustos e escaláveis. Transforme desafios complexos em vantagens competitivas com nossa engenharia de software de ponta.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                        {[
                            "Sistemas Personalizados",
                            "Automação Inteligente",
                            "Integração Cloud"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all text-white font-medium">
                            Explorar Nossa Abordagem
                        </button>
                    </div>
                </motion.div>

                {/* Abstract Visual - Representing Complexity to Simplicity */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-surface border border-white/5 rounded-2xl p-8 shadow-2xl">
                        <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="ml-auto text-xs text-gray-500 font-mono">dashboard_v2.tsx</div>
                        </div>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-4">
                                <span className="text-gray-600">1</span>
                                <span className="text-primary">const</span>
                                <span className="text-white">Solution</span>
                                <span className="text-gray-400">=</span>
                                <span className="text-yellow-400">async</span>
                                <span className="text-gray-400">()</span>
                                <span className="text-primary">{`=>`}</span>
                                <span className="text-gray-400">{`{`}</span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-gray-600">2</span>
                                <span className="text-white">await</span>
                                <span className="text-blue-400">analyze</span>
                                <span className="text-gray-400">(</span>
                                <span className="text-green-300">'business_needs'</span>
                                <span className="text-gray-400">);</span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-gray-600">3</span>
                                <span className="text-white">return</span>
                                <span className="text-primary">new</span>
                                <span className="text-yellow-400">Success</span>
                                <span className="text-gray-400">(</span>
                                <span className="text-green-300">'scalable_growth'</span>
                                <span className="text-gray-400">);</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600">4</span>
                                <span className="text-gray-400">{`}`}</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] text-gray-400">
                                        Dev
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs text-primary flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                System Active
                            </div>
                        </div>
                    </div>

                    <div className="absolute -z-10 top-10 right-10 w-full h-full border border-primary/20 rounded-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
