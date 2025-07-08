'use client'

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import AnimatedText from '../components/AnimatedText';
import TruckAnimation from '../components/TruckAnimation';
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${value * 0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Head>
                <title>АвтоРейлТранс | Грузоперевозки нового поколения</title>
                <meta name="description" content="Современные логистические решения для вашего бизнеса" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ParticlesBackground />

            {/* Анимированный фон с дорогой */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-black opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black"></div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 animate-pulse"
                    style={{ boxShadow: '0 0 20px 5px rgba(234, 179, 8, 0.7)' }}
                ></div>
                <TruckAnimation />
            </div>

            <div className="relative z-10">
                <Navbar />

                <main className="container mx-auto px-4">
                    {/* Hero Section */}
                    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                                АВТО<span className="text-red-500">РЕЙЛ</span><span className="text-red-600  ">ТРАНС</span>
                            </h1>

                            <AnimatedText
                                phrases={[
                                    "Страница не найдена // 404"
                                ]}
                            />

                            <div className="mt-12">
                                <button
                                    className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium mr-4 transition-all duration-300 hover:scale-105">
                                    Рассчитать стоимость
                                </button>
                                <button
                                    className="px-8 py-3 border border-white/30 hover:border-red-500 rounded-md font-medium transition-all duration-300 hover:scale-105">
                                    Отследить груз
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="py-12 border-t border-white/10 mt-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                                    TECHNO<span className="text-red-500">TRANS</span>
                                </h3>
                                <p className="text-white/60">Инновационные решения в сфере грузоперевозок</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Услуги</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-white/60 hover:text-red-400 transition-colors">Междугородние перевозки</a></li>
                                    <li><a href="#" className="text-white/60 hover:text-red-400 transition-colors">Городские перевозки</a></li>
                                    <li><a href="#" className="text-white/60 hover:text-red-400 transition-colors">Международные перевозки</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Компания</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-white/60 hover:text-red-400 transition-colors">О нас</a></li>
                                    <li><a href="#" className="text-white/60 hover:text-red-400 transition-colors">Контакты</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
                                <ul className="space-y-2">
                                    <li className="text-white/60">+7 (914) 772-80-70</li>
                                    <li className="text-white/60">Хабаровск, пер.Батарейный, 4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
                            <p>© {new Date().getFullYear()} АвтоРейлТранс. Все права защищены.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}