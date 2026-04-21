import React, { useEffect, useRef } from "react";


export default function MissionVision() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-mv-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-mv{
  
  font-family:Inter,system-ui;
  
  overflow:hidden;
}

/* CONTAINER */
.sps-mv-wrap{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  background: linear-gradient(135deg,#062242,#3F6C87);
  border-radius:24px;
  padding:60px 60px;
  box-shadow:0 25px 55px rgba(0,0,0,0.2);
  position:relative;
  overflow:hidden;
}

/* Subtle animated background */
.sps-mv-wrap::before{
  content:"";
  position:absolute;
  width:300%;
  height:300%;
  top:-100%;
  left:-100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%);
  animation: rotateBg 20s linear infinite;
}

@keyframes rotateBg{
  from{ transform:rotate(0deg); }
  to{ transform:rotate(360deg); }
}

/* ITEM */
.sps-mv-item{
  display:flex;
  gap:20px;
  align-items:flex-start;
  opacity:0;
  transform:translateY(40px);
  transition:0.9s ease;
  position:relative;
  z-index:2;
}

.sps-mv-visible .sps-mv-item{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-mv-visible .sps-mv-item:nth-child(1){ transition-delay:0.3s; }
.sps-mv-visible .sps-mv-item:nth-child(2){ transition-delay:0.6s; }

/* ICON */
.sps-mv-icon{
  min-width:55px;
  height:55px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:#ffffff;
  color:#062242;
  font-size:24px;
  font-weight:900;
  transition:0.4s ease;
}

/* Hover effect */
.sps-mv-item:hover .sps-mv-icon{
  transform:scale(1.15);
}

/* TEXT */
.sps-mv-item h3{
  font-size:24px;
  font-weight:900;
  margin-bottom:12px;
  color:#ffffff;
}

.sps-mv-item p{
  font-size:16px;
  line-height:1.7;
  color:#ffffff;
  max-width:480px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-mv-wrap{
    gap:40px;
    padding:50px 40px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){

  .sps-mv{
    padding:70px 5vw;
  }

  .sps-mv-wrap{
    grid-template-columns:1fr;
    padding:40px 25px;
    gap:35px;
  }

  .sps-mv-item{
    flex-direction:column;
    align-items:center;
    text-align:center;
  }

  .sps-mv-item p{
    max-width:100%;
  }

  .sps-mv-icon{
    margin-bottom:10px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-mv" ref={sectionRef}>
      <div className="sps-mv-wrap">

        {/* MISSION */}
        <div className="sps-mv-item">
          <div className="sps-mv-icon">🎯</div>
          <div>
            <h3>Our Mission</h3>
            <p>
              To provide stress-free, reliable, and efficient packing and moving
              services that exceed customer expectations through
              professionalism, innovation, and care for every item we handle.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="sps-mv-item">
          <div className="sps-mv-icon">👁️</div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and preferred packing and moving service
              provider nationwide, setting industry standards for safety,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


