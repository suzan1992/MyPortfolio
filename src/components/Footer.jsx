import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import React, { useRef,useState } from 'react';


const Footer = () => {
    const form = useRef();
    const service_id = import.meta.env.VITE_SERVICE_ID
    const template_id = import.meta.env.VITE_TEMPLATE_ID
    const public_id = import.meta.env.VITE_PUBLIC_ID
    const [alert, setAlert] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_id,
      })
      .then(
        () => {
            setAlert({ type: "success", message: "Message sent successfully!" });
  
            // Hide alert after 3 seconds
            setTimeout(() => {
              setAlert(null);
            }, 3000);
          },
        (error) => {
            setAlert({ type: "danger", message: "Failed to send message!" });

            // Hide alert after 3 seconds
            setTimeout(() => {
              setAlert(null);
            }, 3000);
        },
      );
  };
    return (
        <motion.footer
            className="site-footer mt-auto py-5"
            id="footer-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
                backgroundColor: "#ffec99", // Soft, pastel yellow background
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                borderTop: "5px solid #ff6347", // Bold red border on top
                borderRadius: "20px", // Rounded corners for a cartoonish feel
            }}
        >
            
            <div className="container">
            {alert && (
        <div
          className={`alert alert-${alert.type} text-center fade show`}
          role="alert"
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "300px",
            zIndex: 9999,
          }}
        >
          {alert.message}
        </div>
      )}
                <div className="row align-items-center">
                    {/* Left Section - Contact Info */}
                    <div className="col-lg-6 site-footer__left text-center text-lg-start mb-4 mb-lg-0">
                        <div className="d-flex flex-column gap-3">
                            {[
                                { icon: "bi-telephone-fill", text: "Contact", link: "tel:+9779865534679", value: "+(977) 9865534679" },
                                { icon: "bi-envelope-fill", text: "Email", link: "mailto:suzanshrestha678@gmail.com", value: "suzanshrestha678@gmail.com" },
                                { icon: "bi-geo-alt-fill", text: "Location", link: "https://www.google.com/maps", value: "Maitidevi-29, Kathmandu" }
                            ].map((item, index) => (
                                <motion.div key={index} className="d-flex align-items-center gap-2"
                                    whileHover={{ scale: 1.2, rotate: 5 }} // Cartoon-like movement
                                    style={{ transition: "transform 0.2s" }}
                                >
                                    <i className={`bi ${item.icon} text-danger fs-4`} style={{ fontSize: "2rem" }}></i>
                                    <span className="fw-bold text-danger">{item.text}:</span>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                                        {item.value}
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-4">
                            <h5 className="fw-bold text-danger" style={{ fontSize: "1.5rem" }}>Follow Us</h5>
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                                {[
                                    { icon: "bi-facebook", link: "https://www.facebook.com/LADecks/" },
                                    { icon: "bi-instagram", link: "https://www.instagram.com/ladecks/" },
                                    { icon: "bi-github", link: "https://github.com/yourgithubprofile" },
                                    { icon: "bi-linkedin", link: "https://www.linkedin.com/in/yourlinkedinprofile" }
                                ].map((social, index) => (
                                    <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                                        className="text-danger fs-4"
                                        whileHover={{ scale: 1.5, rotate: 15 }} // Fun cartoon-style hover
                                    >
                                        <i className={`bi ${social.icon}`} style={{ fontSize: "2rem" }}></i>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="col-lg-6">
                        <div className="bg-light text-dark p-4 rounded shadow-lg" style={{ borderRadius: "15px" }}>
                            <motion.h2 className="text-center mb-3 fw-bold text-danger" whileHover={{ scale: 1.1 }}>
                                Contact Us
                            </motion.h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label className="fw-bold text-danger" style={{ fontSize: "1.1rem" }}>
                                        <i className="bi bi-person-fill me-2"></i> Full Name
                                    </label>
                                    <input type="text" className="form-control" id="fullName" name="user_name" placeholder="Enter your full name" required />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold text-danger" style={{ fontSize: "1.1rem" }}>
                                        <i className="bi bi-envelope-fill me-2"></i> Email Address
                                    </label>
                                    <input type="email" className="form-control" id="email" name="user_email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="fw-bold text-danger" style={{ fontSize: "1.1rem" }}>
                                        <i className="bi bi-chat-fill me-2"></i> Message
                                    </label>
                                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Your message" required></textarea>
                                </div>
                                <motion.button type="submit" value = "Submit" className="btn btn-danger w-100 fw-bold" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                    Submit Form
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4">
                    <motion.p className="m-0 text-danger" whileHover={{ scale: 1.1 }}>
                        © 2024 Sujan Shrestha. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
