import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { personalInfo } from '../data/content';

const Hero = () => {
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const glowX = useTransform(springX, (v) => v - 180);
    const glowY = useTransform(springY, (v) => v - 180);

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none -z-10 opacity-70"
                style={{
                    background: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.22), transparent 72%)`
                    ),
                }}
            />

            {/* Cursor Glow */}
            <motion.div
                className="absolute pointer-events-none -z-10 w-[360px] h-[360px] rounded-full blur-[90px]"
                style={{
                    x: glowX,
                    y: glowY,
                    background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.08) 45%, transparent 75%)',
                }}
            />

            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10" />

            <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl md:rounded-[2rem] py-6 sm:py-8 md:py-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-12 items-center">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-[#9cc0ff] text-[10px] sm:text-xs font-bold tracking-[0.12em] mb-6 inline-flex items-center gap-2 uppercase"
                            >
                                Available for new opportunities
                            </motion.span>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black mb-8 tracking-tight leading-[0.95] text-[#d6e1ff]">
                                Building Scalable
                                <br />
                                <span className="text-[#83aefb]">React Ecosystems</span>
                                <br />
                                with Architectural Intent.
                            </h1>

                            <p className="text-lg sm:text-xl text-[#d6e1ff] max-w-2xl mb-10 leading-relaxed">
                                I am {personalInfo.name}, a Frontend Engineer obsessed with clean code, structural integrity, and high-performance user experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="px-8 py-4 bg-gradient-to-r from-[#8db3ff] to-[#6798ff] text-[#0b1b42] rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30"
                                >
                                    <Eye size={18} /> View Projects
                                </motion.a>
                                <motion.a
                                    href={personalInfo.resume}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="px-8 py-4 bg-[#1a2a52] text-[#d8e5ff] rounded-xl font-bold flex items-center justify-center gap-2 border border-white/10"
                                >
                                    <Download size={18} /> Download Resume
                                </motion.a>
                                <div className="flex items-center gap-3 sm:ml-2 text-xs tracking-[0.22em] text-[#97acdc] font-bold uppercase">
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Git</a>
                                    <span className="w-5 h-px bg-white/20" />
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">In</a>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.45 }}
                            whileHover={{ y: -6, scale: 1.015 }}
                            className="max-w-[410px] mx-auto lg:ml-auto lg:mr-0 w-full"
                        >
                            <div className="rounded-[2rem] p-3 border border-white/15 bg-[#12264f]/70 shadow-[0_0_40px_rgba(59,130,246,0.35)]">
                                <div className="aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-slate-800 relative border border-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-black/60" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.2),transparent_40%)]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-black/35 border border-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-black text-white/90">
                                            TQH
                                        </div>
                                    </div>
                                    <div className="absolute left-5 right-5 bottom-5">
                                        <p className="text-[10px] tracking-[0.18em] uppercase text-[#b8c8f0] font-bold">Principal Engineer</p>
                                        <p className="text-3xl font-black leading-tight mt-1">Truong Quoc Huy</p>
                                        <p className="text-sm text-[#c3d4ff] mt-1">Ho Chi Minh City, VN</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-text-secondary"
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
