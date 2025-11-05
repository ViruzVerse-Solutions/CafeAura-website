import React, { useEffect, useRef } from 'react'
import demo1 from '../assets/demo1_img.png'
import demo2 from '../assets/demo2_img.png'
import demo3 from '../assets/demo3_img.png'

const Demo = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const elements = sectionsRef.current.filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const sectionStyle = {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 32
  }
  const imgStyle = {
    width: 360,
    maxWidth: '100%',
    borderRadius: 12,
    display: 'block',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
  }
  const textStyle = { flex: '1 1 320px' }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f8f5f2 0%, #f3eee8 100%)', paddingTop: '90px' }}>
      <style>{`
        .demo-container { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }
        .demo-title { margin: 0 0 8px 0; font-size: 50px; font-weight: 800; color: #6b4e3d; }
        .demo-subtitle { margin: 0 0 28px 0; color: #6b6b6b; }
        .demo-row { opacity: 0; transform: translateY(24px); transition: opacity .55s ease, transform .55s ease; }
        .demo-row.visible { opacity: 1; transform: translateY(0); }
        @media (min-width: 900px) { .demo-row.reverse { flex-direction: row-reverse; } }
        .demo-chip { display:inline-block; padding:4px 10px; border-radius:999px; background:#fff3e0; color:#a15b00; font-weight:600; font-size:12px; border:1px solid #ffd8a8; }
        .image-wrap { position: relative; border-radius:12px; overflow:hidden; transform: translateZ(0); }
        .image-wrap img { display:block; width:100%; height:auto; transition: transform .4s ease; }
        .image-wrap:hover img { transform: scale(1.04); }
        .view-full { margin-top:10px; display:inline-flex; align-items:center; gap:6px; color:#6b4e3d; font-weight:700; text-decoration:none; }
        .view-full:hover { text-decoration:underline; }
      `}</style>
      <div className="demo-container" style={{textAlign: 'center'}}>
        <h2 className="demo-title"><span style={{fontFamily: 'Abril Fatface'}}>Cafe<span style={{fontFamily: 'Great Vibes', color: '#e5a051'}}>Aura</span></span> Demo</h2>
        <p className="demo-subtitle">Modern, clean previews with subtle motion.</p>

        <section
          className="demo-row"
          ref={el => (sectionsRef.current[0] = el)}
          style={sectionStyle}
        >
          <div className="image-wrap" style={{ maxWidth: imgStyle.width }}>
            <img src={demo2} alt="Exclusive offers screen" style={imgStyle} />
          </div>
          <div style={textStyle}>
            <span className="demo-chip">Offers</span>
            <h3 style={{ margin: '8px 0 0 0', fontSize: 22 }}>Exclusive Offers</h3>
            <p style={{ marginTop: 8, color: '#444', lineHeight: 1.8 }}>
              Unlock limited-time discounts and combos curated for students and campus events.
            </p>
            
          </div>
        </section>

        <section
          className="demo-row reverse"
          ref={el => (sectionsRef.current[1] = el)}
          style={sectionStyle}
        >
          <div className="image-wrap" style={{ maxWidth: imgStyle.width }}>
            <img src={demo3} alt="Cart and checkout" style={imgStyle} />
          </div>
          <div style={textStyle}>
            <span className="demo-chip">Menu</span>
            <h3 style={{ margin: '8px 0 0 0', fontSize: 22 }}>Popular Menu & Categories</h3>
            <p style={{ marginTop: 8, color: '#444', lineHeight: 1.8 }}>
              Browse popular items quickly with clear pricing and categories to jump between sections.
            </p>
            
          </div>
        </section>

        <section
          className="demo-row"
          ref={el => (sectionsRef.current[2] = el)}
          style={sectionStyle}
        >
          <div className="image-wrap" style={{ maxWidth: imgStyle.width }}>
            <img src={demo1} alt="Menu screen" style={imgStyle} />
          </div>
          <div style={textStyle}>
            <span className="demo-chip">Cart</span>
            <h3 style={{ margin: '8px 0 0 0', fontSize: 22 }}>Cart & Fast Checkout</h3>
            <p style={{ marginTop: 8, color: '#444', lineHeight: 1.8 }}>
              Review your order, apply offers, and pay in seconds with a streamlined flow.
            </p>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Demo


