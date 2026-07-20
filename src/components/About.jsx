import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import './About.css';
import { FaMobileAlt, FaReact, FaAppStoreIos, FaCodeBranch, FaTasks, FaLaptopCode } from 'react-icons/fa';

const getIcon = (title) => {
    switch (title) {
        case "Mobile App Development": return <FaMobileAlt />;
        case "React Expertise": return <FaReact />;
        case "Flutter Proficiency": return <FaLaptopCode />;
        case "iOS Exploration": return <FaAppStoreIos />;
        case "Version Control": return <FaCodeBranch />;
        case "Project Management": return <FaTasks />;
        default: return null;
    }
};

const About = () => {
    const { about } = portfolioData.personalInfo;

    const intro = about[0];
    const features = about.slice(1);

    return (
        <section id="about" className="about">
            <div className="container about__container">
                <Reveal width="100%">
                    <h2 className="section-title">About Me</h2>
                    <div className="about__intro glass">
                        <p>{intro.text}</p>
                    </div>

                    <div className="about__grid">
                        {features.map((item) => (
                            <article key={item.title} className="about__card glass">
                                <div className="about__icon">
                                    {getIcon(item.title)}
                                </div>
                                <h3 className="about__card-title">{item.title}</h3>
                                <p className="about__card-text">{item.text}</p>
                            </article>
                        ))}
                    </div>

                    <div className="about__cta-wrapper">
                        <a
                            href={portfolioData.personalInfo.resumeUrl}
                            download="Prathamesh_Software_Engineer_Resume.pdf"
                            className="btn btn-primary"
                        >
                            Download Resume
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
