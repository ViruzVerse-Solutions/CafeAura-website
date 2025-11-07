import React, { useEffect, useRef } from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import demoVideo from '../assets/demo.mp4';
import VanillaTilt from 'vanilla-tilt';

// ✅ Lucide Icons
import {
  Zap,
  GraduationCap,
  CreditCard,
  BarChart3,
  Coffee,
  DollarSign,
  TrendingUp,
  Package,
  FileText,
  Timer,
  BarChart,
  ClipboardList,
  FileSpreadsheet,
} from 'lucide-react';

const Features = () => {
  const studentRefs = useRef([]);
  const managementRefs = useRef([]);

  useEffect(() => {
    // ✅ Initialize AOS for scroll-up & scroll-down animations
    AOS.init({
      duration: 900,
      once: false,
      mirror: true, // works on scroll up too
      offset: 120,
    });

    // ✅ Initialize VanillaTilt for 3D hover effect
    const initTilt = (refs) => {
      refs.forEach((el) => {
        if (el) {
          VanillaTilt.init(el, {
            max: 20,
            speed: 400,
            glare: true,
            'max-glare': 0.25,
            'glare-color': 'rgba(255, 255, 255, 0.25)',
          });
        }
      });
    };

    initTilt(studentRefs.current);
    initTilt(managementRefs.current);

    const handleScroll = () => AOS.refresh();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="features-container" id="features">
      {/* --- HERO SECTION --- */}
      <section className="hero-section" id="features-hero">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h1 className="hero-title" data-aos="fade-right">
              Empowering Smarter Campus Dining
            </h1>
            <p
              className="hero-subtitle"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              CafeAura revolutionizes campus canteens — eliminating queues,
              enabling quick digital payments, and providing real-time analytics
              for students and admins alike.
            </p>

            <div className="hero-points-grid">
              <motion.div className="hero-point" whileHover={{ scale: 1.05 }}>
                <Zap className="hero-icon" size={22} />
                <span>Solves queue & manual order issues</span>
              </motion.div>
              <motion.div className="hero-point" whileHover={{ scale: 1.05 }}>
                <GraduationCap className="hero-icon" size={22} />
                <span>Students order anywhere & track live</span>
              </motion.div>
              <motion.div className="hero-point" whileHover={{ scale: 1.05 }}>
                <CreditCard className="hero-icon" size={22} />
                <span>Secure UPI & digital payments</span>
              </motion.div>
              <motion.div className="hero-point" whileHover={{ scale: 1.05 }}>
                <BarChart3 className="hero-icon" size={22} />
                <span>Automated reports & performance insights</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🎬 PRODUCT DEMO VIDEO SECTION */}
      <section className="video-section" data-aos="fade-up">
        <div className="video-container">
          <video
            className="feature-video"
            autoPlay
            loop
            playsInline
            controls
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* --- STUDENT BENEFITS --- */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Student Benefits</h2>
        <p className="section-subtitle">
          Designed for speed, convenience, and campus comfort.
        </p>
        <div className="benefits-grid">
          {[
            { title: 'Campus-wide Ordering', text: 'Order your favorite meals from anywhere on campus effortlessly.' },
            { title: 'Real-time Tracking', text: 'Track your order progress live and collect with a simple QR scan.' },
            { title: 'Secure Digital Payments', text: 'Enjoy fast and safe payments via integrated UPI and card options.' },
            { title: 'Order History', text: 'Access your complete order history anytime for easy tracking.' },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="benefit-card tilt"
              ref={(el) => (studentRefs.current[i] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 10px 25px rgba(196, 154, 108, 0.3)',
              }}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MANAGEMENT BENEFITS --- */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Management Benefits</h2>
        <p className="section-subtitle">
          Empowering canteen operations with automation and insights.
        </p>
        <div className="benefits-grid">
          {[
            { title: 'Crowd Management', text: 'Reduce congestion with streamlined digital order handling.' },
            { title: 'Automated Systems', text: 'Automatic billing, order logs, and performance reports at your fingertips.' },
            { title: 'Data Analytics', text: 'Visual dashboards that highlight trends and sales performance.' },
            { title: 'Resource Optimization', text: 'Better inventory control and reduced waste with demand insights.' },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="benefit-card tilt"
              ref={(el) => (managementRefs.current[i] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 10px 25px rgba(196, 154, 108, 0.3)',
              }}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- COMPARISON TABLE (with icons) --- */}
      <section className="comparison-section" data-aos="fade-up">
        <h2>CafeAura vs Traditional System</h2>
        <p className="section-subtitle">
          Discover how CafeAura transforms your cafeteria with automation, analytics, and convenience.
        </p>

        <div className="comparison-grid">
          <div className="comparison-card positive">
            <h3>With CafeAura</h3>
            <ul>
              <li><Coffee className="table-icon" size={20}/> <strong>Digital Ordering:</strong> Order anytime, anywhere on campus.</li>
              <li><CreditCard className="table-icon" size={20}/> <strong>Online Payments:</strong> Secure and fast UPI or card transactions.</li>
              <li><TrendingUp className="table-icon" size={20}/> <strong>Smart Dashboard:</strong> Real-time analytics and insights.</li>
              <li><Package className="table-icon" size={20}/> <strong>Inventory Tracking:</strong> Automatic stock updates and reporting.</li>
              <li><FileText className="table-icon" size={20}/> <strong>Automated Billing:</strong> One-click invoicing and transparency.</li>
            </ul>
          </div>

          <div className="comparison-card negative">
            <h3>Without CafeAura</h3>
            <ul>
              <li><Timer className="table-icon" size={20}/> <strong>Manual Queues:</strong> Long waiting times during peak hours.</li>
              <li><DollarSign className="table-icon" size={20}/> <strong>Cash Payments:</strong> Risk of handling and slow transactions.</li>
              <li><BarChart className="table-icon" size={20}/> <strong>No Insights:</strong> Lack of sales and performance data.</li>
              <li><ClipboardList className="table-icon" size={20}/> <strong>Manual Inventory:</strong> Error-prone and time-consuming tracking.</li>
              <li><FileSpreadsheet className="table-icon" size={20}/> <strong>Paper Billing:</strong> Hard to maintain and analyze.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
