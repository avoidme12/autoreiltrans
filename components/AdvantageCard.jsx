import { motion } from 'framer-motion';

export default function AdvantageCard({ advantage, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2"
        >
            <div className="text-3xl mb-4">{advantage.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
            <p className="text-white/70">{advantage.description}</p>
        </motion.div>
    );
}