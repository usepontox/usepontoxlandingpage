import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Contact() {
    return (
        <section className="py-24 bg-surface" id="contact">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-2xl p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
                    />

                    <div className="relative z-10 text-background max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Pronto para escalar?
                        </h2>
                        <p className="text-lg font-medium opacity-80 mb-0">
                            Agende uma consultoria estratégica e descubra onde sua operação pode ganhar eficiência.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                        <button className="px-8 py-4 bg-background text-white font-bold rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl">
                            Falar no WhatsApp
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-black/10 text-background font-bold rounded-lg hover:bg-black/5 transition-all flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5" />
                            Enviar E-mail
                        </button>
                    </div>
                </motion.div>

                <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-6 h-6 bg-primary rounded-full" />
                        <span className="font-bold text-white">UsePontoX</span>
                    </div>

                    <div className="flex items-center space-x-8">
                        <span className="hover:text-primary transition-colors cursor-pointer">Manifesto</span>
                        <span className="hover:text-primary transition-colors cursor-pointer">Vagas</span>
                        <span className="hover:text-primary transition-colors cursor-pointer">Contato</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}
