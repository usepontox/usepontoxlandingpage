import { motion } from 'framer-motion';
import { FaFacebook, FaWhatsapp, FaDiscord, FaInstagram, FaSlack, FaStripe } from 'react-icons/fa';
import { SiSupabase, SiN8N, SiMercadopago, SiNotion, SiZapier, SiOpenai, SiGooglegemini } from 'react-icons/si';
import { Building2 } from 'lucide-react';

const platforms = [
    { icon: FaWhatsapp, name: 'WhatsApp', color: '#25D366' },
    { icon: SiOpenai, name: 'ChatGPT', color: '#10A37F' },
    { icon: FaFacebook, name: 'Facebook', color: '#1877F2' },
    { icon: SiGooglegemini, name: 'Gemini', color: '#8E75FF' },
    { icon: FaDiscord, name: 'Discord', color: '#5865F2' },
    { icon: SiNotion, name: 'Notion', color: '#FFFFFF' },
    { icon: FaInstagram, name: 'Instagram', color: '#E4405F' },
    { icon: Building2, name: 'Protheus TOTVS', color: '#0080FF' },
    { icon: SiZapier, name: 'Zapier', color: '#FF4A00' },
    { icon: SiMercadopago, name: 'Mercado Pago', color: '#00B1EA' },
    { icon: FaSlack, name: 'Slack', color: '#4A154B' },
    { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
    { icon: FaStripe, name: 'Stripe', color: '#635BFF' },
    { icon: SiN8N, name: 'n8n', color: '#EA4B71' },
];

export function Integrations() {
    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Background gradient effects - Verde neon brilhante */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/15 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />


            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <span className="text-primary">Conecte-se</span> às principais plataformas do mercado.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Conectamos com as ferramentas mais utilizadas para escalar seu negócio: chats em tempo real, análise de dados, trackeamento, automações, área de membros externa e muito mais.
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Platform Icons */}
                <div className="relative overflow-hidden py-8 space-y-8">
                    {/* First Row - Moving Left */}
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

                    {/* Second Row - Moving Right (Reverse) */}
                    <div className="flex gap-8">
                        {/* First set of icons */}
                        <motion.div
                            className="flex gap-8 shrink-0"
                            animate={{
                                x: [-1400, 0],
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
                                        key={`reverse-first-${platform.name}`}
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
                                x: [-1400, 0],
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
                                        key={`reverse-second-${platform.name}`}
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
                                x: [-1400, 0],
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
                                        key={`reverse-third-${platform.name}`}
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
                        <span className="text-primary">A tecnologia trabalha junto,</span>{' '}
                        <span className="text-gray-400">não contra você.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
