import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/global.css";

const HeroSection = () => {
    useEffect(() => {
        const canvas = document.getElementById("particleCanvas");
        const ctx = canvas.getContext("2d");

        // Resize Canvas for All Devices
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.7;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let stars = [];
        const numStars = 150;

        function drawStar(x, y, radius, spikes = 5) {
            let rotation = Math.PI / 2 * 3;
            let step = Math.PI / spikes;

            ctx.beginPath();
            ctx.moveTo(x, y - radius);

            for (let i = 0; i < spikes; i++) {
                let x1 = x + Math.cos(rotation) * radius;
                let y1 = y - Math.sin(rotation) * radius;
                ctx.lineTo(x1, y1);
                rotation += step;

                x1 = x + Math.cos(rotation) * (radius / 2);
                y1 = y - Math.sin(rotation) * (radius / 2);
                ctx.lineTo(x1, y1);
                rotation += step;
            }
            ctx.lineTo(x, y - radius);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.shadowColor = "#FFD700";
            ctx.shadowBlur = 10; // Glow effect for cartoon look
            ctx.fill();
        }

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
            });
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                drawStar(star.x, star.y, star.radius);

                star.x += star.speedX;
                star.y += star.speedY;

                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });

            requestAnimationFrame(animateStars);
        }

        animateStars();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <section className="hero-section">
            {/* Canvas for Stars */}
            <canvas id="particleCanvas"></canvas>

            {/* Hero Content */}
            <div className="container text-center">
                <h1 className="hero-title">
                    <span className="cartoon-text">I'm a </span>
                    <TypeAnimation
                        sequence={[
                            "Web Developer", 1500,
                            "Frontend Developer", 1500,
                            "Backend Developer", 1500,
                            "Full-Stack Developer", 1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="animated-text"
                    />
                </h1>
                <a href="#footer-section" className="btn btn-primary mt-3 cartoon-btn">Let's Connect</a>
            </div>
        </section>
    );
};

export default HeroSection;
