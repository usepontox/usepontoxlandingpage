import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const codeLines = [
    {
        line: 1, content: "const Solution = async () => {", tokens: [
            { text: "const", color: "text-primary", glow: true },
            { text: " Solution ", color: "text-white" },
            { text: "=", color: "text-gray-400" },
            { text: " async", color: "text-yellow-400" },
            { text: " () ", color: "text-gray-400" },
            { text: "=>", color: "text-primary", glow: true },
            { text: " {", color: "text-gray-400" }
        ]
    },
    {
        line: 2, content: "  await analyze('business_needs');", tokens: [
            { text: "  await ", color: "text-white" },
            { text: "analyze", color: "text-blue-400", glow: true },
            { text: "( '", color: "text-gray-400" },
            { text: "business_needs", color: "text-green-300" },
            { text: "' );", color: "text-gray-400" }
        ]
    },
    {
        line: 3, content: "  return new Success('scalable_growth');", tokens: [
            { text: "  return ", color: "text-white" },
            { text: "new", color: "text-primary", glow: true },
            { text: " ", color: "text-gray-400" },
            { text: "Success", color: "text-yellow-400", glow: true },
            { text: "( '", color: "text-gray-400" },
            { text: "scalable_growth", color: "text-green-300" },
            { text: "' );", color: "text-gray-400" }
        ]
    },
    {
        line: 4, content: "}", tokens: [
            { text: "}", color: "text-gray-400" }
        ]
    }
];

export function Hero() {
    const [typedLines, setTypedLines] = useState<string[]>(['', '', '', '']);
    const [currentLine, setCurrentLine] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!isTyping) {
            // Pause before restarting
            const timeout = setTimeout(() => {
                setTypedLines(['', '', '', '']);
                setCurrentLine(0);
                setIsTyping(true);
            }, 3000);
            return () => clearTimeout(timeout);
        }

        if (currentLine >= codeLines.length) {
            setIsTyping(false);
            return;
        }

        const fullText = codeLines[currentLine].content;
        const currentText = typedLines[currentLine];

        if (currentText.length < fullText.length) {
            const timeout = setTimeout(() => {
                const newTypedLines = [...typedLines];
                newTypedLines[currentLine] = fullText.slice(0, currentText.length + 1);
                setTypedLines(newTypedLines);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            // Move to next line
            const timeout = setTimeout(() => {
                setCurrentLine(currentLine + 1);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [typedLines, currentLine, isTyping]);

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

                {/* Code Block with Typing Effect */}
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
                            <div className="ml-auto text-xs text-gray-500 font-mono">
                                dashboard_v2.tsx
                            </div>
                        </div>

                        <div className="space-y-4 font-mono text-sm relative z-10 min-h-[120px]">
                            {codeLines.map((codeLine, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <span className="text-gray-600">{codeLine.line}</span>
                                    <div className="flex-1">
                                        {codeLine.tokens.map((token, tokenIdx) => {
                                            const displayText = typedLines[idx].slice(
                                                codeLine.tokens.slice(0, tokenIdx).reduce((acc, t) => acc + t.text.length, 0),
                                                codeLine.tokens.slice(0, tokenIdx + 1).reduce((acc, t) => acc + t.text.length, 0)
                                            );

                                            return (
                                                <motion.span
                                                    key={tokenIdx}
                                                    className={`${token.color} ${token.glow ? 'drop-shadow-[0_0_8px_rgba(217,249,15,0.3)]' : ''}`}
                                                    animate={token.glow ? { opacity: [1, 0.7, 1] } : {}}
                                                    transition={token.glow ? { duration: 2, repeat: Infinity, delay: tokenIdx * 0.3 } : {}}
                                                >
                                                    {displayText}
                                                </motion.span>
                                            );
                                        })}
                                        {/* Blinking cursor */}
                                        {currentLine === idx && isTyping && (
                                            <motion.span
                                                className="inline-block w-2 h-4 bg-primary ml-1"
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ duration: 0.8, repeat: Infinity }}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative z-10"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] text-gray-400"
                                        whileHover={{ scale: 1.1, borderColor: "rgba(217,249,15,0.5)" }}
                                    >
                                        Dev
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-xs text-primary flex items-center gap-2">
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
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
