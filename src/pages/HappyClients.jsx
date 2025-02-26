import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HappyClients = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="happy-clients" className="py-5 bg-light">
            <div className="container">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-5"
                >
                    <h2 className="text-center fw-bold" style={{ fontFamily: "'Comic Sans MS', sans-serif", fontSize: "1.5rem", color: "#FF6347", textShadow:" 4px 4px 0px #ffd700" }}>
                        Happy Clients
                    </h2>
                    <p className="text-muted text-center" style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
                        We take pride in our work, and our numbers speak for themselves.
                    </p>
                </motion.div>

                {/* Statistics Cards */}
                <div className="row" ref={ref}>
                    {[
                        { icon: "bi-people", title: "Clients Served", count: 500, color: "warning" },
                        { icon: "bi-clock", title: "Hours of Work", count: 2000, color: "info" },
                        { icon: "bi-graph-up", title: "Projects Completed", count: 100, color: "danger" }
                    ].map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <motion.div
                                className="card text-center shadow-lg border-0 rounded-5 p-4 d-flex flex-column align-items-center"
                                whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 10px 35px rgba(0, 0, 0, 0.1)" }}
                                transition={{ type: "spring", stiffness: 100 }}
                                style={{
                                    backgroundColor: "#F7D6E0",
                                    borderRadius: "15px",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                {/* Icon Wrapper */}
                                <div className={`icon-wrapper rounded-circle mx-auto mb-4 bg-${item.color} text-white p-4 shadow`} style={{ transform: "rotate(10deg)" }}>
                                    <i className={`bi ${item.icon} display-4`} style={{ fontSize: "4rem", transform: "scale(1.2)" }}></i>
                                </div>

                                {/* Text Content */}
                                <h3 className="card-title" style={{ fontFamily: "'Comic Sans MS', sans-serif", color: "#FF6347" }}>
                                    {item.title}
                                </h3>
                                <p className={`card-text display-5 fw-bold text-${item.color}`} style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
                                    {inView && <CountUp start={0} end={item.count} duration={3} delay={0.5} />}+
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HappyClients;
