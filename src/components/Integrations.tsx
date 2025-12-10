import { motion } from 'framer-motion';
import { FaFacebook, FaWhatsapp, FaDiscord, FaInstagram } from 'react-icons/fa';
import { SiSupabase, SiN8N, SiMercadopago } from 'react-icons/si';
import { ShoppingBag } from 'lucide-react';

const platforms = [
    { icon: ShoppingBag, name: 'Mercado Livre', color: '#FFE600', delay: 0 },
    { icon: FaFacebook, name: 'Facebook', color: '#1877F2', delay: 0.5 },
    { icon: FaWhatsapp, name: 'WhatsApp', color: '#25D366', delay: 1 },
    { icon: FaDiscord, name: 'Discord', color: '#5865F2', delay: 1.5 },
    { icon: FaInstagram, name: 'Instagram', color: '#E4405F', delay: 2 },
    { icon: SiMercadopago, name: 'Mercado Pago', color: '#00B1EA', delay: 2.5 },
    { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E', delay: 3 },
    { icon: SiN8N, name: 'n8n', color: '#EA4B71', delay: 3.5 },
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
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">
                        O ggCheckout se integra com as ferramentas mais utilizadas para escalar seu negócio: chats em tempo real, análise de dados, trackeamento, automações, área de membros externa e muito mais.
                    </p>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto">
                        Tudo fluindo no mesmo ecossistema, sem gambiarra, sem complicação.
                    </p>
                </motion.div>

                {/* Animated Platform Icons */}
                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Logo/Icon */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="absolute z-20"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 relative">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse" />
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center relative z-10">
                                <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
                                    <path
                                        d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50 M35 35 L42 42 M58 58 L65 65 M65 35 L58 42 M42 58 L35 65"
                                        stroke="#3B82F6"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="50" cy="50" r="8" fill="#3B82F6" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Orbiting Platform Icons */}
                    {platforms.map((platform, index) => {
                        const Icon = platform.icon;
                        const angle = (index / platforms.length) * 360;
                        const radius = 250; // Distance from center

                        return (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    opacity: { delay: platform.delay * 0.1, duration: 0.5 },
                                    scale: { delay: platform.delay * 0.1, duration: 0.5 },
                                    rotate: {
                                        duration: 40,
                                        repeat: Infinity,
                                        ease: 'linear',
                                        delay: platform.delay * 0.1,
                                    },
                                }}
                                className="absolute"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: `${Math.cos((angle * Math.PI) / 180) * radius}px`,
                                    marginTop: `${Math.sin((angle * Math.PI) / 180) * radius}px`,
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    animate={{
                                        rotate: [0, -360],
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 40,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            delay: platform.delay * 0.1,
                                        },
                                    }}
                                    className="relative group cursor-pointer"
                                >
                                    <div
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#1A1A1F] border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-white/30"
                                        style={{
                                            boxShadow: `0 0 20px ${platform.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300"
                                            style={{ color: platform.color }}
                                        />
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        <span className="text-xs font-medium text-gray-300 bg-[#1A1A1F] px-3 py-1 rounded-lg border border-white/10">
                                            {platform.name}
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
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
                        <span className="text-gray-400">Você vende.</span>{' '}
                        <span className="text-blue-400">A tecnologia trabalha junto,</span>{' '}
                        <span className="text-gray-400">não contra você.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
