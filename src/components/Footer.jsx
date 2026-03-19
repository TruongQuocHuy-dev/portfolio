import React from 'react';
import { personalInfo } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-bold gradient-text">
                        TQH.dev
                    </div>

                    <div className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. Bảo lưu mọi quyền.
                    </div>

                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#about" className="hover:text-primary transition-colors">Giới thiệu</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Dự án</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Liên hệ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
