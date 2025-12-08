import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2, Loader2, Phone } from 'lucide-react';

export function Contact() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle Network Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = canvas.offsetWidth;
        let h = canvas.height = canvas.offsetHeight;
        let particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const particleCount = 60;
        const connectionDistance = 150;
        let mouse = { x: 0, y: 0 };

        const resize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                // Interaction with mouse
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    p.x += dx * 0.005;
                    p.y += dy * 0.005;
                }

                ctx.fillStyle = '#D4F00C';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.strokeStyle = `rgba(212, 240, 12, ${1 - dist / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setFormState('success');
    };

    return (
        <section className="py-24 bg-[#0E0E0E] relative overflow-hidden" id="contact">
            {/* Particle Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-auto"
            />

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
                                    <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                                    <p className="text-gray-400">Entraremos em contato em breve.</p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="mt-8 text-primary hover:text-white transition-colors text-sm font-medium"
                                    >
                                        Enviar outra mensagem
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
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Seu melhor e-mail"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Telefone / WhatsApp"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-[#c2dc0b] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formState === 'submitting' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Enviando...
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
