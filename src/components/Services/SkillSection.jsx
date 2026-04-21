


import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SkillSection() {

  const sectionRef = useRef(null);
  const navigate = useNavigate();   // ✅ navigation added

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          const fills = entry.target.querySelectorAll(".progress-fill");
          fills.forEach((bar) => {
            const width = bar.dataset.width;
            bar.style.width = width;
          });
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ================================ WRAPPER ================================ */
.skill-section {
  padding: 0px 6vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
  font-family: Inter, system-ui;
  overflow:hidden;
}

/* LEFT IMAGES */
.skill-images {
  position: relative;
  opacity:0;
  transform:translateX(-60px);
  transition: all 0.9s cubic-bezier(.22,.61,.36,1);
}

.skill-section.show .skill-images {
  opacity:1;
  transform:translateX(0);
}

.skill-img-1 {
  width: 100%;
  border-radius: 22px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.18);
  transition: transform .8s ease;
}

.skill-images:hover .skill-img-1 {
  transform: scale(1.05);
}

/* RIGHT CONTENT */
.skill-content {
  opacity:0;
  transform:translateX(60px);
  transition: all 0.9s cubic-bezier(.22,.61,.36,1);
}

.skill-section.show .skill-content {
  opacity:1;
  transform:translateX(0);
}

.skill-tag {
  font-size: 14px;
  font-weight: 700;
  color: #3F6C87;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.skill-title {
  font-size: 42px;
  font-weight: 900;
  color: #062242;
  line-height: 1.3;
  margin-bottom: 20px;
}

.skill-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-desc {
  font-size: 16px;
  color: #3F6C87;
  line-height: 1.8;
  margin-bottom: 35px;
}

/* PROGRESS BARS */
.progress-box { margin-bottom: 24px; }

.progress-title {
  font-size: 14px;
  font-weight: 700;
  color: #062242;
  margin-bottom: 6px;
}

.progress-track {
  width: 100%;
  height: 10px;
  background: #e6eef3;
  border-radius: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(135deg, #062242, #3F6C87);
  border-radius: 8px;
  transition: width 1.6s cubic-bezier(.22,.61,.36,1);
}

/* BUTTON */
.skill-btn {
  margin-top: 25px;
  background: linear-gradient(135deg, #062242, #3F6C87);
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.skill-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(6,34,66,0.35);
}

/* RESPONSIVE */
@media(max-width: 950px) {
  .skill-section {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .skill-title { font-size: 32px; }
}

@media(max-width: 600px){
  .skill-section{ padding:0px 5vw; }
  .skill-title{ font-size:26px; }
  .skill-desc{ font-size:15px; }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="skill-section" ref={sectionRef}>

      {/* LEFT */}
      <div className="skill-images">
        <img src="/images/expr.webp" className="skill-img-1" alt="Packing Process" />
      </div>

      {/* RIGHT */}
      <div className="skill-content">

        <div className="skill-tag">Our Expertise</div>

        <h2 className="skill-title">
          Experienced movers with a passion <span>for perfection</span>
        </h2>

        <p className="skill-desc">
          At Chennai Lal Packers & Movers, we combine decades of moving experience  
          with professional precision. Whether it’s household shifting, commercial  
          relocation, or long-distance moves — we ensure every task is handled with  
          care and responsibility.
        </p>

        <div className="progress-box">
          <div className="progress-title">Real-Time Tracking</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="85%"></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Specialized Handling</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="92%"></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Customer-First Approach</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="95%"></div>
          </div>
        </div>

        {/* ✅ BUTTON NAVIGATION ADDED */}
        <button 
          className="skill-btn"
          onClick={() => navigate("/contact")}
        >
          Book Your Move Now →
        </button>

      </div>
    </section>
  );
}