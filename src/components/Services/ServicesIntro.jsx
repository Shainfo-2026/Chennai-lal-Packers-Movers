

import React, { useEffect, useRef } from "react";

export default function ServicesIntro() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-services-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-services-intro{
  padding:20px 6vw;
  // background:#FDFCFC;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* GRID */
.sps-services-wrap{
  max-width:1300px;
  margin:auto;
  display:grid;
  grid-template-columns:1.05fr 0.95fr;
  gap:70px;
  align-items:center;
}

/* ===== IMAGE SIDE ===== */
.sps-services-image{
  position:relative;
  opacity:0;
  transform:translateX(-60px);
  transition:all .9s cubic-bezier(.22,.61,.36,1);
}

.sps-services-visible .sps-services-image{
  opacity:1;
  transform:translateX(0);
}

.sps-services-image img{
  width:100%;
  border-radius:22px;
  box-shadow:0 30px 60px rgba(0,0,0,0.18);
  transition:transform .8s ease;
}

.sps-services-image:hover img{
  transform:scale(1.05);
}

/* EXPERIENCE BADGE */
.sps-exp-badge{
  position:absolute;
  top:-30px;
  left:-30px;
  background:#ffffff;
  border-radius:16px;
  padding-top: 30px;          
  padding:50px 26px;
  box-shadow:0 25px 50px rgba(6,34,66,0.25);
  text-align:center;
  animation:floatBadge 4s ease-in-out infinite;
}

@keyframes floatBadge{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-10px); }
  100%{ transform:translateY(0); }
}

.sps-exp-badge h3{
  font-size:44px;
  font-weight:900;
  color:#062242;
  line-height:1;
}

.sps-exp-badge p{
  font-size:14px;
  font-weight:700;
  color:#062242;
  margin-top:6px;
}

/* ===== CONTENT SIDE ===== */
.sps-services-content{
  opacity:0;
  transform:translateX(60px);
  transition:all .9s cubic-bezier(.22,.61,.36,1);
}

.sps-services-visible .sps-services-content{
  opacity:1;
  transform:translateX(0);
}

.sps-services-content small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#062242;
  margin-bottom:14px;
}

.sps-services-content h2{
  font-size:42px;
  font-weight:900;
  color:#062242;
  line-height:1.25;
  margin-bottom:18px;
}

.sps-services-content p{
  font-size:16px;
  color:#062242;
  line-height:1.75;
  margin-bottom:30px;
}

/* ===== SERVICES LIST ===== */
.sps-services-list{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px 30px;
}

.sps-service-item{
  display:flex;
  align-items:center;
  gap:12px;
  font-size:15px;
  font-weight:600;
  color:#062242;
  opacity:0;
  transform:translateY(20px);
  transition:all .6s ease;
}

.sps-services-visible .sps-service-item{
  opacity:1;
  transform:translateY(0);
}

/* Stagger animation */
.sps-services-visible .sps-service-item:nth-child(1){ transition-delay:.2s; }
.sps-services-visible .sps-service-item:nth-child(2){ transition-delay:.3s; }
.sps-services-visible .sps-service-item:nth-child(3){ transition-delay:.4s; }
.sps-services-visible .sps-service-item:nth-child(4){ transition-delay:.5s; }
.sps-services-visible .sps-service-item:nth-child(5){ transition-delay:.6s; }
.sps-services-visible .sps-service-item:nth-child(6){ transition-delay:.7s; }

.sps-service-icon{
  width:24px;
  height:24px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  display:grid;
  place-items:center;
  font-size:13px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-services-wrap{
    grid-template-columns:1fr;
    gap:50px;
  }

  .sps-exp-badge{
    position:static;
    width:max-content;
    margin-bottom:20px;
  }

  .sps-services-content h2{
    font-size:32px;
  }

  .sps-services-list{
    grid-template-columns:1fr;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){
  .sps-services-intro{
    padding:0px 5vw;
  }

  .sps-services-content h2{
    font-size:26px;
  }

  .sps-services-content p{
    font-size:15px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-services-intro" ref={sectionRef}>
      <div className="sps-services-wrap">

        {/* LEFT IMAGE */}
        <div className="sps-services-image">
          <div className="sps-exp-badge">
            <h3>5</h3>
            <p>Years Experience</p>
          </div>

          <img
            src="/images/ser/twopersons.webp"
            alt="Professional Moving Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="sps-services-content">
          <small>Welcome to Chennai Lal Packers & Movers</small>

          <h2>
            Your Trusted <br />
            Moving <span>Partners</span>
          </h2>


          <p>
           At Chennai Lal Packers & Movers, we transform the stressful experience of moving into a smooth, efficient, and hassle-free journey. With years of expertise in professional packing and relocation services, we handle your belongings with the care they deserve while ensuring timely and secure delivery to your new destination.
          </p>

          <div className="sps-services-list">
            {[
              "House Relocations",
              "Corporate Relocations",
              "AC Installtion",
              "Warehousing Shifting",
              "Transportation",
              "Commercial Moves"
            ].map((service, i) => (
              <div key={i} className="sps-service-item">
                <div className="sps-service-icon">➜</div>
                {service}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}