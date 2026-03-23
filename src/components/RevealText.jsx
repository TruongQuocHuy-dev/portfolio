import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const RevealText = ({ text, delay = 0, speed = 0.015, className = '', as: Component = 'span' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    if (!text) return null;

    const characters = Array.from(String(text));

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
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={charVariants}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        </Component>
    );
};

export default RevealText;
