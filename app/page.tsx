'use client'

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import AnimatedText from '../components/AnimatedText';
import ServiceCard from '../components/ServiceCard';
import AdvantageCard from '../components/AdvantageCard';
import TruckAnimation from '../components/TruckAnimation';
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from 'framer-motion';

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

  const services = [
    {
      id: 1,
      title: "Международные негабаритные перевозки из Китая",
      description: "Логистические решения для международных грузов",
      icon: "✈️"
    },
    {
      id: 2,
      title: "Междугородние перевозки",
      description: "Быстрая и надежная доставка грузов по всей стране",
      icon: "🚛"
    },
    {
      id: 3,
      title: "Городские перевозки",
      description: "Оперативная доставка по городу в течение дня",
      icon: "🚚"
    },
  ];

  const advantages = [
    {
      icon: "⏱️",
      title: "Скорость",
      description: "Оптимизированные маршруты и минимальные сроки"
    },
    {
      icon: "🔒",
      title: "Надежность",
      description:
          "Нам доверяют более 100 компаний"
    },
    {
      icon: "📊",
      title: "Отслеживание",
      description: "Онлайн-мониторинг груза в реальном времени"
    },
    {
      icon: "💳",
      title: "Гибкая оплата",
      description: "Удобные способы оплаты для клиентов"
    }
  ];

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
            <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 bg-[url(../public/most.jpg)]">
              <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                  АВТО<span className="text-red-500">РЕЙЛ</span><span className="text-red-600  ">ТРАНС</span>
                </h1>

                <AnimatedText
                    phrases={[
                      "Логистика будущего уже здесь",
                      "Доставляем грузы со скоростью мысли",
                      "Цифровые решения для реальных перевозок"
                    ]}
                />

                <div className="mt-12">
                  <button
                      className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium mr-4 transition-all duration-300 hover:scale-105"
                  >
                    Рассчитать стоимость
                  </button>
                  {/*<button*/}
                  {/*    className="px-8 py-3 border border-white/30 hover:border-red-500 rounded-md font-medium transition-all duration-300 hover:scale-105">*/}
                  {/*  Отследить груз*/}
                  {/*</button>*/}
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                Наши услуги
              </h2>
              <p className="text-white/70 mb-12">Комплексные решения для ваших грузоперевозок</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))}
              </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20">
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                Наши преимущества
              </h2>
              <p className="text-white/70 mb-12">Почему клиенты выбирают нас</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                    <AdvantageCard key={index} advantage={advantage} index={index}/>
                ))}
              </div>
            </section>

            <section className='py-20'>
              <motion.div
                  className='mt-[150px] bg-no-repeat w-[96%] h-[80vh] my-7 ml-[2%] border-[3px] z-10 grid grid-cols-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border-white/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2'>
                <div className='h-auto p-7 mt-6 rounded-md hover:rounded-xl'>
                  <img src="https://mh.peton.ru/upload/iblock/155/1556e126c26d4a8d167b355908313f1b.jpg" alt=""/>
                </div>
                <div className='h-auto p-7'>
                  <h4 className='font-bold text-[40px]'>
                    Подъем и перемещение
                    грузов весом до 300 тонн
                  </h4>
                  <hr className='border-2 rounded-sm bg-red-500 h-2 border-red-500'/>
                  <h4 className='font-bold text-[40px] text-red-600'>Как мы это делаем:</h4>
                  <div className='ml-4 p-3'>
                    <p className='text-[26px] font-semibold mt-4'>▪ Рассчитываем стоимость работ
                    </p>
                    <p className='text-[26px] font-semibold mt-4'>▪ Заключаем договор на выполнение работ
                    </p>
                    <p className='text-[26px] font-semibold mt-4'>▪ Мобилизация оборудования и людей на объект
                    </p>
                    <p className='text-[26px] font-semibold mt-4'>▪ Установка оборудования на фундамент по
                      заданным отметкам или на место хранения
                    </p>
                    <p className='text-[26px] font-semibold mt-4'>▪ Подписываем акт выполненных работ
                    </p>
                    <p className='text-[26px] font-semibold mt-4'>▪ Демобилизация оборудования и людей к месту
                      дислокации
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Tracking Section */}
            {/*<section className="py-20">*/}
            {/*  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 md:p-12">*/}
            {/*    <div className="flex flex-col md:flex-row items-center">*/}
            {/*      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">*/}
            {/*        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">*/}
            {/*          Онлайн-отслеживание*/}
            {/*        </h2>*/}
            {/*        <p className="text-white/80 mb-6">*/}
            {/*          Наша система позволяет в реальном времени отслеживать местоположение вашего груза.*/}
            {/*          Просто введите номер заказа и получите актуальную информацию.*/}
            {/*        </p>*/}
            {/*        <div className="flex">*/}
            {/*          <input*/}
            {/*              type="text"*/}
            {/*              placeholder="Введите номер груза"*/}
            {/*              className="flex-grow px-4 py-3 bg-black/30 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"*/}
            {/*          />*/}
            {/*          <button*/}
            {/*              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-r-md font-medium transition-all duration-300">*/}
            {/*            Найти*/}
            {/*          </button>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className="md:w-1/2 relative">*/}
            {/*        <div className="bg-black/40 border border-white/10 rounded-lg p-4">*/}
            {/*          <div className="flex justify-between items-center mb-4">*/}
            {/*            <div className="text-sm text-white/70">Груз #TRK-75842</div>*/}
            {/*            <div className="text-sm text-green-400">В пути</div>*/}
            {/*          </div>*/}
            {/*          <div className="h-2 bg-gray-700 rounded-full mb-4">*/}
            {/*            <div className="h-2 bg-red-500 rounded-full" style={{width: '65%'}}></div>*/}
            {/*          </div>*/}
            {/*          <div className="flex justify-between text-xs text-white/60 mb-6">*/}
            {/*            <span>Москва</span>*/}
            {/*            <span>Санкт-Петербург</span>*/}
            {/*          </div>*/}
            {/*          <div className="relative h-32">*/}
            {/*            <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>*/}
            {/*            <div className="absolute top-0 left-0 right-0 h-px bg-white/10" style={{top: '50%'}}></div>*/}
            {/*            <div className="absolute top-0 left-0 right-0 h-px bg-white/10" style={{top: '100%'}}></div>*/}
            {/*            <div className="absolute left-[65%] top-1/2 transform -translate-y-1/2 -translate-x-1/2">*/}
            {/*              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">*/}
            {/*                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"*/}
            {/*                     fill="currentColor">*/}
            {/*                  <path*/}
            {/*                      d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>*/}
            {/*                  <path*/}
            {/*                      d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-3-3A1 1 0 0016 7h-1V5a1 1 0 00-1-1H3z"/>*/}
            {/*                </svg>*/}
            {/*              </div>*/}
            {/*              <div className="text-xs text-center mt-2 text-white/80">Тверь</div>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
          </main>

          <footer className="py-12 border-t border-white/10 mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                    АВТО<span className="text-red-500">РЕЙЛ</span><span className="text-red-600  ">ТРАНС</span>
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
                    <li className="text-white/60">Хабаровск, ул. Лермонтова, 3</li>
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