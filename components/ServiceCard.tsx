import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2"
        >
            <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <button className="text-red-400 hover:text-red-300 cursor-pointer transition-colors duration-300 flex items-center">
                    Подробнее
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="bg-gradient-to-r from-red-500/10 to-transparent h-1 w-full"></div>
        </motion.div>
    );
}