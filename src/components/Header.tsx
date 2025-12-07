import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="container mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="UsePontoX Logo" className="h-8 w-auto object-contain" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-primary transition-colors">Soluções</a>
                    <a href="#" className="hover:text-primary transition-colors">Metodologia</a>
                    <a href="#" className="hover:text-primary transition-colors">Cases</a>
                    <button className="px-5 py-2.5 border border-white/10 rounded-full text-white hover:bg-white/5 transition-all">
                        Área do Cliente
                    </button>
                </nav>

                <button className="md:hidden p-2 text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.header>
    );
}
