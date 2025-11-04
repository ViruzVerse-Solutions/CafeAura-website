import React, { useEffect, useRef } from "react";
import "./About.css";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { FaCookieBite, FaHandHoldingHeart, FaLeaf, FaRocket, FaSmile, FaUsers } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";

const About = () => {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 20,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section-about"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-bg"></div>
        <h1>ABOUT <span style={{fontFamily: 'Abril Fatface'}}>Cafe<span style={{fontFamily: 'Great Vibes', color: '#e5a051'}}>Aura</span></span></h1>

        <p>
          " Brewing happiness, one cup at a time ☕ — Inspired by the vibrant spirit
          of community cafes, CafeAura is your cozy corner for great coffee and
          good vibes  "
        </p>
      </motion.section>

      {/* 🎯 Mission Section */}
<motion.section
  className="mission-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="mission-header"
  >
    <h2>——— OUR MISSION & VALUES☕ ———</h2>
    </motion.div>

  <motion.div
    className="mission-icons"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {[
      { icon: <FaRocket />, title: "Innovation", text: "Brewing new cafe experiences." },
      { icon: <FaLeaf />, title: "Sustainability", text: "Caring for people & planet." },
      { icon: <FaSmile />, title: "Delight", text: "Every cup sparks a smile." },
      { icon: <FaCookieBite />, title: "Creativity", text: "Embrace creativity in unique connection" },
      { icon: <FaHandHoldingHeart />, title: "Quality", text: "Passionate about delivering exceptional coffee" },
      { icon: <FaCakeCandles />, title: "Community", text: "Building a Vibrant Community" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="icon-card tilt"
        ref={(el) => (tiltRefs.current[i] = el)}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
        whileHover={{
          scale: 1.08,
          y: -5,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <motion.div
          className="icon"
          whileHover={{
            rotate: [0, -10, 10, 0],
            color: "#c49a6c",
          }}
          transition={{ duration: 0.6 }}
        >
          {item.icon}
        </motion.div>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>
{/* Story Section */}
      <motion.section
        className="story-section"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>—— OUR STORY ——</h2>
        <p>
          CafeAura began with a simple dream — to create a space where everyone can
          unwind, work, and connect over aromatic brews and bites.It will start idea of change 
          the culture for future generation. Like Swiggy
          revolutionized delivery, we’re redefining how cafe culture fits into
          everyday life.
        </p>
      </motion.section>
      <center>
      <h3>| CAFEAURA JOURNEY |</h3></center>
      
      <img src="public/cafe journey.png" alt="CaféAura Journey Map" />


      {/* Team Section */}
      <motion.section
        className="team-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>———  MEET OUR TEAM  ———</h2>
        <p>
          Our team is a blend of dreamers, doers, and coffee lovers — united by a
          passion for crafting experiences that make you smile.
        </p>
        <div className="team-avatars tilt" ref={(el) => (tiltRefs.current[6] = el)}>
          <FaUsers className="team-icon" />
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="impact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>——  SOCIAL IMPACT  ——</h2>
        <p>
          From supporting local farmers to using biodegradable cups — CafeAura is
          committed to a greener, kinder planet.
        </p>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2> ——   JOIN OUR TEAM ☕  ——</h2>
        <p>Be part of a community that brews happiness and innovation every day.</p>
        <button className="">Explore Careers</button>
      </motion.section>
    </div>
  );
};

export default About;
