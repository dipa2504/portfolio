import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import './Experience.css';

const Experience = () => {
  return (
    <section className="container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="experience-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="year"
            >
              {experience.year}
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="details"
            >
              <h6 className="role">
                {experience.role} -{" "}
                <span className="company">
                  {experience.company}
                </span>
              </h6>

              <p className="description">
                {experience.description}
              </p>

              <div>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="tech"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
