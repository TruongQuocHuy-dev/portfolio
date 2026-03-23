import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';
import SkillCard from './SkillCard';
import RevealText from './RevealText';

const Skills = () => {
    return (
        <section id="skills" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4"
                    >
                        Technical <span className="text-primary">Skills</span>
                    </motion.h2>
                    <RevealText
                        text="A complete toolkit for modern web development."
                        className="text-text-secondary text-lg"
                        as="p"
                        delay={0.1}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <SkillCard key={idx} category={category} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

