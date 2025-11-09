import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Ballpit from '../components/Ballpit'
import stickerBg from '../assets/sticker.png'
import RotatingText from '../components/RotatingText'
import demoVideo from '../assets/demo.mp4'

const Home = () => {
  const [ballCount, setBallCount] = useState(75)

  useEffect(() => {
    const updateBallCount = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setBallCount(20) // Small mobile
      } else if (width <= 768) {
        setBallCount(35) // Mobile
      } else if (width <= 968) {
        setBallCount(50) // Tablet
      } else {
        setBallCount(75) // Desktop
      }
    }

    updateBallCount()
    window.addEventListener('resize', updateBallCount)
    return () => window.removeEventListener('resize', updateBallCount)
  }, [])

  const scrollToVideo = () => {
    document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const el = document.getElementById('features')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
        <div className="hero-container">
        <div 
          className="sticker-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${stickerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1
          }}
        />
        <section className="home-hero">
          <h1 className="home-title">Cafe <span>Aura</span></h1>
          <p className="home-tagline">Order food from your college cafeteria digitally—skip the queue.</p> 
          <p className="home-rotator">
            
            <RotatingText
              texts={[
                'Ordering',
                'Digital Menu',
                'Cashless Payments',
                'Preorder',
                'No More Waiting In Line',
                'Track Your Order',
              ]}
              mainClassName="inline-flex items-center justify-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.001}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 26, stiffness: 500 }}
              rotationInterval={1500}
            />
          </p>
          <div className="hero-buttons">
            <button className="btn-explore" onClick={scrollToFeatures} type="button">
              <span>Explore the Features</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link className="btn-demo" to="/demo">
              <span>Try Demo</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4L10 16M4 10L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </section>
        <button className="scroll-arrow" onClick={scrollToVideo} aria-label="Scroll to video">
          <div className="scroll-arrow-content">
            <span className="scroll-text">Watch Our Video</span>
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
        
        <div style={{ position: 'relative', zIndex: 2, height: '100vh', width: '100vw'}}>
          <Ballpit
              count={ballCount}
              gravity={0}
              friction={1}
              wallBounce={1}
              followCursor={false}
              colors={[0x6b4e3d, 0xc49a6c, 0xe6c7b2, 0xf8f5f2, 0x2e2e2e]}
          />
        </div>
        </div>
        <section className="video-section">
          <div className="video-container">
            
            <div className="video-wrapper">
              <video
                className="video-player"
                src={demoVideo}
                autoPlay
                loop
                muted
                controls
                playsInline
                title="Food Sample Video"
              ></video>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home;
