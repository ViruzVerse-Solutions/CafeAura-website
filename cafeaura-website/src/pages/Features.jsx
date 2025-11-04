import React, { useEffect } from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import queueImg from '../assets/queue.png';
import digitalImg from '../assets/digital.png';
import dashboardImg from '../assets/dashboard.png';
import billingImg from '../assets/autobilling.png';
import demoVideo from '../assets/demo.mp4';


const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false }); 
    window.addEventListener("scroll",() => AOS.refresh());
  }, []);

  return (
    <div className="features-container" id="features">
      {/* --- ENHANCED HERO SECTION (for Features Page) --- */}
<section className="hero-section" id="features-hero">
  <motion.div
    className="hero-inner"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="hero-text">
      <h1 className="hero-title">Empowering Smarter Campus Dining</h1>
      <p className="hero-subtitle">
        CafeAura revolutionizes campus canteens — eliminating queues, enabling
        quick digital payments, and providing real-time analytics for students
        and admins alike.
      </p>
      <div className="hero-points-grid">
        <div className="hero-point">
          <span className="emoji">⚡</span>
          <span>Solves queue & manual order issues</span>
        </div>
        <div className="hero-point">
          <span className="emoji">🎓</span>
          <span>Students order anywhere & track live</span>
        </div>
        <div className="hero-point">
          <span className="emoji">💳</span>
          <span>Secure UPI & digital payments</span>
        </div>
        <div className="hero-point">
          <span className="emoji">📊</span>
          <span>Automated reports & performance insights</span>
        </div>
      </div>
    </div>

  </motion.div>
  <section className="features-container"> ... </section>
{/* 🎬 Product Demo Video Section */}
<section className="video-section" data-aos="fade-up">
  <div className="video-container">
    <video
      className="feature-video"
      autoPlay
      loop
      muted
      playsInline
      controls  // ✅ shows sound and play buttons
    >
      <source src={demoVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>



<section className="features-container"> ... </section>

</section>

      <div className="features-header" data-aos="fade-down">
      
      
      </div>

      {/* --- STUDENT BENEFITS --- */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Student Benefits</h2>
        <p className="section-subtitle">Designed for speed, convenience, and campus comfort.</p>
        <div className="benefits-grid">
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Campus-wide Ordering</h3>
            <p>Order your favorite meals from anywhere on campus effortlessly.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Real-time Tracking</h3>
            <p>Track your order progress live and collect with a simple QR scan.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Secure Digital Payments</h3>
            <p>Enjoy fast and safe payments via integrated UPI and card options.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Order History</h3>
            <p>Access your complete order history anytime for easy tracking.</p>
          </motion.div>
        </div>
      </section>

      {/* --- MANAGEMENT BENEFITS --- */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Management Benefits</h2>
        <p className="section-subtitle">Empowering canteen operations with automation and insights.</p>
        <div className="benefits-grid">
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Crowd Management</h3>
            <p>Reduce congestion with streamlined digital order handling.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Automated Systems</h3>
            <p>Automatic billing, order logs, and performance reports at your fingertips.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Data Analytics</h3>
            <p>Visual dashboards that highlight trends and sales performance.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.03 }}>
            <h3>Resource Optimization</h3>
            <p>Better inventory control and reduced waste with demand insights.</p>
          </motion.div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
     <section className="comparison-section" data-aos="fade-up">
  <h2>CafeAura vs Traditional System</h2>
  <p className="section-subtitle">
    Discover how CafeAura transforms your cafeteria with automation, analytics, and convenience.
  </p>

  <div className="comparison-grid">
    <div className="comparison-card positive">
      <h3>With CafeAura</h3>
      <ul>
        <li><strong>☕ Digital Ordering:</strong> Order anytime, anywhere on campus.</li>
        <li><strong>💳 Online Payments:</strong> Secure and fast UPI or card transactions.</li>
        <li><strong>📊 Smart Dashboard:</strong> Real-time analytics and insights.</li>
        <li><strong>📦 Inventory Tracking:</strong> Automatic stock updates and reporting.</li>
        <li><strong>🧾 Automated Billing:</strong> One-click invoicing and transparency.</li>
      </ul>
    </div>

    <div className="comparison-card negative">
      <h3>Without CafeAura</h3>
      <ul>
        <li><strong>🕒 Manual Queues:</strong> Long waiting times during peak hours.</li>
        <li><strong>💰 Cash Payments:</strong> Risk of handling and slow transactions.</li>
        <li><strong>📉 No Insights:</strong> Lack of sales and performance data.</li>
        <li><strong>📋 Manual Inventory:</strong> Error-prone and time-consuming tracking.</li>
        <li><strong>📠 Paper Billing:</strong> Hard to maintain and analyze.</li>
      </ul>
    </div>
  </div>


      </section>
    </div>
  );
};

export default Features;
