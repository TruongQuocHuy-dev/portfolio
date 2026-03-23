import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Film, ChevronDown } from 'lucide-react';
import { projects } from '../data/content';
import RevealText from '../components/RevealText';

const ProjectDetail = ({ projectId, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [mediaType, setMediaType] = useState('images');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const project = projects.find(p => p.id === projectId);

    useEffect(() => {
        if (isImageModalOpen) {
            // No action needed for body as it's already locked by ProjectDetail
        } else {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isImageModalOpen]);

    if (!project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.screenshots.length - 1 : prev - 1
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col"
        >
            {/* Fixed Header */}
            <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
                    >
                        <motion.div
                            whileHover={{ x: -4 }}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft size={20} />
                            <span className="font-medium">Back</span>
                        </motion.div>
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/5 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto">
                <div className="max-w-6xl mx-auto py-8 px-4">

                    {/* Project Title */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-black mb-4 gradient-text">
                            {project.title}
                        </h1>
                        <RevealText
                            text={project.fullDescription}
                            className="text-xl text-text-secondary max-w-3xl leading-relaxed block text-justify"
                            as="p"
                        />
                    </motion.div>

                    {/* Tags & Links */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-4 mb-12"
                    >
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="font-mono px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-all cursor-default"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        <div className="flex gap-3 ml-auto">
                            {typeof project.github === 'object' ? (
                                <div className="relative">
                                    <motion.button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 glass rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors shadow-lg"
                                    >
                                        <Github size={20} /> Source Code <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </motion.button>
                                    
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-2 w-48 glass rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10"
                                            >
                                                <div className="py-1">
                                                    {Object.entries(project.github).map(([key, url]) => (
                                                        <a
                                                            key={key}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-4 py-3 hover:bg-primary/20 flex items-center gap-2 text-sm font-medium transition-colors border-b border-white/5 last:border-b-0"
                                                        >
                                                            <Github size={16} />
                                                            <span className="capitalize">
                                                                {key === 'app' ? 'App User' : key === 'admin' ? 'Web Admin' : 'Server'}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 glass rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors shadow-lg"
                                >
                                    <Github size={20} /> Source Code
                                </motion.a>
                            )}
                            <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-primary rounded-full font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30"
                            >
                                <ExternalLink size={20} /> Demo
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Media Type Toggle */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                    >
                        <div className="flex gap-3">
                            <button
                                onClick={() => setMediaType('images')}
                                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${mediaType === 'images'
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'glass hover:bg-white/5'
                                    }`}
                            >
                                <ImageIcon size={20} /> Screenshots ({project.screenshots.length})
                            </button>
                            {project.videoUrl && (
                                <button
                                    onClick={() => setMediaType('video')}
                                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${mediaType === 'video'
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                        : 'glass hover:bg-white/5'
                                        }`}
                                >
                                    <Film size={20} /> Video Demo
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Media Display */}
                    <AnimatePresence mode="wait">
                        {mediaType === 'video' && project.videoUrl ? (
                            <motion.div
                                key="video"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="mb-12"
                            >
                                <div className="relative rounded-3xl overflow-hidden glass aspect-video">
                                    <iframe
                                        src={project.videoUrl}
                                        title={`${project.title} Demo Video`}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="images"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="mb-12"
                            >
                                {/* Main Image */}
                                <div className="relative mb-6 group">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative h-[500px] rounded-3xl overflow-hidden glass cursor-pointer bg-black/20"
                                            onClick={() => setIsImageModalOpen(true)}
                                        >
                                            <img
                                                src={project.screenshots[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg">
                                                    <Play size={20} /> Click to zoom
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    {project.screenshots.length > 1 && (
                                        <>
                                            <motion.button
                                                onClick={prevImage}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/70 backdrop-blur-md hover:bg-primary/90 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                                            >
                                                <ChevronLeft size={28} strokeWidth={3} />
                                            </motion.button>
                                            <motion.button
                                                onClick={nextImage}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/70 backdrop-blur-md hover:bg-primary/90 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                                            >
                                                <ChevronRight size={28} strokeWidth={3} />
                                            </motion.button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    {!isImageModalOpen && (
                                        <div className="font-mono absolute bottom-4 right-4 px-5 py-2 rounded-full bg-black/70 backdrop-blur-md text-sm font-bold shadow-lg border border-white/10">
                                            {currentImageIndex + 1} / {project.screenshots.length}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {project.screenshots.map((screenshot, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + idx * 0.05, duration: 0.3 }}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 bg-black/20 ${idx === currentImageIndex
                                                ? 'ring-3 ring-primary shadow-lg shadow-primary/30'
                                                : 'opacity-70 hover:opacity-100 ring-1 ring-white/10'
                                                }`}
                                        >
                                            <img
                                                src={screenshot}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            {idx === currentImageIndex && (
                                                <div className="absolute inset-0 bg-primary/10" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Features & Technologies - same as before */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Features */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-primary rounded-full" />
                                Key Features
                            </h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + idx * 0.05 }}
                                        whileHover={{ x: 4 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                        <span className="text-text-secondary group-hover:text-white transition-colors">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-primary rounded-full" />
                                Tech Stack
                            </h3>
                            <div className="space-y-6">
                                {['frontend', 'backend', 'tools'].map((category) => (
                                    <div key={category}>
                                        <h4 className="text-primary font-bold mb-3 flex items-center gap-2 capitalize">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Tools & Services'}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies[category].map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.6 + idx * 0.03 }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-3 py-1 bg-white/5 hover:bg-primary/20 rounded-lg text-sm border border-white/10 hover:border-primary/30 transition-all cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {createPortal(
                <AnimatePresence>
                    {isImageModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsImageModalOpen(false)}
                            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={project.screenshots[currentImageIndex]}
                                    alt="Full size"
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />

                                {/* Modal Image Counter */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black/50 backdrop-blur-md text-sm font-bold shadow-lg border border-white/10 z-10">
                                    {currentImageIndex + 1} / {project.screenshots.length}
                                </div>

                                {/* Navigation in modal */}
                                {project.screenshots.length > 1 && (
                                    <>
                                        <motion.button
                                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-primary/90 transition-all backdrop-blur-sm shadow-xl"
                                        >
                                            <ChevronLeft size={32} strokeWidth={3} />
                                        </motion.button>
                                        <motion.button
                                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-primary/90 transition-all backdrop-blur-sm shadow-xl"
                                        >
                                            <ChevronRight size={32} strokeWidth={3} />
                                        </motion.button>
                                    </>
                                )}
                            </motion.div>

                            <motion.button
                                onClick={() => setIsImageModalOpen(false)}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm shadow-xl"
                            >
                                <X size={28} strokeWidth={3} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </motion.div>
    );
};

export default ProjectDetail;
