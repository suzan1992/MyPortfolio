// Contact.jsx
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending the data to a backend API
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out!");
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    };

    return (
        <div className="contact-container" style={{ padding: "20px" }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label htmlFor="name" style={{ display: "block" }}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label htmlFor="email" style={{ display: "block" }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label htmlFor="message" style={{ display: "block" }}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                </div>

                <button type="submit" style={{ padding: "10px 20px", background: "#333", color: "#fff" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
