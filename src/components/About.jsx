import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Code } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Mục tiêu nghề nghiệp",
            description: "Trở thành Senior Frontend Architect, chuyên về ứng dụng web hiệu suất cao và hệ thống thiết kế có khả năng mở rộng."
        },
        {
            icon: Lightbulb,
            title: "Triết lý",
            description: "Thiết kế lấy người dùng làm trung tâm kết hợp với sự xuất sắc về kỹ thuật. Tôi tin rằng mỗi dòng code đều góp phần tạo nên trải nghiệm người dùng tốt hơn."
        },
        {
            icon: Code,
            title: "Tư duy",
            description: "Code sạch không chỉ là sở thích; đó là điều cần thiết. Tôi ủng hộ nguyên tắc DRY, tính module hóa và tài liệu toàn diện."
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
                            Một chút về <span className="text-primary">bản thân tôi</span>
                        </h2>
                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                            <p>
                                Tôi là một Frontend Developer tại Việt Nam, với niềm đam mê sâu sắc trong việc tạo ra những trải nghiệm kỹ thuật số trực quan và đẹp mắt.
                                Hành trình của tôi bắt đầu từ sự tò mò về cách mọi thứ hoạt động trên web, nhanh chóng phát triển thành sự nghiệp cống hiến để làm chủ công nghệ web hiện đại.
                            </p>
                            <p>
                                Dù là tối ưu hiệu suất render trong React hay tạo UI hoàn hảo từng pixel với Tailwind CSS, tôi luôn tiếp cận mọi thử thách với sự tập trung vào chất lượng và khả năng mở rộng.
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
