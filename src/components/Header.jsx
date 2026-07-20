import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={`header__pill glass-crystal ${scrolled ? 'header__pill--scrolled' : ''}`}>
                <div className="header__container">
                    <a href="#" className="logo">PJ.</a>
                    <nav>
                        <ul className="nav__links">
                            {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Feedback', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
