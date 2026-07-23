import { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import './Projects.css';

const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'react-native', label: 'React Native' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'ios', label: 'iOS' },
];

const matchesFilter = (tech, filterId) => {
    const normalized = tech.toLowerCase();
    switch (filterId) {
        case 'react-native':
            return normalized.includes('react native');
        case 'flutter':
            return normalized.includes('flutter');
        case 'ios':
            return (normalized.includes('ios') || normalized.includes('swift'))
                && !normalized.includes('react native')
                && !normalized.includes('flutter');
        default:
            return true;
    }
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = useMemo(
        () => portfolioData.projects.filter((project) =>
            matchesFilter(project.tech, activeFilter)
        ),
        [activeFilter]
    );

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects__filter glass-crystal" role="tablist" aria-label="Filter projects by technology">
                    {FILTERS.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            role="tab"
                            aria-selected={activeFilter === id}
                            className={`projects__filter-btn ${activeFilter === id ? 'projects__filter-btn--active' : ''}`}
                            onClick={() => {
                                setActiveFilter(id);
                                trackEvent('project_filter', { filter: id });
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <p className="projects__count">
                    Showing {filteredProjects.length} of {portfolioData.projects.length} projects
                </p>

                <div className="projects__grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <Reveal key={project.title} width="100%" className="project-reveal">
                                <motion.div
                                    className="project__card glass"
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
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
                                                <a
                                                    href={project.links.playstore}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-link"
                                                    onClick={() => trackEvent('project_link_click', { project: project.title, link: 'playstore' })}
                                                >
                                                    Play Store
                                                </a>
                                            )}
                                            {project.links?.appstore && (
                                                <a
                                                    href={project.links.appstore}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-link"
                                                    onClick={() => trackEvent('project_link_click', { project: project.title, link: 'appstore' })}
                                                >
                                                    App Store
                                                </a>
                                            )}
                                            {project.links?.devpost && (
                                                <a
                                                    href={project.links.devpost}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-link"
                                                    onClick={() => trackEvent('project_link_click', { project: project.title, link: 'devpost' })}
                                                >
                                                    Devpost
                                                </a>
                                            )}
                                            {project.links?.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-link"
                                                    onClick={() => trackEvent('project_link_click', { project: project.title, link: 'github' })}
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
