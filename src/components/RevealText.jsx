import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const RevealText = ({ text, delay = 0, speed = 0.015, className = '', as: Component = 'span' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    if (!text) return null;

    const words = String(text).split(' ');
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        },
    };

    const charVariants = {
        hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.15, ease: "easeOut" }
        },
    };

    return (
        <Component className={className} ref={ref}>
            <motion.span
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {words.map((word, wIndex) => (
                    <span key={wIndex} className="inline-block whitespace-nowrap">
                        {Array.from(word).map((char, cIndex) => (
                            <motion.span
                                key={cIndex}
                                variants={charVariants}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                ))}
            </motion.span>
        </Component>
    );
};

export default RevealText;
