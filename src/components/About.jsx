import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
import './About.css'; // Import the traditional CSS file

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">
                About
                <span className="about-highlight"> Me</span>
            </h1>
            <div className="about-flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="about-image-section">
                    <div className="about-image-container">
                        <img className="about-image" src={aboutImg} alt="about" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="about-text-section">
                    <div className="about-text-container">
                        <p className="about-text">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
