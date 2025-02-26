import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
    {
        icon: "bi bi-code-slash",
        title: "Development",
        list: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
    },
    {
        icon: "bi bi-brush",
        title: "Illustration",
        list: ["Character Design", "Icon Set", "Illustration Guide", "Motion Graphic"],
    },
    {
        icon: "bi bi-vector-pen",
        title: "Graphic Design",
        list: ["Logo Design", "Banner Design", "Brochure Design", "Advertising Materials"],
    },
    {
        icon: "bi bi-palette",
        title: "UI/UX Design",
        list: ["Landing Pages", "User Flow", "Wireframing", "Prototyping", "Mobile App Design"],
    },
];

const ServiceDisplay = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="service-display-section py-5 position-relative"
            style={{ backgroundColor: "#ffecb3", fontFamily: 'Comic Neue, cursive' }}
        >
            <div className="container text-center">
                <span className="badge bg-warning text-dark fs-6" style={{ borderRadius: "12px" }}>BEST SERVICE</span>
                <h2 className="fw-bold my-3" style={{ color: "#e65100", textShadow: "2px 2px 0px #fff" }}>What Can I Do For You</h2>
                <p className="text-dark-50 mx-auto" style={{ maxWidth: "500px" }}>
                    Providing top-notch services with creativity and precision to bring your ideas to life.
                </p>
            </div>

            <div className="container mt-5">
                <div className="row g-4 justify-content-center">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="service-box text-center p-4 bg-white"
                                style={{
                                    border: "3px solid #ff9800",
                                    borderRadius: "18px",
                                    boxShadow: "6px 6px 0px #ff5722",
                                    transition: "all 0.3s ease-in-out",
                                    transform: "rotate(-1deg)",
                                }}
                            >
                                <div className="icon mb-3">
                                    <i className={`${service.icon}`} style={{ fontSize: "3rem", color: "#ff5722", textShadow: "2px 2px 0px #fff" }}></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ color: "#d84315" }}>{service.title}</h4>
                                <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "200px" }}>
                                    {service.list.map((item, idx) => (
                                        <li key={idx} className="d-flex align-items-center mb-2" style={{ color: "#5d4037" }}>
                                            <i className="bi bi-check-circle-fill text-success me-2"></i> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDisplay;