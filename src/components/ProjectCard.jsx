import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, idx, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={onClick}
            className="group glass rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-primary p-3 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <ExternalLink size={24} />
                    </a>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        Live Demo <ExternalLink size={14} />
                    </a>
                    <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                    >
                        Source Code <Github size={14} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
