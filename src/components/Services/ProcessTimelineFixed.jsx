import React, { useEffect, useRef, useState } from "react";


export default function ProcessTimelineFixed() {

  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===== ACTIVE STEP ON SCROLL (SAFE) ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===== CSS ===== */
  useEffect(() => {
    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.sps-timeline-wrap{
  padding:4vw 6vw;
  font-family:Inter,system-ui;
  background:#fff;
  overflow:hidden;
}

/* ===== HEADER ===== */
.sps-timeline-head{
  text-align:center;
  margin-bottom:50px;
}

.sps-timeline-head h2{
  font-size:40px;
  font-weight:900;
  color:#062242;
}

/* ===== TIMELINE ===== */
.sps-timeline{
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}

/* ===== SVG ===== */
.sps-svg{
  position:absolute;
  top:44px;
  left:0;
  width:100%;
  height:120px;
  z-index:0;
}

/* ===== STEP ===== */
.sps-step{
  width:150px;
  text-align:center;
  position:relative;
  z-index:2;
}

/* ===== CIRCLE ===== */
.sps-step-circle{
  width:72px;
  height:72px;
  border-radius:50%;
  background:#fff;
  border:4px solid currentColor;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  margin:0 auto;
  transition:.35s ease;
}

/* ===== ACTIVE + HOVER ===== */
.sps-step:hover .sps-step-circle,
.sps-step.active .sps-step-circle{
  box-shadow:0 0 25px currentColor;
  transform:scale(1.08);
}

/* ===== TEXT ===== */
.sps-step h4{
  margin-top:14px;
  font-size:16px;
  font-weight:800;
  color:#062242;
}

.sps-step p{
  font-size:14px;
  margin-top:6px;
  color:#555;
  line-height:1.5;
}

/* ===== COLORS ===== */
.green{ color:#2DBE60; }
.blue{ color:#2D8CFF; }
.orange{ color:#F5A623; }
.red{ color:#E94E4E; }
.purple{ color:#8E44AD; }
.teal{ color:#1ABC9C; }
.gray{ color:#6c757d; }

/* ===== MOBILE ===== */
@media(max-width:900px){
  .sps-timeline{
    flex-direction:column;
    gap:40px;
  }

  .sps-svg{
    display:none;
  }

  .sps-step{
    width:100%;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  /* ===== UPDATED CONTENT (YOUR STEPS) ===== */
  const steps = [
    {
      title: "Free Consultation",
      desc: "Get a personalized quote",
      icon: "💬",
      color: "green"
    },
    {
      title: "Pre-Move Survey",
      desc: "Detailed assessment of your needs",
      icon: "📋",
      color: "blue"
    },
    {
      title: "Customized Plan",
      desc: "Tailored moving strategy",
      icon: "🧩",
      color: "orange"
    },
    {
      title: "Professional Packing",
      desc: "Careful handling of all items",
      icon: "📦",
      color: "red"
    },
    {
      title: "Safe Transportation",
      desc: "Insured and tracked movement",
      icon: "🚚",
      color: "purple"
    },
    {
      title: "Unpacking & Setup",
      desc: "Settling into your new space",
      icon: "🏠",
      color: "teal"
    },
    {
      title: "Feedback & Support",
      desc: "Ensuring complete satisfaction",
      icon: "🤝",
      color: "gray"
    }
  ];

  return (
    <section className="sps-timeline-wrap">
      <div className="sps-timeline-head">
        <h2>Our Moving Process</h2>
      </div>

      <div className="sps-timeline">

        {/* CURVED LINE + MOVING DOT */}
        <svg className="sps-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C200,20 400,100 600,60 800,20 1000,100 1200,60"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="4"
          />
          <circle r="6" fill="url(#grad)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M0,60 C200,20 400,100 600,60 800,20 1000,100 1200,60"
            />
          </circle>
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#2DBE60"/>
              <stop offset="50%" stopColor="#2D8CFF"/>
              <stop offset="100%" stopColor="#E94E4E"/>
            </linearGradient>
          </defs>
        </svg>

        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => (stepRefs.current[i] = el)}
            data-index={i}
            className={`sps-step ${step.color} ${activeIndex === i ? "active" : ""}`}
          >
            <div className="sps-step-circle">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
