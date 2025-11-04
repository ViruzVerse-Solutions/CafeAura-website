import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Ballpit from '../components/Ballpit'
import stickerBg from '../assets/sticker.png'
import RotatingText from '../components/RotatingText'

const Home = () => {
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
        <div className="hero-container" style={{position: 'relative', overflow: 'hidden', minHeight: '100vh', maxHeight: '100vh', width: '100vw', backgroundcolor: 'var(--backgroungcolor)' }}>
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
          <p className="home-rotator" style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem', overflow: 'hidden', height: '3rem', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)', textShadow: '0 2px 5px rgba(255, 255, 255, 0.67)'}}>
            
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
              count={75}
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
              <iframe
                className="video-player"
                src="https://www.youtube.com/embed/V5w1OGknhlc?autoplay=1&mute=1&loop=1&playlist=V5w1OGknhlc&controls=1"
                title="Food Sample Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home;
