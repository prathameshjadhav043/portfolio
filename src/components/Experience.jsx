import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience__container">
                    {portfolioData.experience.map((exp, index) => (
                        <Reveal key={index} width="100%">
                            <div className="experience__card glass">
                                <div className="experience__header">
                                    <div>
                                        <h3>{exp.role}</h3>
                                        <h4>{exp.company}</h4>
                                    </div>
                                    <div className="experience__meta">
                                        <span>{exp.duration}</span>
                                        <span className="location">{exp.location}</span>
                                    </div>
                                </div>
                                <ul className="experience__desc">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
