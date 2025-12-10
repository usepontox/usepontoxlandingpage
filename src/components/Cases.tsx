import { motion } from 'framer-motion';

import { Monitor, ShoppingCart, Package, Users, FileText, TrendingUp, Settings, DollarSign } from 'lucide-react';

export function Cases() {


    const features = [
        { icon: Monitor, name: 'Dashboard' },
        { icon: ShoppingCart, name: 'PDV / Caixa' },
        { icon: FileText, name: 'Vendas' },
        { icon: Package, name: 'Estoque' },
        { icon: ShoppingCart, name: 'Compras' },
        { icon: Users, name: 'Clientes' },
        { icon: Users, name: 'Fornecedores' },
        { icon: DollarSign, name: 'Financeiro' },
        { icon: TrendingUp, name: 'Relatórios' },
        { icon: Settings, name: 'Configurações' },
    ];



    return (
        <section id="cases" className="relative py-16 bg-background overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-surface border border-white/5 rounded-full px-4 py-2 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-primary tracking-wide">CASES DE SUCESSO</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
                        Conheça Nossos <span className="text-primary">Sistemas</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Soluções completas desenvolvidas para transformar a gestão do seu negócio
                    </p>
                </motion.div>

                {/* Deep PDV Showcase */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface border border-white/5 rounded-2xl p-8 md:p-12"
                    >
                        {/* System Header */}
                        <div className="flex items-start gap-6 mb-8">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary">deep.</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-2">Deep PDV</h3>
                                <p className="text-gray-400 text-lg mb-4">
                                    Sistema completo de gestão e ponto de venda com tecnologia de ponta
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2">
                                    <span className="text-sm font-medium text-gray-400">Gestão Inteligente</span>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-background border border-white/5 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                                >
                                    <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-xs text-gray-400 text-center font-medium">{feature.name}</span>
                                </motion.div>
                            ))}
                        </div>



                        {/* CTA */}
                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-lg font-medium mb-1">Controle total do seu negócio</p>
                                <p className="text-gray-400">com simplicidade e eficiência.</p>
                            </div>
                            <a
                                href="https://wa.me/5541984781575"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
                            >
                                Solicitar Demonstração
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
