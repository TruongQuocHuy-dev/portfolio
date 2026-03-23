import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Download, Eye, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/content';
import RevealText from './RevealText';

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

    const cardVariants = {
        rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
        hover: { y: -8, scale: 1.02, rotateX: -1.2, rotateY: 1.2 },
    };

    const shineVariants = {
        rest: { x: -220, opacity: 0 },
        hover: { x: 520, opacity: [0, 0.45, 0] },
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-black"
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
                            {/* Fresher Badge */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="flex flex-wrap gap-2 mb-4"
                            >
                                <span className="font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-bold tracking-[0.12em] inline-flex items-center gap-1.5 uppercase">
                                    <GraduationCap size={12} /> Fresh Graduate
                                </span>
                                <span className="font-mono px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-[#9cc0ff] text-[10px] sm:text-xs font-bold tracking-[0.12em] inline-flex items-center gap-1.5 uppercase">
                                    Open to Junior Roles
                                </span>
                            </motion.div>

                            {/* Updated H1 - Fresher Friendly */}
                            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black mb-6 tracking-tight leading-[0.95] text-[#d6e1ff]">
                                Fullstack Developer
                                <br />
                                <span className="text-[#83aefb]">Building Real-World Apps</span>
                                <br />
                                with React & Node.Js
                            </h1>

                            {/* Updated Intro Text */}
                            <RevealText
                                text={`Hi, I'm ${personalInfo.name}. I build mobile-first and fullstack applications using React Native and Node.js. I'm passionate about turning ideas into real-world products and continuously improving my skills as a developer.`}
                                className="text-lg sm:text-xl text-[#d6e1ff] max-w-2xl mb-8 leading-relaxed block"
                                as="p"
                            />

                            {/* Education & Stats Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-3 mb-8"
                            >
                                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#d6e1ff] text-sm font-medium flex items-center gap-2">
                                    🎓 GPA: 3.0/4.0
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#d6e1ff] text-sm font-medium flex items-center gap-2">
                                    💻 5+ Projects
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#d6e1ff] text-sm font-medium flex items-center gap-2">
                                    <MapPin size={14} /> Binh Duong
                                </span>
                            </motion.div>

                            {/* CTA Buttons */}
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
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">Git</a>
                                    <span className="w-5 h-px bg-white/20" />
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">In</a>
                                </div>
                            </div>
                        </div>

                        {/* Profile Card - Updated with Avatar */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.45 }}
                            whileHover={{ y: -6, scale: 1.015 }}
                            className="max-w-[410px] mx-auto lg:ml-auto lg:mr-0 w-full relative"
                        >
                            <motion.div
                                className="absolute -inset-2 rounded-[2.2rem] pointer-events-none"
                                animate={{
                                    opacity: [0.25, 0.55, 0.25],
                                    scale: [1, 1.015, 1],
                                }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.08) 55%, transparent 100%)',
                                    filter: 'blur(14px)',
                                }}
                            />

                            <motion.div
                                variants={cardVariants}
                                initial="rest"
                                animate="rest"
                                whileHover="hover"
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="rounded-[2rem] p-3 border border-white/15 bg-[#12264f]/70 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                            >
                                <div className="aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-slate-800 relative border border-white/10">
                                    {/* Avatar Image filling card */}
                                    <img
                                        src="/huy-avatar.jpg"
                                        alt="Truong Quoc Huy"
                                        className="absolute inset-0 w-full h-full object-cover bg-slate-700"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback initials if image fails */}
                                    <div className="absolute inset-0 bg-black/35 backdrop-blur-sm flex items-center justify-center text-6xl font-black text-white/90 hidden">
                                        TQH
                                    </div>

                                    {/* Glass Edge Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/80" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.15),transparent_45%)]" />

                                    <motion.div
                                        variants={shineVariants}
                                        transition={{ duration: 0.9, ease: 'easeOut' }}
                                        className="absolute -inset-y-8 -left-32 w-20 rotate-12 bg-white/30 blur-md pointer-events-none"
                                    />

                                    {/* Overlay Info Section */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold tracking-wide">
                                            🎓 Just Graduated
                                        </span>
                                        <p className="text-xl font-bold font-heading leading-tight mt-2 text-white">
                                            Truong Quoc Huy
                                        </p>
                                        <p className="text-sm text-[#c3d4ff] mt-1">
                                            Software Engineering • Binh Duong
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
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