import React from "react";
import { motion } from "framer-motion";

// Testimonials data
const testimonials = [
    {
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."`,
        name: "John Doe",
        company: "Company Name 1",
        avatar: "images/images.jpeg",
    },
    {
        text: `"Integer sit amet justo vel lacus dapibus vehicula. Fusce ac elit fermentum, tristique est in, condimentum mi."`,
        name: "Jane Smith",
        company: "Company Name 2",
        avatar: "path_to_avatar2",
    },
    {
        text: `"Aenean vulputate ex vel urna tincidunt, non rhoncus leo sodales. Curabitur quis quam quis nisi tristique."`,
        name: "Emily Johnson",
        company: "Company Name 3",
        avatar: "path_to_avatar3",
    },
    {
        text: `"Sed finibus lectus eget risus sollicitudin, eget fermentum elit vehicula."`,
        name: "Michael Brown",
        company: "Company Name 4",
        avatar: "path_to_avatar4",
    },
    {
        text: `"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique velit eu ligula scelerisque, vel congue ligula vestibulum."`,
        name: "Sarah Johnson",
        company: "Company Name 5",
        avatar: "path_to_avatar5",
    },
    {
        text: `"Nunc fermentum dolor nec elit volutpat, a scelerisque purus scelerisque."`,
        name: "David Lee",
        company: "Company Name 6",
        avatar: "path_to_avatar6",
    },
];

const Testimonials = () => {
    return (
        <motion.section
            className="testimonials-section bg-light"
            id="testimonials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container py-5">
                <h2 className="text-center mb-5">Testimonials</h2>

                {/* Carousel for remaining testimonials */}
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {testimonials.slice(3).map((testimonial, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-4">
                                        <motion.div
                                            className="card border-0 shadow-sm cartoon-box"
                                            whileHover={{ scale: 1.05, rotate: 3 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="card-body">
                                                <p className="card-text">{testimonial.text}</p>
                                            </div>
                                            <div className="card-footer bg-white border-0">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={testimonial.avatar}
                                                        className="rounded-circle me-3"
                                                        width="50"
                                                        alt={`Testimonial Avatar ${index + 1}`}
                                                    />
                                                    <div>
                                                        <h6 className="mb-0">{testimonial.name}</h6>
                                                        <p className="text-muted mb-0">
                                                            {testimonial.company}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
