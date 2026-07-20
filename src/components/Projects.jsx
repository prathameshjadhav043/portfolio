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
                    {portfolioData.projects.map((project) => (
                        <Reveal key={project.title} width="100%" className="project-reveal">
                            <motion.div
                                className="project__card glass"
                                whileHover={{ y: -10 }}
                            >
                                <div className="project__content">
                                    <div className="project__header">
                                        <h3 className="project__title">{project.title}</h3>
                                        {project.tag && (
                                            <span className={`project__tag ${project.tagVariant ? `project__tag--${project.tagVariant}` : ''}`}>
                                                {project.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="project__tech">{project.tech}</p>
                                    <ul className="project__desc">
                                        {project.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="project__links">
                                        {project.links?.playstore && (
                                            <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" className="btn-link">Play Store</a>
                                        )}
                                        {project.links?.appstore && (
                                            <a href={project.links.appstore} target="_blank" rel="noopener noreferrer" className="btn-link">App Store</a>
                                        )}
                                        {project.links?.devpost && (
                                            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="btn-link">Devpost</a>
                                        )}
                                        {project.links?.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
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
