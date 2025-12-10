import { motion } from 'framer-motion';
import { FaFacebook, FaWhatsapp, FaDiscord, FaInstagram } from 'react-icons/fa';
import { SiSupabase, SiN8N, SiMercadopago } from 'react-icons/si';

const platforms = [
    { icon: FaWhatsapp, name: 'WhatsApp', color: '#25D366' },
    { icon: FaFacebook, name: 'Facebook', color: '#1877F2' },
    { icon: FaDiscord, name: 'Discord', color: '#5865F2' },
    { icon: FaInstagram, name: 'Instagram', color: '#E4405F' },
    { icon: SiMercadopago, name: 'Mercado Pago', color: '#00B1EA' },
    { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
    { icon: SiN8N, name: 'n8n', color: '#EA4B71' },
];

export function Integrations() {
    return (
        <section className="py-32 bg-[#0A0A0F] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-purple-900/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <span className="text-blue-400">Conecte-se</span> às principais plataformas do mercado.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Conectamos com as ferramentas mais utilizadas para escalar seu negócio: chats em tempo real, análise de dados, trackeamento, automações, área de membros externa e muito mais.
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Platform Icons */}
                <div className="relative overflow-hidden py-16">
                    <div className="flex gap-8">
                        {/* First set of icons */}
                        <motion.div
                            className="flex gap-8 shrink-0"
                            animate={{
                                x: [0, -1400],
                            }}
                            transition={{
                                x: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {platforms.map((platform) => {
                                const Icon = platform.icon;
                                return (
                                    <div
                                        key={`first-${platform.name}`}
                                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#1A1A1F] border border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shrink-0"
                                        style={{
                                            boxShadow: `0 0 20px ${platform.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-12 h-12 md:w-14 md:h-14"
                                            style={{ color: platform.color }}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Second set (duplicate for seamless loop) */}
                        <motion.div
                            className="flex gap-8 shrink-0"
                            animate={{
                                x: [0, -1400],
                            }}
                            transition={{
                                x: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {platforms.map((platform) => {
                                const Icon = platform.icon;
                                return (
                                    <div
                                        key={`second-${platform.name}`}
                                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#1A1A1F] border border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shrink-0"
                                        style={{
                                            boxShadow: `0 0 20px ${platform.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-12 h-12 md:w-14 md:h-14"
                                            style={{ color: platform.color }}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Third set (for extra smoothness) */}
                        <motion.div
                            className="flex gap-8 shrink-0"
                            animate={{
                                x: [0, -1400],
                            }}
                            transition={{
                                x: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {platforms.map((platform) => {
                                const Icon = platform.icon;
                                return (
                                    <div
                                        key={`third-${platform.name}`}
                                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#1A1A1F] border border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shrink-0"
                                        style={{
                                            boxShadow: `0 0 20px ${platform.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-12 h-12 md:w-14 md:h-14"
                                            style={{ color: platform.color }}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <p className="text-xl md:text-2xl font-medium">
                        <span className="text-blue-400">A tecnologia trabalha junto,</span>{' '}
                        <span className="text-gray-400">não contra você.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
