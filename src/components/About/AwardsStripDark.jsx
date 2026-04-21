import React, { useEffect, useRef } from "react";


export default function AwardsStripDark() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-awards-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-awards-dark{
  padding:10px 6vw;
  background:
    radial-gradient(circle at top, rgba(255,215,0,0.05), transparent 50%),
    linear-gradient(180deg,#0a1624,#05101c);
  font-family:Inter,system-ui;
  overflow:hidden;
  position:relative;
}

/* ===== HEADER ===== */
.sps-awards-dark-head{
  text-align:center;
  margin-bottom:80px;
  opacity:0;
  transform:translateY(40px);
  transition:0.9s ease;
}

.sps-awards-visible .sps-awards-dark-head{
  opacity:1;
  transform:translateY(0);
}

.sps-awards-dark-head small{
  display:block;
  font-size:12px;
  letter-spacing:0.3em;
  font-weight:700;
  color:#d4af37;
  margin-bottom:15px;
}

.sps-awards-dark-head h2{
  font-size:46px;
  font-weight:900;
  color:#ffffff;
}

.sps-awards-dark-head h2 span{
  background:linear-gradient(90deg,#ffd700,#d4af37,#f8e48c);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== TRACK ===== */
.sps-awards-container{
  overflow:hidden;
}

.sps-awards-track{
  display:flex;
  gap:60px;
  width:max-content;
  animation:scrollAwards 45s linear infinite;
}

.sps-awards-dark:hover .sps-awards-track{
  animation-play-state:paused;
}

/* ===== GLASS CARD ===== */
.sps-award-dark{
  position:relative;
  min-width:220px;
  height:120px;
  border-radius:20px;
  display:grid;
  place-items:center;
  backdrop-filter:blur(12px);
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,215,0,0.25);
  overflow:hidden;
  transition:all .4s ease;
}

/* Animated Gold Border */
.sps-award-dark::before{
  content:"";
  position:absolute;
  inset:-1px;
  border-radius:22px;
  padding:1px;
  background:linear-gradient(120deg,#ffd700,#d4af37,#f8e48c,#ffd700);
  background-size:300% 300%;
  animation:goldFlow 6s linear infinite;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events:none;
}

/* Subtle Glow */
.sps-award-dark:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 40px rgba(255,215,0,0.15);
}

/* Text */
.sps-award-dark span{
  font-weight:800;
  font-size:16px;
  letter-spacing:2px;
  color:#f8e48c;
  text-transform:uppercase;
}

/* ===== ANIMATIONS ===== */
@keyframes scrollAwards{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

@keyframes goldFlow{
  0%{ background-position:0% 50%; }
  100%{ background-position:100% 50%; }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-awards-dark{
    padding:70px 5vw;
  }

  .sps-awards-dark-head h2{
    font-size:30px;
  }

  .sps-award-dark{
    min-width:170px;
    height:95px;
  }

  .sps-awards-track{
    gap:40px;
    animation:scrollAwards 35s linear infinite;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const awards = [
    "ISO CERTIFIED",
    "MSME REGISTERED",
    "TRUSTED BRAND",
    "QUALITY AWARD",
    "SAFETY CERTIFIED",
    "★★★★★ RATED"
  ];

  return (
    <section className="sps-awards-dark" ref={sectionRef}>
      
      <div className="sps-awards-dark-head">
        <small>AWARDS & CERTIFICATIONS</small>
        <h2>Recognized for <span>Excellence</span></h2>
      </div>

      <div className="sps-awards-container">
        <div className="sps-awards-track">
          {[...awards, ...awards].map((text, i) => (
            <div className="sps-award-dark" key={i}>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
