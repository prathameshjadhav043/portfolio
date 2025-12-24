import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects__grid">
                    {portfolioData.projects.map((project, index) => (
                        <Reveal key={index} width="100%" className="project-reveal">
                            <motion.div
                                className="project__card glass"
                                whileHover={{ y: -10 }}
                            >
                                <div className="project__content">
                                    <h3 className="project__title">{project.title}</h3>
                                    <p className="project__tech">{project.tech}</p>
                                    <ul className="project__desc">
                                        {project.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="project__links">
                                        {project.links?.playstore && (
                                            <a href={project.links.playstore} className="btn-link">Play Store</a>
                                        )}
                                        {project.links?.appstore && (
                                            <a href={project.links.appstore} className="btn-link">App Store</a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
