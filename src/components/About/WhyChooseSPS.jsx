import React, { useEffect, useRef } from "react";


export default function WhyChooseSPS() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-why-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-why{
  /* padding:110px 6vw; */
  font-family:Inter,system-ui;
  
  overflow:hidden;
}

/* HEADER */
.sps-why-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-why-visible .sps-why-head{
  opacity:1;
  transform:translateY(0);
}

.sps-why-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
}

.sps-why-head h2 span{
  color:#3F6C87;
}

/* GRID */
.sps-why-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:35px;
}

/* CARD */
.sps-why-card{
  background:#ffffff;
  border-radius:22px;
  padding:40px 28px;
  text-align:center;
  box-shadow:0 20px 50px rgba(6,34,66,0.08);
  transition:all .4s ease;
  border:1px solid rgba(6,34,66,0.08);
  opacity:0;
  transform:translateY(50px);
}

.sps-why-visible .sps-why-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-why-visible .sps-why-card:nth-child(1){ transition-delay:0.2s; }
.sps-why-visible .sps-why-card:nth-child(2){ transition-delay:0.4s; }
.sps-why-visible .sps-why-card:nth-child(3){ transition-delay:0.6s; }
.sps-why-visible .sps-why-card:nth-child(4){ transition-delay:0.8s; }

/* Hover */
.sps-why-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(6,34,66,0.25);
}

/* ICON */
.sps-why-icon{
  width:65px;
  height:65px;
  margin:0 auto 20px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  font-size:28px;
  transition:0.4s ease;
}

/* Icon animation on hover */
.sps-why-card:hover .sps-why-icon{
  transform:scale(1.15) rotate(8deg);
}

/* TITLE */
.sps-why-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  color:#062242;
}

/* TEXT */
.sps-why-card p{
  font-size:15px;
  color:#486C85;
  line-height:1.7;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-why-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .sps-why-head h2{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-why{
    padding:0px 5vw;
  }

  .sps-why-head h2{
    font-size:28px;
  }

  .sps-why-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-why-card{
    padding:30px 20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-why" ref={sectionRef}>
      
      <div className="sps-why-head">
        <h2>
          Our <span>Features</span>
        </h2>
      </div>

      <div className="sps-why-grid">

        <div className="sps-why-card">
          <div className="sps-why-icon">🛡️</div>
          <h4>Fully Insured</h4>
          <p>
            Comprehensive insurance coverage for complete peace of mind during
            relocation.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">⏱️</div>
          <h4>On-Time Delivery</h4>
          <p>
            Proven on-time delivery with careful planning and real-time tracking.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">🎧</div>
          <h4>24/7 Support</h4>
          <p>
            Round-the-clock customer support to assist you at every stage.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">💰</div>
          <h4>Transparent Pricing</h4>
          <p>
            No hidden charges. Clear quotations with honest and competitive
            pricing.
          </p>
        </div>

      </div>
    </section>
  );
}
