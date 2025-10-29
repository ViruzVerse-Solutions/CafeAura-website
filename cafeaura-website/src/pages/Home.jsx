import React from 'react'
import './Home.css'
import Ballpit from '../components/Ballpit'
import stickerBg from '../assets/sticker.png'

const Home = () => {
  return (
    <div>
        <div style={{position: 'relative', overflow: 'hidden', minHeight: '100vh', maxHeight: '100vh', width: '100vw', backgroundcolor: 'var(--backgroungcolor)' }}>
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
        </section>
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
        
    </div>
  )
}

export default Home;
