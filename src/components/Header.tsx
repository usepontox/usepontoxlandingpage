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
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                        UsePonto<span className="text-primary">X</span>
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                </nav>

                <button className="md:hidden p-2 text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.header>
    );
}
