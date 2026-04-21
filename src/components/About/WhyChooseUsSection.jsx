import React, { useEffect, useRef } from "react";

export default function WhyChooseUsSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("why-visible");
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const styleId = "why-choose-style";

    if (!document.getElementById(styleId)) {

      const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.why-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;   /* TEXT SIDE BIGGER */
  gap: 80px;
  padding: 80px 6vw;
  align-items: center;
  font-family: Inter, sans-serif;
  overflow:hidden;
}

/* ===== LEFT IMAGES ===== */
.why-left {
  position: relative;
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
}

.why-visible .why-left{
  opacity:1;
  transform:translateX(0);
}

.why-main-img {
  width:100%;
  border-radius:24px;
  box-shadow:0 30px 60px rgba(0,0,0,0.2);
  transition:0.5s ease;
}

.why-main-img:hover{
  transform:scale(1.03);
}

.why-small-img {
  position:absolute;
  bottom:-60px;
  right:-40px;
  width:65%;
  border-radius:18px;
  box-shadow:0 30px 60px rgba(0,0,0,0.25);
  border:6px solid #fff;
  animation:none;
}

@keyframes floatImg{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-15px); }
  100%{ transform:translateY(0); }
}

/* ===== RIGHT CONTENT ===== */
.why-right{
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.why-visible .why-right{
  opacity:1;
  transform:translateX(0);
}

.why-top-text {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #062242;
  margin-bottom:12px;
}
 
.why-title {
  font-size: 46px;
  font-weight: 900;
  margin-bottom:18px;
  color: #062242;
  line-height:1.25;
}

.why-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #486C85;
}

/* ===== CHECK LIST ===== */
.sps-about-bottom{
  margin-top:30px;
}

.sps-checks{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.sps-check{
  display:flex;
  gap:14px;
  align-items:flex-start;
  font-size:15px;           /* slightly reduced */
  font-weight:600;
  line-height:1.5;          /* better spacing */
  color:#062242;
  max-width:420px;          /* prevents awkward wrap */
  opacity:0;
  transform:translateY(20px);
  transition:0.6s ease;
}

/* Animation Trigger */
.why-visible .sps-check:nth-child(1){ transition-delay:0.3s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(2){ transition-delay:0.5s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(3){ transition-delay:0.7s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(4){ transition-delay:0.9s; opacity:1; transform:translateY(0);}

.sps-check span{
  min-width:24px;
  height:24px;
  border-radius:50%;
  background:#062242;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:14px;
  margin-top:3px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){

  .why-wrap {
    grid-template-columns:1fr;
    gap:60px;
  }

  .why-small-img{
    position:static;
    width:100%;
    margin-top:20px;
  }

  .why-title{
    font-size:34px;
  }

  .sps-check{
    max-width:100%;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .why-wrap{
    padding:70px 5vw;
  }

  .sps-check{
    justify-content:center;
    text-align:left;
  }

  .why-right{
    text-align:center;
  }

  .why-title{
    font-size:28px;
  }
}
`;

      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <section className="why-wrap" ref={sectionRef}>
      
      <div className="why-left">
        <img
  src="/images/tow.webp"
  width="620"
  height="420"
  loading="lazy"
  decoding="async"
  alt="Relocation team"
  className="why-main-img"
/>

        <img
  src="/images/LEFTTRUCK.webp"
  width="380"
  height="260"
  loading="lazy"
  decoding="async"
  alt="Safe Transportation"
  className="why-small-img"
/>
      </div>

      <div className="why-right">
        <p className="why-top-text">CHENNAI LAL PACKERS & MOVERS</p>

        <h2 className="why-title">
          Reliable Packers And Movers <br /> Solutions Saves Your Time!
        </h2>

        <p className="why-desc">
          CHENNAI LAL Packers & Movers is a leading relocation service provider in
          South India, offering safe, reliable, and cost-effective moving
          solutions.
        </p>

        <div className="sps-about-bottom">
          <div className="sps-checks">
            {[
              "Reliable & Secure Moving",
              "Affordable Service Pricing",
              "Timely & Efficient Service",
              "Expert Packing & Handling"
            ].map((text, i) => (
              <div key={i} className="sps-check">
                <span>✓</span>
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}