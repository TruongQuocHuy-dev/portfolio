import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Code } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Career Goal",
            description: "To become a Senior Frontend Architect, specializing in high-performance web applications and scalable design systems."
        },
        {
            icon: Lightbulb,
            title: "Philosophy",
            description: "User-centered design combined with technical excellence. I believe every line of code contributes to a better user experience."
        },
        {
            icon: Code,
            title: "Mindset",
            description: "Clean code is not just a preference; it is essential. I advocate DRY principles, modularity, and comprehensive documentation."
        }
    ];

    return (
        <section id="about" className="py-24 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            A little about <span className="text-primary">myself</span>
                        </h2>
                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                            <p>
                                I am a Frontend Developer in Vietnam with a strong passion for creating intuitive and visually engaging digital experiences.
                                My journey started with curiosity about how things work on the web, and quickly grew into a dedicated career focused on mastering modern web technologies.
                            </p>
                            <p>
                                Whether optimizing React rendering performance or crafting pixel-perfect interfaces with Tailwind CSS, I approach every challenge with a focus on quality and scalability.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-2xl flex gap-6"
                            >
                                <div className="bg-primary/10 p-4 rounded-xl h-fit">
                                    <v.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                                    <p className="text-text-secondary">{v.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
