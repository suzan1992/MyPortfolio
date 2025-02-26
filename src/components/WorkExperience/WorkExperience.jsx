import React from "react";
import { motion } from "framer-motion";
import styles from "./WorkExperience.module.css";

// Experience Card Component Styled Like ServiceDisplay
const ExperienceCard = ({ experience }) => (
    <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`card ${styles.experienceCard}`}
        style={{
            border: "3px solid rgb(255, 152, 0)",
            borderRadius: "18px",
            overflow: "hidden",
            padding: "20px",
            background: "#fff",
            color: "#000",
            textAlign: "center",
            boxShadow: "rgb(255, 87, 34) 6px 6px 0px",
            transition: "all 0.3s ease-in-out",
            transform: "rotate(-1deg)",
        }}
    >
        <div className="card-body">
            <h4 className={styles.experienceTitle} style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(216, 67, 21)" }}>
                {experience.title}
            </h4>
            <h6 className="text-muted mb-2">
                <i className="bi bi-building"></i> {experience.company}
            </h6>
            <p className="text-muted">
                <i className="bi bi-calendar3"></i> {experience.dates}
            </p>
            <ul className="list-unstyled text-start px-3">
                {experience.description.map((desc, index) => (
                    <li key={index} className="d-flex align-items-start" style={{ fontSize: "1rem", color: "#555" }}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i> {desc}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

// Work Experience Section Matching ServiceDisplay Layout
const WorkExperience = () => {
    const experiences = [
        {
            title: "Mid-Level WordPress Developer",
            company: "SmartSites Nepal, Kathmandu",
            dates: "October 2021 - December 2022",
            description: [
                "Developed custom WordPress themes and plugins tailored to client specifications.",
                "Implemented responsive design principles for cross-device compatibility.",
                "Collaborated with design and UX/UI teams for optimal website functionality.",
                "Managed site migrations, updates, and troubleshooting technical issues.",
                "Provided technical support and training to clients on WordPress CMS.",
            ],
        },
        {
            title: "Junior WordPress Developer",
            company: "Chuchuro Firm, Kathmandu",
            dates: "March 2019 - June 2021",
            description: [
                "Assisted in WordPress website development from concept to deployment.",
                "Created and modified themes using HTML, CSS, JavaScript, and PHP.",
                "Tested and debugged websites for cross-browser and device compatibility.",
                "Brainstormed and executed innovative web solutions with the team.",
                "Updated and maintained existing WordPress sites regularly.",
            ],
        },
        {
            title: "Intern WordPress Developer",
            company: "Chuchuro Firm, Kathmandu",
            dates: "February 2016 - April 2018",
            description: [
                "Assisted senior developers in building and maintaining WordPress sites.",
                "Gained experience in theme customization, plugin integration, and SEO.",
                "Researched emerging WordPress trends and best practices.",
                "Participated in client meetings to understand project requirements.",
                "Contributed to team projects and improved coding skills.",
            ],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.workExp}
            style={{
                // background: "white",
                padding: "80px 0",
                borderRadius: "20px",
                position: "relative",
                color: "#000",
            }}
        >
            <div className={`container ${styles.container}`}>
                <h2
                    className={`text-center mb-3 ${styles.sectionTitle}`}
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "rgb(230, 81, 0)",
                        textShadow: "rgb(255, 255, 255) 2px 2px 0px",
                        textAlign: "center", // Ensures text is centered
                        width: "100%", // Makes sure the heading takes the full width
                    }}
                >
                    Work Experience
                </h2>

                {/* Description Section */}
                <p
                    className="text-center mb-4"
                    style={{
                        fontFamily:"Comic Sans MS,sans-serif",
                        fontSize: "1.2rem",
                        color: "#000",
                        maxWidth: "700px",
                        margin: "0 auto",
                        lineHeight: "1.6",
                    }}
                >
                    Over the years, I have worked in different roles as a **WordPress PHP Developer**, gaining experience
                    in both front-end and back-end technologies. I specialize in developing **custom themes, plugins, and
                    optimizing web performance** while ensuring a seamless user experience.
                </p>

                <div className="row justify-content-center">
                    {experiences.map((experience, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <ExperienceCard experience={experience} />
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
};

export default WorkExperience;
