// src/components/banner/Banner.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./banner.css";

function Banner({ title1, title2, text }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "../../../public/images/graduation.jpg",
    "../../../public/images/boy_news.jpg",
    "../../../public/images/news.jpg",
    "../../../public/images/graduation_2.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="banner-section" style={containerStyle} role="banner">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="banner-overlay"
        />
      </AnimatePresence>
      <div className="banner-content">
        <motion.div initial="initial" animate="animate" className="text-center">
          <motion.h1
            className="banner-title text-4xl md:text-6xl font-bold mb-4"
            {...fadeInUp}
          >
            {title1}
            <strong className="banner-subtitle block mt-4">
              <TypeAnimation
                sequence={[
                  title2,
                  2000,
                  "Discover Excellence",
                  2000,
                  "Shape the Future",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "0.8em",
                  display: "inline-block",
                  fontWeight: "400",
                }}
                repeat={Infinity}
              />
            </strong>
          </motion.h1>

          <motion.p
            className="banner-text text-lg md:text-xl mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>

          <motion.div
            className="banner-buttons"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link to="/about" className="explore-button">
              About University
            </Link>
            <Link to="/news" className="learn-more-button">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

Banner.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
