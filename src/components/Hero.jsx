import { motion } from 'framer-motion';
import './Hero.css';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { name, role } = portfolioData.personalInfo;

    return (
        <section className="hero">
            <div className="container hero__container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="hero__greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {name}
                    </motion.h1>

                    <motion.h2
                        className="hero__role"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="gradient-text">{role}</span>
                    </motion.h2>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-glass">Contact Me</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
