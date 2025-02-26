import React, { useState } from "react";
import {
    FaBars,
    FaHome,
    FaUserAlt,
    FaProjectDiagram,
    FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu on mobile devices
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Smooth scroll function
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <nav
            style={{
                background: "#FFD700", // Bright golden color
                padding: "10px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "15px",
            }}
        >
            {/* Logo Section */}
            <div
                style={{
                    flex: "0 0 30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontFamily: "'Pacifico', cursive",
                        color: "#ff6347",
                        fontSize: "2rem",
                        margin: 0,
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    Sujan Shrestha
                </h1>
            </div>

            {/* Mobile Menu Icon */}
            <div
                className="mobile-menu-icon"
                onClick={toggleMenu}
                style={{
                    display: "none",
                    background: "#ff6347",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                <FaBars size={30} color="#fff" />
            </div>

            {/* Navigation Menu */}
            <ul
                className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
                style={{
                    display: isMenuOpen ? "block" : "none",
                    listStyle: "none",
                    padding: "10px 0",
                    margin: 0,
                    textAlign: "center",
                    backgroundColor: "#FFD700",
                    position: "absolute",
                    top: "60px",
                    left: "0",
                    right: "0",
                    zIndex: "999",
                    borderRadius: "15px",
                }}
            >
                {[
                    { id: "home", label: "Home", icon: <FaHome /> },
                    { id: "about", label: "About", icon: <FaUserAlt /> },
                    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
                    { id: "footer-section", label: "Contact", icon: <FaEnvelope /> },
                ].map(({ id, label, icon }) => (
                    <li key={id} style={{ margin: "10px 0" }}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleScroll(e, id)}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                transition: "color 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <span style={{ color: "#ff6347" }}>{icon}</span>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Desktop Navigation */}
            <ul
                className="desktop-nav"
                style={{
                    display: "flex",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    justifyContent: "center",
                    flex: "0 0 70%",
                }}
            >
                {[
                    { id: "home", label: "Home", icon: <FaHome /> },
                    { id: "about", label: "About", icon: <FaUserAlt /> },
                    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
                    { id: "footer-section", label: "Contact", icon: <FaEnvelope /> },
                ].map(({ id, label, icon }) => (
                    <li key={id} style={{ margin: "0 20px", transform: "scale(1.1)" }}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleScroll(e, id)}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                transition: "color 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <span style={{ color: "#ff6347" }}>{icon}</span>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Media Queries for Small Devices */}
            <style>
                {`
          @media (max-width: 768px) {
            .mobile-menu-icon {
              display: block !important;
            }
            .desktop-nav {
              display: none !important;
            }
          }
        `}
            </style>
        </nav>
    );
};

export default Navbar;
