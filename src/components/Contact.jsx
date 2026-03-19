import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/content';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Hãy <span className="text-primary">kết nối</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-12 max-w-md">
                            Sẵn sàng cho các cơ hội freelance hoặc vị trí toàn thời gian. Hãy cùng nhau xây dựng điều gì đó tuyệt vời!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                    <Mail className="text-primary group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-lg font-bold">{personalInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                    <Github className="text-primary group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary uppercase tracking-widest font-bold">GitHub</p>
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">@TruongQuocHuy-dev</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                    <Linkedin className="text-primary group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary uppercase tracking-widest font-bold">LinkedIn</p>
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">Truong Quoc Huy</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Họ tên</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Nguyễn Văn A" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Chủ đề</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Yêu cầu dự án" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Tin nhắn</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Nội dung tin nhắn..."></textarea>
                            </div>
                            <button disabled className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 opacity-80 cursor-not-allowed">
                                <Send size={20} /> Gửi tin nhắn (Demo)
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
