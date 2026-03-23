import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/content';
import ProjectDetail from '../pages/ProjectDetail';
import ProjectCard from './ProjectCard';
import RevealText from './RevealText';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section id="projects" className="py-12 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16 px-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl md:text-5xl font-bold mb-4"
                        >
                            Featured <span className="text-primary">Projects</span>
                        </motion.h2>
                        <RevealText
                            text="Building digital solutions focused on UX and performance."
                            className="text-text-secondary text-lg"
                            as="p"
                            delay={0.1}
                        />
                    </div>
                    <motion.a
                        href="https://github.com/TruongQuocHuy-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                        View all on GitHub <ExternalLink size={18} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                            idx={idx}
                            onClick={() => setSelectedProject(project.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        projectId={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

