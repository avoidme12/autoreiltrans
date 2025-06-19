import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 border-b border-white/10' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                    TECHNO<span className="text-red-500">TRANS</span>
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link href="#services" className="text-white/70 hover:text-red-400 transition-colors duration-300">Услуги</Link>
                    <Link href="#advantages" className="text-white/70 hover:text-red-400 transition-colors duration-300">Преимущества</Link>
                    <Link href="#tracking" className="text-white/70 hover:text-red-400 transition-colors duration-300">Отслеживание</Link>
                    <Link href="#contacts" className="text-white/70 hover:text-red-400 transition-colors duration-300">Контакты</Link>
                </div>

                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md font-medium transition-all duration-300 hover:scale-105">
                    Заказать
                </button>
            </div>
        </nav>
    );
}