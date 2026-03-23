import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, idx }) => {
    const colorStyles = {
        cyan: { iconBg: "bg-cyan-500/10", iconText: "text-cyan-400", hoverBorder: "group-hover:border-cyan-500/40" },
        emerald: { iconBg: "bg-emerald-500/10", iconText: "text-emerald-400", hoverBorder: "group-hover:border-emerald-500/40" },
        purple: { iconBg: "bg-purple-500/10", iconText: "text-purple-400", hoverBorder: "group-hover:border-purple-500/40" },
        orange: { iconBg: "bg-orange-500/10", iconText: "text-orange-400", hoverBorder: "group-hover:border-orange-500/40" },
        sky: { iconBg: "bg-sky-500/10", iconText: "text-sky-400", hoverBorder: "group-hover:border-sky-500/40" },
        rose: { iconBg: "bg-rose-500/10", iconText: "text-rose-400", hoverBorder: "group-hover:border-rose-500/40" },
        indigo: { iconBg: "bg-indigo-500/10", iconText: "text-indigo-400", hoverBorder: "group-hover:border-indigo-500/40" }
    };
    
    const style = colorStyles[category.color] || { iconBg: "bg-primary/10", iconText: "text-primary", hoverBorder: "group-hover:border-primary/50" };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl group transition-all duration-300 flex flex-col items-center text-center"
        >
            <div className={`${style.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className={style.iconText} size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-6">{category.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {category.items.map((item, i) => (
                    <span
                        key={i}
                        className={`font-mono px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium transition-colors ${style.hoverBorder}`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
