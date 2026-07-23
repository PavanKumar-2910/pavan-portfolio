import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaAws,
  FaGoogle,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa6";
import {
  SiCisco,
  SiC,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiEclipseide,
  SiJavascript
} from "react-icons/si";
import { MdEmail, MdCall, MdClose, MdCode, MdCloud, MdAnalytics, MdBuild } from "react-icons/md";
import "./index.css";


const roles = [
  "a Full Stack Developer",
  "a Tech Enthusiast",
  "an Innovation Enthusiast",
  "a Data Analyst",
  "an AI Explorer",
  "a Cloud Learner"
];

const skills = [
  {
    title: "Programming Languages",
    icon: <MdCode />,
    items: [
      { name: "C", icon: <SiC /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Web Development",
    icon: <FaReact />,
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java Servlets", icon: <FaJava /> }
    ]
  },
  {
    title: "Cloud & Database",
    icon: <MdCloud />,
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "SQL", icon: <MdAnalytics /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <MdBuild />,
    items: [
      { name: "VS Code", icon: <MdCode /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  },
  {
    title: "AI & Data",
    icon: <MdAnalytics />,
    items: [
      { name: "Machine Learning", icon: <MdAnalytics /> },
      { name: "Data Analysis", icon: <MdAnalytics /> },
      { name: "LLM Agents", icon: <MdAnalytics /> },
      { name: "Power BI Basics", icon: <MdAnalytics /> }
    ]
  }
];

const projects = [
  {
    title: "Credit Card Fraud Detection System",
    category: "AI",
    desc: "Developed a fraud detection model using Random Forest and XGBoost on around 590K transactions. Applied SMOTE for class imbalance, performed preprocessing, feature engineering, model evaluation, and achieved about 99% accuracy with strong AUC-ROC performance.",
    tech: ["Python", "Random Forest", "XGBoost", "SMOTE", "ML"]
  },
  {
    title: "Complaint Management System",
    category: "Full-Stack Web",
    desc: "A full-stack web application where students can register complaints and admins can view, manage, and update complaint status.",
    tech: ["React", "Java Servlets", "MySQL"]
  },
  {
    title: "Smart Waste Management System",
    category: "IoT",
    desc: "An IoT-based smart dustbin system that monitors waste level using ultrasonic sensors and alerts collection teams.",
    tech: ["Arduino", "Ultrasonic Sensor", "IoT"]
  },
  {
    title: "Research Assistant AI Agent",
    category: "AI",
    desc: "An AI-based research assistant using LLM agents and tools to answer research-based questions.",
    tech: ["Python", "LangChain", "Groq"]
  },
  {
    title: "HomeBites Website",
    category: "Frontend",
    desc: "A food-ordering website with menu, login, registration, cart, and validation features.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

const certificates = [
  {
    title: "Introduction to Java",
    org: "Coursera / LearnQuest",
    year: "2024",
    icon: <FaJava />,
    img: "/pavan-portfolio/certificates/java.png",
    pdf: "/pavan-portfolio/certificates/java.pdf"
  },
  {
    title: "Networking Basics",
    org: "Cisco Networking Academy",
    year: "2025",
    icon: <SiCisco />,
    img: "/pavan-portfolio/certificates/networking.png",
    pdf: "/pavan-portfolio/certificates/networking.pdf"
  },
  {
    title: "AWS Data Engineering Virtual Internship",
    org: "AWS Academy / EduSkills",
    year: "2025",
    icon: <FaAws />,
    img: "/pavan-portfolio/certificates/aws.png",
    pdf: "/pavan-portfolio/certificates/aws.pdf"
  },
  {
  title: "Android Developer Virtual Internship",
  org: "Google for Developers / EduSkills",
  year: "2025",
  icon: <FaGoogle />,
  img: "/pavan-portfolio/certificates/andriod.png",
  pdf: "/pavan-portfolio/certificates/andriod.pdf"
  },
  {
  title: "ServiceNow Virtual Internship",
  org: "ServiceNow / EduSkills",
  year: "2025",
  icon: <MdCloud />,
  img: "/pavan-portfolio/certificates/servicenow.png",
  pdf: "/pavan-portfolio/certificates/servicenow.pdf"
 }
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [theme, setTheme] = useState("dark");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className={`app ${theme === "light" ? "light-mode" : "dark-mode"}`}>
      <nav className="navbar">
        <a href="#home" className="logo">✦ PK ✦</a>

        <div className="navlinks">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#education">EDUCATION</a>
          <a href="#contact">CONTACT</a>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      <section id="home" className="hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="small-heading">HELLO, I AM</p>

          <h1 className="hero-name">
            Pavan <br /> Kumar
          </h1>

          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              className="hero-role"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
            >
              I am <span>{roles[roleIndex]}</span>
            </motion.h2>
          </AnimatePresence>

          <div className="hero-actions">
            <a href="/pavan-portfolio/Resume.pdf" target="_blank" className="main-btn">
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/pavan-kumar-d-m-92a432297/"
              target="_blank"
              className="link-btn"
            >
              Let&apos;s Connect →
            </a>
          </div>

          <a href="#projects" className="work-btn">
            View My Work 💼
          </a>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src="/pavan-portfolio/profile.png" alt="Pavan Kumar" />
        </motion.div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I am a Computer Science Engineering student passionate about full-stack development,
            cloud computing, AI, data analytics, and smart IoT-based solutions. I enjoy building
            practical projects that solve real-world problems and improve my technical skills.
          </p>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-showcase">
          {skills.map((group, index) => (
            <motion.div
              className="skill-box"
              key={group.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="skill-box-head">
                <span>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-items">
                {group.items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span>{skill.icon}</span>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-grid">
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
          >
            <h3>AWS Data Engineering Virtual Internship</h3>
            <h4>AWS Academy / EduSkills</h4>
            <h5>Apr 2025 - Jun 2025</h5>
            <p>
              Completed a 10-week virtual internship focused on AWS cloud services,
              data engineering workflows, data processing, and cloud-based solutions.
            </p>
          </motion.div>

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
          >
            <h3>Android Developer Virtual Internship</h3>
            <h4>Google for Developers / EduSkills</h4>
            <h5>Oct 2025 - Dec 2025</h5>
            <p>
              Completed a 10-week virtual internship focused on Android development,
              mobile application fundamentals, and developer tools.
            </p>
          </motion.div>

          <motion.div
  className="experience-card"
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{ y: -8 }}
  viewport={{ once: true }}
>
  <h3>ServiceNow Virtual Internship Program </h3>
  <h4>ServiceNow / SmartBridge</h4>
  <h5>May 2026- Jun 2026</h5>
  <p>
    Completed a one-month virtual internship focused on ServiceNow platform
    fundamentals, cloud-based workflows, automation concepts, and enterprise
    service management practices.
  </p>
</motion.div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>

        <div className="filter-buttons">
          {["All Projects", "Full-Stack Web", "AI", "IoT", "Frontend"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active-filter" : ""}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
            >
              <div className="project-icon">▣</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a href="#" className="explore-link">Explore →</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-grid">
          <motion.div className="edu-card" whileHover={{ y: -8 }}>
            <div className="edu-icon">🎓</div>
            <h3>Bachelor of Technology</h3>
            <h4>GITAM, Bengaluru</h4>
            <p>2023 - Present</p>
            <p>Computer Science & Engineering</p>
          </motion.div>

          <motion.div className="edu-card" whileHover={{ y: -8 }}>
            <div className="edu-icon">📘</div>
            <h3>Pre-University Education</h3>
            <h4>Sri Narayana PU College</h4>
            <p>2021 - 2023</p>
            <p>Science Stream (PCMB)</p>
          </motion.div>

          {certificates.map((cert) => (
  <motion.div
    className="certificate-card"
    key={cert.title}
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={() => window.open(cert.pdf, "_blank")}
  >
    <div className="cert-content">

      <div className="brand-icon">
        {cert.icon}
      </div>

      <div className="cert-year">
        {cert.year}
      </div>

      <h3>{cert.title}</h3>

      <p>{cert.org}</p>

      <span className="view-cert">
        Click to view certificate
      </span>

    </div>
  </motion.div>
))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="section-title">Let&apos;s Connect</h2>

        <p className="contact-intro">
          I am always interested in hearing about new projects, opportunities,
          and creative ideas. Let&apos;s create something amazing together!
        </p>

        <div className="contact-grid">
          <a href="mailto:pavankumardm29@gmail.com" className="contact-card">
            <span><MdEmail /></span>
            <div>
              <h3>Email</h3>
              <p>pavankumardm29@gmail.com</p>
            </div>
          </a>

          

          <a
            href="https://www.linkedin.com/in/pavan-kumar-d-m-92a432297/"
            target="_blank"
            className="contact-card"
          >
            <span><FaLinkedinIn /></span>
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>

          <a href="https://github.com/PavanKumar-2910" target="_blank" className="contact-card">
            <span><FaGithub /></span>
            <div>
              <h3>GitHub</h3>
              <p>Check my projects</p>
            </div>
          </a>

          
        </div>

        <a href="/pavan-portfolio/Resume.pdf" target="_blank" className="resume-download">
          📄 View Resume
        </a>
      </section>

      <a href="#home" className="top-btn">↑</a>

      <footer>
        © 2026 Pavan Kumar | Built with React
      </footer>
    </div>
  );
}

export default App;	