import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faUsers,
    faUserTie,
    faComments,
    faCode,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/comic-neue";

const styles = {
    skillSection: {
        backgroundColor: "#f7d794",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        fontFamily: "'Comic Neue', cursive",
    },
    skillCard: {
        backgroundColor: "#ffda79",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        border: "4px solid #ffaf40",
    },
    progressContainer: {
        height: "12px",
        borderRadius: "20px",
        backgroundColor: "#fff",
        border: "2px solid #ffaf40",
    },
    progressBar: {
        borderRadius: "20px",
        backgroundColor: "#ff5e57",
    },
};

const skills = [
    { icon: faGlobe, title: "Web Design", percentage: 85 },
    { icon: faUsers, title: "Team Work", percentage: 90 },
    { icon: faUserTie, title: "Team Leadership", percentage: 85 },
    { icon: faComments, title: "Communication", percentage: 90 },
    { icon: faCode, title: "Front-End Development", percentage: 75 },
    { icon: faServer, title: "Backend Development", percentage: 80 },
];

const SkillCard = ({ icon, title, percentage }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2, boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.3)" }}
        className="col-md-5 col-lg-5 d-flex align-items-stretch mb-4 mx-auto text-center"
        style={styles.skillCard}
    >
        <div className="d-flex flex-column w-100">
            <div className="d-flex align-items-center justify-content-center mb-3">
                <FontAwesomeIcon icon={icon} className="me-3 text-danger" size="2x" />
                <h5 className="fw-bold">{title}</h5>
            </div>
            <div className="progress mx-auto w-75" style={styles.progressContainer}>
                <motion.div
                    className="progress-bar"
                    style={{ width: `${percentage}%`, ...styles.progressBar }}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </div>
        </div>
    </motion.div>
);

const SkillDisplay = () => {
    return (
        <div style={styles.skillSection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h5 className="fw-bold text-danger">MY SKILLS</h5>
                    <h2 className="my-3 fw-bold">Level Up Your Skills in a Fun Way!</h2>
                    <p className="text-dark">
                        Learning should be enjoyable! Develop new abilities and stand out in a creative way.
                    </p>
                </motion.div>

                <div className="row justify-content-center mt-5">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillDisplay;