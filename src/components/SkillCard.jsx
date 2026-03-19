import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl"
        >
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <category.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                    <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
