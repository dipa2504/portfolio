import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="contact-heading"
      >
        Get in Touch
      </motion.h1>

      <div className="contact-details">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-text"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="contact-text"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <a href="" className="contact-email">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
