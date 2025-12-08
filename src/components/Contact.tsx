import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2, Loader2, Phone, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Contact() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        setErrorMessage('');

        try {
            // Debug check for credentials
            const envCheck = await supabase.from('leads').select('count', { count: 'exact', head: true });
            if (envCheck.error) {
                console.error('Supabase Connection Check Failed:', envCheck.error);
                // Don't throw here, just log, deeper error might be caught below
            }

            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone
                    }
                ]);

            if (error) throw error;
            setFormState('success');
            setFormData({ name: '', email: '', phone: '' });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setFormState('error');
            setErrorMessage(error.message || 'Erro desconhecido ao conectar com o servidor.');
        }
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                            Pronto para <br />
                            <span className="text-primary">Escalar?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-md">
                            Agende uma consultoria estratégica e descubra onde sua operação pode ganhar eficiência com nossas automações.
                        </p>

                        <a
                            href="https://wa.me/5541984781575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-[#25D366] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1fa851] transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] group"
                        >
                            <Phone className="w-6 h-6 fill-current" />
                            Falar no WhatsApp
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative"
                    >
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Dados Recebidos!</h3>
                                    <p className="text-gray-400">Salvamos seu contato. Em breve falaremos com você.</p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="mt-8 text-primary hover:text-white transition-colors text-sm font-medium"
                                    >
                                        Enviar outro contato
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Contato por E-mail</h3>
                                        <p className="text-sm text-gray-400">Preencha seus dados para receber nosso contato.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Nome Completo"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Seu melhor e-mail"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Telefone / WhatsApp"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {formState === 'error' && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 text-red-500 text-sm font-medium mb-1">
                                                <AlertCircle className="w-4 h-4" />
                                                Erro ao enviar
                                            </div>
                                            <p className="text-xs text-red-400 pl-6">
                                                {errorMessage}
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-[#c2dc0b] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formState === 'submitting' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Salvando...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="w-5 h-5" />
                                                Receber Contato
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
