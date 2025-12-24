import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Arsenal</h2>
                <div className="skills__container">
                    {Object.entries(skills).map(([category, items], index) => (
                        <Reveal key={index} width="100%" className="skills__reveal">
                            <div className="skills__category glass">
                                <h3 className="skills__title">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <div className="skills__list">
                                    {items.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            className="skill-pill"
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
