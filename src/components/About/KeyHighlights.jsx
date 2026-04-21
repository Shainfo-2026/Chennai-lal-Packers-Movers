import React, { useEffect, useRef } from "react";


export default function KeyHighlights() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-highlights-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-highlights{
  padding:0px 6vw;
  // background:white;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* ===== HEADER ===== */
.sps-highlights-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-highlights-visible .sps-highlights-head{
  opacity:1;
  transform:translateY(0);
}

.sps-highlights-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
  margin-bottom:12px;
}

.sps-highlights-head p{
  font-size:17px;
  color:#486C85;
}

/* ===== GRID ===== */
.sps-highlights-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}

/* ===== CARD ===== */
.sps-highlight-card{
  background:#ffffff;
  border-radius:22px;
  padding:38px 30px;
  box-shadow:0 18px 45px rgba(6,34,66,0.08);
  border:1px solid rgba(6,34,66,0.1);
  transition:all .4s ease;
  opacity:0;
  transform:translateY(50px);
}

/* Reveal Animation */
.sps-highlights-visible .sps-highlight-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-highlights-visible .sps-highlight-card:nth-child(1){ transition-delay:.2s; }
.sps-highlights-visible .sps-highlight-card:nth-child(2){ transition-delay:.4s; }
.sps-highlights-visible .sps-highlight-card:nth-child(3){ transition-delay:.6s; }
.sps-highlights-visible .sps-highlight-card:nth-child(4){ transition-delay:.8s; }
.sps-highlights-visible .sps-highlight-card:nth-child(5){ transition-delay:1s; }
.sps-highlights-visible .sps-highlight-card:nth-child(6){ transition-delay:1.2s; }

/* Hover */
.sps-highlight-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 75px rgba(6,34,66,0.25);
}

/* ===== ICON ===== */
.sps-highlight-icon{
  width:60px;
  height:60px;
  border-radius:16px;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:white;
  display:grid;
  place-items:center;
  font-size:26px;
  margin-bottom:22px;
  transition:all .4s ease;
}

/* Icon animation */
.sps-highlight-card:hover .sps-highlight-icon{
  transform:rotate(8deg) scale(1.12);
}

/* ===== TEXT ===== */
.sps-highlight-card h4{
  font-size:21px;
  font-weight:800;
  margin-bottom:14px;
  color:#062242;
}

.sps-highlight-card p{
  font-size:15.5px;
  line-height:1.75;
  color:#486C85;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-highlights-grid{
    grid-template-columns:repeat(2,1fr);
    gap:30px;
  }

  .sps-highlights-head h2{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-highlights{
    padding:0px 5vw;
  }

  .sps-highlights-head h2{
    font-size:28px;
  }

  .sps-highlights-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-highlight-card{
    padding:28px 22px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-highlights" ref={sectionRef}>
      
      <div className="sps-highlights-head">
        <h2>Key Highlights</h2>
        <p>What sets us apart in the logistics industry</p>
      </div>

      <div className="sps-highlights-grid">

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🌐</div>
          <h4>Extensive Network</h4>
          <p>Serving 500+ destinations across India, with a strong presence across major highways.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">💻</div>
          <h4>Technology Pioneer</h4>
          <p>Digitized operations with modern tracking systems and automation.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">👥</div>
          <h4>Strong Workforce</h4>
          <p>Skilled professionals ensuring reliable and timely service delivery.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🚚</div>
          <h4>Robust Fleet</h4>
          <p>Large fleet managing daily cargo across long and short distances.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🏆</div>
          <h4>Industry Recognition</h4>
          <p>Recognized for quality, reliability, and trust.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">📈</div>
          <h4>Strategic Growth</h4>
          <p>Expanding operations and partnerships to boost service capability.</p>
        </div>

      </div>
    </section>
  );
}
