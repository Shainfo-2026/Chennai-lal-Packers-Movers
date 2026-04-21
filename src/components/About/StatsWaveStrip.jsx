import React, { useEffect, useRef } from "react";

export default function StatsWaveStrip() {

  const refs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== COUNTER ANIMATION ===== */
    const animateCounter = (el) => {
      const target = +el.dataset.value;
      let current = 0;
      const duration = 2000;
      const increment = target / (duration / 30);

      const counter = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(counter);
        }

        if (target >= 100) {
          el.innerText = Math.floor(current) + "+";
        } else {
          el.innerText = Math.floor(current) + "%";
        }

      }, 30);
    };

    /* ===== OBSERVER ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add("sps-stats-visible");

          refs.current.forEach((el) => {
            if (el && !el.classList.contains("counted")) {
              el.classList.add("counted");
              animateCounter(el);
            }
          });
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    /* ===== CSS ===== */
    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-stats{
  position:relative;
  padding:120px 6vw;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  overflow:hidden;
  font-family:Inter,system-ui;
  text-align:center;
}

/* Wave Effect */
.sps-stats::before,
.sps-stats::after{
  content:"";
  position:absolute;
  left:0;
  width:100%;
  height:70px;
  background:#fff;
  z-index:1;
}

.sps-stats::before{
  top:-1px;
  border-bottom-left-radius:100% 60%;
  border-bottom-right-radius:100% 60%;
}

.sps-stats::after{
  bottom:-1px;
  border-top-left-radius:100% 60%;
  border-top-right-radius:100% 60%;
}

/* ===== GRID ===== */
.sps-stats-grid{
  position:relative;
  z-index:2;
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:50px;
}

/* ===== STAT CARD ===== */
.sps-stat{
  opacity:0;
  transform:translateY(40px) scale(0.95);
  transition:0.8s ease;
}

.sps-stats-visible .sps-stat{
  opacity:1;
  transform:translateY(0) scale(1);
}

/* Stagger */
.sps-stats-visible .sps-stat:nth-child(1){ transition-delay:.2s; }
.sps-stats-visible .sps-stat:nth-child(2){ transition-delay:.4s; }
.sps-stats-visible .sps-stat:nth-child(3){ transition-delay:.6s; }
.sps-stats-visible .sps-stat:nth-child(4){ transition-delay:.8s; }

/* ===== ICON ===== */
.sps-stat-icon{
  width:65px;
  height:65px;
  margin:0 auto 18px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(255,255,255,0.2);
  font-size:28px;
  transition:0.4s ease;
}

/* Floating icon animation */
.sps-stats-visible .sps-stat-icon{
  animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
  100%{ transform:translateY(0); }
}

/* ===== NUMBER ===== */
.sps-stat-num{
  font-size:48px;
  font-weight:900;
  letter-spacing:1px;
  margin-bottom:8px;
}

/* ===== LABEL ===== */
.sps-stat-label{
  font-size:16px;
  font-weight:600;
  opacity:0.95;
}

/* ===== TABLET ===== */
@media(max-width:900px){
  .sps-stats-grid{
    grid-template-columns:repeat(2,1fr);
    gap:40px;
  }

  .sps-stat-num{
    font-size:38px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:500px){

  .sps-stats{
    padding:90px 5vw;
  }

  .sps-stats-grid{
    grid-template-columns:1fr;
    gap:30px;
  }

  .sps-stat-num{
    font-size:32px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-stats" ref={sectionRef}>
      <div className="sps-stats-grid">

        <div className="sps-stat">
          <div className="sps-stat-icon">📍</div>
          <div className="sps-stat-num" data-value="500" ref={(el) => (refs.current[0] = el)}>0</div>
          <div className="sps-stat-label">Cities Covered</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🏢</div>
          <div className="sps-stat-num" data-value="1000" ref={(el) => (refs.current[1] = el)}>0</div>
          <div className="sps-stat-label">Business Offices Relocated</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🚚</div>
          <div className="sps-stat-num" data-value="100" ref={(el) => (refs.current[2] = el)}>0</div>
          <div className="sps-stat-label">Self-Owned Container Trucks</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">😊</div>
          <div className="sps-stat-num" data-value="96" ref={(el) => (refs.current[3] = el)}>0%</div>
          <div className="sps-stat-label">Satisfied Customers</div>
        </div>

      </div>
    </section>
  );
}
