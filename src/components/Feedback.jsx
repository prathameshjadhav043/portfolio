import { useState } from 'react';
import Reveal from './Reveal';
import { FaStar } from 'react-icons/fa';
import './Feedback.css';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds for demo
    };

    return (
        <section id="feedback" className="feedback">
            <div className="container">
                <h2 className="section-title">Leave Feedback</h2>
                <Reveal width="100%">
                    <div className="feedback__container glass">
                        {submitted ? (
                            <div className="feedback__success">
                                <h3>Thank you!</h3>
                                <p>Your feedback helps me improve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="feedback__form">
                                <div className="form__group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="John Doe" required className="glass-input" />
                                </div>

                                <div className="form__group">
                                    <label>Rating</label>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => {
                                            const ratingValue = index + 1;
                                            return (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value={ratingValue}
                                                        onClick={() => setRating(ratingValue)}
                                                    />
                                                    <FaStar
                                                        className="star"
                                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                        size={30}
                                                        onMouseEnter={() => setHover(ratingValue)}
                                                        onMouseLeave={() => setHover(0)}
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="form__group">
                                    <label>Message</label>
                                    <textarea rows="4" placeholder="Share your thoughts..." required className="glass-input"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit Feedback</button>
                            </form>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Feedback;
