import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Heart, Sparkles } from 'lucide-react';
import RevealText from './RevealText';
import { personalInfo } from '../data/content';

const About = () => {
    return (
        <section id="about" className="relative py-12 px-4 bg-surface/10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-black mb-3 text-[#d6e1ff]">
                        About <span className="text-primary gradient-text">Me</span>
                    </h2>
                    <p className="font-mono text-text-secondary max-w-2xl mx-auto uppercase tracking-wide text-xs">
                        Quick intro, skills, and what drives me
                    </p>
                </motion.div>

                {/* Main Content - Flexible Flow Layout */}
                <div className="space-y-8">

                    {/* Bio + Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-6 md:p-8 rounded-2xl border border-white/10"
                    >
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <RevealText
                                text="👋 Hi, I'm Huy — a Software Engineering student at Thủ Dầu Một University, passionate about building clean web apps with React & Node.js."
                                as="p"
                                className="text-lg text-[#d6e1ff] block"
                            />
                            <RevealText
                                text="I've built 5+ projects, from mobile apps to full-stack platforms. I love turning ideas into real products and learning by doing."
                                as="p"
                                delay={0.2}
                                className="text-lg text-[#d6e1ff] block"
                            />
                            <RevealText
                                text="🎯 Open to Junior Frontend/Full-Stack roles • Available for internships & full-time • Binh Duong or Remote"
                                as="p"
                                delay={0.4}
                                className="text-lg text-primary font-bold block"
                            />
                        </div>

                        {/* Education - Simple Badge */}
                        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                            <GraduationCap className="text-primary" size={20} />
                            <span className="font-heading text-sm text-white font-medium">
                                Thủ Dầu Một University
                            </span>
                            <span className="text-sm text-text-secondary">•</span>
                            <span className="font-mono text-sm text-text-secondary">
                                Software Engineering • 2021 - 2026
                            </span>
                            <span className="font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">
                                GPA: 3.0/4.0
                            </span>
                        </div>
                    </motion.div>

                    {/* Stats - Simple Horizontal Scroll on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {[
                            { num: '5+', label: 'Projects' },
                            { num: '3.0', label: 'GPA' },
                            { num: '🎓', label: 'Fresher' },
                            { num: '⚡', label: 'Fast Learner' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="glass px-5 py-3 rounded-xl border border-white/10 text-center min-w-[100px]"
                            >
                                <div className="font-heading text-4xl font-black gradient-text">{stat.num}</div>
                                <div className="font-mono text-xs text-text-secondary uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Values - Simple Cards, No Strict Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Heart, title: 'Philosophy', text: 'Build with empathy. Code should serve people, not just work.' },
                            { icon: Code, title: 'Approach', text: 'Learn by building. Clean code, good docs, open to feedback.' },
                            { icon: Sparkles, title: 'Goal', text: 'Grow into a solid engineer who ships quality products users love.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="glass p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors flex flex-col items-center text-center"
                            >
                                <item.icon className="text-primary mb-3" size={22} />
                                <h4 className="font-heading font-black text-lg text-white mb-1">{item.title}</h4>
                                <p className="text-sm text-text-secondary">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;