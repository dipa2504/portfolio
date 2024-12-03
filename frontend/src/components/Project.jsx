import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import "./Project.css";

const Project = () => {
  return (
    <div className="container">
      <h1 className="heading">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="image-container"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="project-image"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-container"
            >
              <h6 className="title">{project.title}</h6>
              <p className="description">{project.description}</p>
              <div className="technology-container">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
