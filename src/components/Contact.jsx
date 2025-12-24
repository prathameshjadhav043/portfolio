import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
    const { email, phone, location, linkedin, github } = portfolioData.personalInfo;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <Reveal width="100%">
                    <div className="contact__box glass">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact__text">
                            I'm constantly looking for new opportunities to learn and grow.
                            Whether you have a question or just want to say hi, my inbox is always open!
                        </p>

                        <a href={`mailto:${email}`} className="btn btn-primary contact__btn">Say Hello</a>

                        <div className="contact__details">
                            <div className="contact__item">
                                <FaEnvelope className="icon" /> {email}
                            </div>
                            <div className="contact__item">
                                <FaPhone className="icon" /> {phone}
                            </div>
                            <div className="contact__item">
                                <span className="icon">📍</span> {location}
                            </div>
                        </div>

                        <div className="social__links">
                            <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </Reveal>

                <footer className="footer">
                    <p>Designed & Built by Prathamesh Jadhav</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
