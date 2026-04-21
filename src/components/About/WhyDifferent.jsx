import React, { useEffect, useRef } from "react";



export default function WhyDifferent() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-different-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-different{
  font-family:Inter,system-ui;
  // background:white;
  // padding:110px 6vw;
  overflow:hidden;
}

/* HEADER */
.sps-different-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-different-visible .sps-different-head{
  opacity:1;
  transform:translateY(0);
}

.sps-different-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
}

.sps-different-head h2 span{
  color:#3F6C87;
}

/* GRID */
.sps-different-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}

/* CARD */
.sps-diff-card{
  background:#ffffff;
  border-radius:24px;
  padding:40px 30px;
  box-shadow:0 25px 55px rgba(6,34,66,0.12);
  transition:all .4s ease;
  border:1.5px solid rgba(6,34,66,0.15);
  opacity:0;
  transform:translateY(50px);
}

.sps-different-visible .sps-diff-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger animation */
.sps-different-visible .sps-diff-card:nth-child(1){ transition-delay:0.2s; }
.sps-different-visible .sps-diff-card:nth-child(2){ transition-delay:0.4s; }
.sps-different-visible .sps-diff-card:nth-child(3){ transition-delay:0.6s; }
.sps-different-visible .sps-diff-card:nth-child(4){ transition-delay:0.8s; }
.sps-different-visible .sps-diff-card:nth-child(5){ transition-delay:1s; }

/* Hover */
.sps-diff-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(6,34,66,0.25);
}

/* ICON */
.sps-diff-icon{
  width:65px;
  height:65px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#FDFCFC;
  display:grid;
  place-items:center;
  font-size:26px;
  font-weight:900;
  margin-bottom:20px;
  transition:0.4s ease;
}

/* Icon pop on hover */
.sps-diff-card:hover .sps-diff-icon{
  transform:scale(1.15) rotate(8deg);
}

/* TEXT */
.sps-diff-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  color:#062242;
}

.sps-diff-card p{
  font-size:15px;
  line-height:1.7;
  color:#486C85;
}

/* TABLET */
@media(max-width:1000px){
  .sps-different-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .sps-different-head h2{
    font-size:36px;
  }
}

/* MOBILE */
@media(max-width:600px){
  .sps-different{
    padding:70px 5vw;
  }

  .sps-different-head h2{
    font-size:28px;
  }

  .sps-different-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-diff-card{
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
    <section className="sps-different" ref={sectionRef}>
      
      <div className="sps-different-head">
        <h2>
          ⭐ What Makes <span>Us Different</span>
        </h2>
      </div>

      <div className="sps-different-grid">

        <div className="sps-diff-card">
          <div className="sps-diff-icon">👷</div>
          <h4>Experienced Team</h4>
          <p>
            Skilled movers trained in safe packing, handling, and transportation
            techniques to ensure damage-free relocation.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">🌍</div>
          <h4>Pan-India Coverage</h4>
          <p>
            Serving homes and businesses across major cities and regions with
            reliable logistics support.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">📦</div>
          <h4>Quality Packing Materials</h4>
          <p>
            Premium materials used to protect your valuables during every stage
            of the move.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">⏱️</div>
          <h4>On-Time Delivery</h4>
          <p>
            We respect your time and ensure timely pickup and delivery without
            unnecessary delays.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">₹</div>
          <h4>Transparent Pricing</h4>
          <p>
            Clear quotations with no hidden charges, giving you complete peace
            of mind.
          </p>
        </div>

      </div>

    </section>
  );
}