import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoHtml5, BiLogoCss3, BiLogoJavascript,
  BiLogoReact, BiLogoPhp, BiLogoPython, BiLogoWordpress
} from "react-icons/bi";
import "../styles/global.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5 cartoon-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-sm-12"> {/* Responsive Column */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="glass-card cartoon-card p-4"
              style={{ borderRadius: "15px", textAlign: "center" }}
            >
              {/* Animated Heading */}
              <h2
                className="about-title mb-3 cartoon-title text-center"
                style={{
                  textShadow: "3px 3px 5px #fff",
                  color: "rgb(255, 99, 71)",
                  fontSize: "clamp(1.5rem, 2vw, 2.5rem)", // Responsive font size
                }}
              >
                <motion.span
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
                >
                  ✨ About Me ✨
                </motion.span>
              </h2>

              {/* Short Introduction */}
              <p className="about-text" style={{ fontSize: "clamp(1rem, 1.2vw, 1.4rem)" }}>
                Hey there! 👋 I'm a passionate <strong>Full-Stack Developer</strong> who loves crafting user-friendly and visually appealing web experiences.
                With <strong>6+ years</strong> of experience, I build modern, high-performing websites that <strong>blend technology with creativity</strong>.
              </p>

              {/* Tech Stack Section */}
              <div className="tech-section">
                <h4 className="mt-4">🔹 Tech Stack</h4>
                <div className="tech-icons d-flex justify-content-center flex-wrap mt-2">
                  {[
                    { icon: BiLogoHtml5, title: "HTML5", color: "#E44D26" }, // HTML5 color
                    { icon: BiLogoCss3, title: "CSS3", color: "#264DE4" }, // CSS3 color
                    { icon: BiLogoJavascript, title: "JavaScript", color: "#F7DF1E" }, // JavaScript color
                    { icon: BiLogoReact, title: "React", color: "#61DAFB" } // React color
                  ].map(({ icon: Icon, title, color }, index) => (
                    <motion.span key={index} whileHover={{ scale: 1.2 }} className="m-2">
                      <Icon size={35} title={title} style={{ color }} /> {/* Apply brand color */}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend & CMS Section */}
              <div className="backend-section">
                <h4 className="mt-4">🔹 Backend & CMS</h4>
                <div className="tech-icons d-flex justify-content-center flex-wrap mt-2">
                  {[
                    { icon: BiLogoPhp, title: "PHP", color: "#777BB4" }, // PHP color
                    { icon: BiLogoPython, title: "Python", color: "#3776AB" }, // Python color
                    { icon: BiLogoWordpress, title: "WordPress", color: "#21759B" } // WordPress color
                  ].map(({ icon: Icon, title, color }, index) => (
                    <motion.span key={index} whileHover={{ scale: 1.2 }} className="m-2">
                      <Icon size={35} title={title} style={{ color }} /> {/* Apply brand color */}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Work Philosophy */}
              <p className="about-text mt-4" style={{ fontSize: "clamp(1rem, 1.2vw, 1.4rem)" }}>
                I believe that great design is more than aesthetics—it's about <strong>functionality, performance, and user experience</strong>.
                Whether it’s <strong>developing custom WordPress themes</strong>, building <strong>React applications</strong>, or <strong>optimizing performance</strong>,
                I ensure every project meets <strong>industry standards</strong> while looking awesome! 🎨🚀
              </p>

              {/* Fun Fact */}
              <p className="about-text fun-fact mt-3" style={{ fontSize: "clamp(1rem, 1.2vw, 1.4rem)" }}>
                🎸 <strong>Fun Fact:</strong> When I’m not coding, you’ll find me <strong>hiking, exploring new places</strong>, experimenting with <strong>motion graphics</strong>, or exploring <strong>new tech trends</strong>!
              </p>

              {/* Call to Action */}
              <a
                href="#footer-section"
                className="btn btn-primary mt-4 cartoon-btn"
                style={{
                  width: "100%", // Full width on mobile
                  maxWidth: "250px", // Limits width on larger screens
                  fontSize: "clamp(1rem, 1.2vw, 1.4rem)",
                }}
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;