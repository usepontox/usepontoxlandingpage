import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-start overflow-hidden bg-background pt-32">


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
                        Solução e automação <br />
                        <span className="text-primary">transformando o seu negócio.</span>
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
                        <a
                            href="https://wa.me/5541984781575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Abstract Visual - Representing Complexity to Simplicity */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-surface border border-white/5 rounded-2xl p-8 shadow-2xl overflow-hidden">
                        {/* Animated glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6 relative z-10">
                            <motion.div
                                className="w-3 h-3 rounded-full bg-red-500/50"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="w-3 h-3 rounded-full bg-yellow-500/50"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.div
                                className="w-3 h-3 rounded-full bg-green-500/50"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            />
                            <motion.div
                                className="ml-auto text-xs text-gray-500 font-mono"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                dashboard_v2.tsx
                            </motion.div>
                        </div>

                        <div className="space-y-4 font-mono text-sm relative z-10">
                            {/* Line 1 */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <span className="text-gray-600">1</span>
                                <motion.span
                                    className="text-primary drop-shadow-[0_0_8px_rgba(217,249,15,0.5)]"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    const
                                </motion.span>
                                <span className="text-white">Solution</span>
                                <span className="text-gray-400">=</span>
                                <span className="text-yellow-400">async</span>
                                <span className="text-gray-400">()</span>
                                <motion.span
                                    className="text-primary drop-shadow-[0_0_8px_rgba(217,249,15,0.5)]"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                    {`=>`}
                                </motion.span>
                                <span className="text-gray-400">{`{`}</span>
                            </motion.div>

                            {/* Line 2 */}
                            <motion.div
                                className="flex gap-4 pl-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <span className="text-gray-600">2</span>
                                <span className="text-white">await</span>
                                <motion.span
                                    className="text-blue-400"
                                    animate={{
                                        textShadow: [
                                            '0 0 8px rgba(96, 165, 250, 0)',
                                            '0 0 8px rgba(96, 165, 250, 0.8)',
                                            '0 0 8px rgba(96, 165, 250, 0)'
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    analyze
                                </motion.span>
                                <span className="text-gray-400">(</span>
                                <span className="text-green-300">'business_needs'</span>
                                <span className="text-gray-400">);</span>
                            </motion.div>

                            {/* Line 3 */}
                            <motion.div
                                className="flex gap-4 pl-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                            >
                                <span className="text-gray-600">3</span>
                                <span className="text-white">return</span>
                                <motion.span
                                    className="text-primary drop-shadow-[0_0_8px_rgba(217,249,15,0.5)]"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    new
                                </motion.span>
                                <motion.span
                                    className="text-yellow-400"
                                    animate={{
                                        textShadow: [
                                            '0 0 8px rgba(250, 204, 21, 0)',
                                            '0 0 8px rgba(250, 204, 21, 0.8)',
                                            '0 0 8px rgba(250, 204, 21, 0)'
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                    Success
                                </motion.span>
                                <span className="text-gray-400">(</span>
                                <span className="text-green-300">'scalable_growth'</span>
                                <span className="text-gray-400">);</span>
                            </motion.div>

                            {/* Line 4 with blinking cursor */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.0, duration: 0.5 }}
                            >
                                <span className="text-gray-600">4</span>
                                <span className="text-gray-400">{`}`}</span>
                                <motion.span
                                    className="inline-block w-2 h-4 bg-primary ml-1"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.4 }}
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] text-gray-400"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2.4 + (i * 0.1), type: "spring" }}
                                        whileHover={{ scale: 1.1, borderColor: "rgba(217,249,15,0.5)" }}
                                    >
                                        Dev
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                className="text-xs text-primary flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.7 }}
                            >
                                <motion.span
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        boxShadow: [
                                            '0 0 0px rgba(217,249,15,0.5)',
                                            '0 0 10px rgba(217,249,15,0.8)',
                                            '0 0 0px rgba(217,249,15,0.5)'
                                        ]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                System Active
                            </motion.div>
                        </motion.div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
