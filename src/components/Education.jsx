import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education__container">
                    {portfolioData.education.map((edu, index) => (
                        <Reveal key={index} width="100%">
                            <div className="education__card glass">
                                <div className="education__header">
                                    <div>
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.institute}</h4>
                                    </div>
                                    <span className="education__year">{edu.year}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
