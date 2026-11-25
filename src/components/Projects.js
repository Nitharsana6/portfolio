// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "ResumeLinker",
//     desc: "AI ATS system that analyzes resumes and matches jobs.",
//     link: "https://github.com/nitharsana6"
//   },
//   {
//     title: "Techie Chatbot",
//     desc: "Interview chatbot using NLP.",
//     link: "https://github.com/nitharsana6"
//   },
//   {
//     title: "Eshift System",
//     desc: "Full-stack system for logistics automation.",
//     link: "https://github.com/nitharsana6"
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>

//       <div className="project-grid">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             className="glass card"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//           >
//             <h3>{p.title}</h3>
//             <p>{p.desc}</p>

//             {/* 🔥 BUTTON ADDED HERE */}
//             <a 
//               href={p.link} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="project-btn"
//             >
//               View Project
//             </a>

//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

// ✅ IMPORT YOUR LOCAL IMAGES
import resumeImg from "../assets/Project/Resume.png";
import chatbotImg from "../assets/Project/Techie.png";
import eshiftImg from "../assets/Project/Eshift.png";
import hotelImg from "../assets/Project/Hotel.png";
import ticketImg from "../assets/Project/Ticket.png";
import portfolioImg from "../assets/Project/tharmi.jpg";

const projects = [
  {
  title: "Tharmika Portfolio Web",
  desc: "A personal portfolio website showcasing my client skills, projects, experience, and professional achievements.",
  image: portfolioImg,
  link: "https://www.tharmika.com"
},
  {
    title: "ResumeLinker",
    desc: "AI ATS system that analyzes resumes and matches jobs.",
    image: resumeImg,
    link: "https://github.com/nitharsana6"
  },
  {
    title: "Techie Chatbot",
    desc: "Interview chatbot using NLP for smart responses.",
    image: chatbotImg,
    link: "https://github.com/nitharsana6"
  },
  {
    title: "Eshift System",
    desc: "Full-stack logistics automation system.",
    image: eshiftImg,
    link: "https://github.com/nitharsana6"
  },
  {
    title: "Hotel Reservation System",
    desc: "Modern hotel booking & management platform.",
    image: hotelImg,
    link: "#"
  },
  {
    title: "Ticket Booking System",
    desc: "Online ticket booking system with real-time updates.",
    image: ticketImg,
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">

      {/* HEADER */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Real-world systems built with MERN, AI & Full Stack technologies
        </p>
      </motion.div>

      {/* GRID */}
      <div className="projects-grid">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >

            {/* IMAGE */}
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project →
              </a>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;