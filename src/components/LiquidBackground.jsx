import './LiquidBackground.css';

const LiquidBackground = () => {
    return (
        <div className="liquid-bg" aria-hidden="true">
            <div className="liquid-bg__orb liquid-bg__orb--1" />
            <div className="liquid-bg__orb liquid-bg__orb--2" />
            <div className="liquid-bg__orb liquid-bg__orb--3" />
            <div className="liquid-bg__orb liquid-bg__orb--4" />
            <div className="liquid-bg__mesh" />
        </div>
    );
};

export default LiquidBackground;
