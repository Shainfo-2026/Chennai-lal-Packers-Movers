import React, { useEffect, useRef, useState } from "react";



export default function KeynoteTeamSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{margin:0;padding:0;box-sizing:border-box;}

.sps-team-section{
  padding:0px 6vw;
  padding-top: 10px; 
   padding-bottom: 30px;
    // background:#ffffff;
  font-family:Inter,system-ui;
  text-align:center;
  overflow:hidden;
}

.sps-team-title{
  font-size:48px;
  font-weight:900;
  color:#062242;
  margin-bottom:80px;
}

/* GRID */
.sps-team-grid{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:60px;
  max-width:1200px;
  margin:auto;
}

/* CARD */
.sps-team-card{
  width:320px;
  background:#062242;
  padding:40px 25px 45px;
  border-radius:20px;
  box-shadow:0 25px 60px rgba(6,34,66,0.3);
  transition:all .6s cubic-bezier(.22,.61,.36,1);
  opacity:0;
  transform:translateY(60px);
  color:#ffffff;
}

.sps-team-section.show .sps-team-card{
  opacity:1;
  transform:translateY(0);
}

.sps-team-card:hover{
  transform:translateY(-10px);
}

/* ===== ANGLED CORNER IMAGE ===== */
.sps-team-img{
  width:220px;
  height:220px;
  margin:auto;
  overflow:hidden;

  /* OCTAGON CUT CORNERS */
  clip-path:polygon(
    20% 0%, 80% 0%,
    100% 20%, 100% 80%,
    80% 100%, 20% 100%,
    0% 80%, 0% 20%
  );

  box-shadow:0 25px 50px rgba(0,0,0,0.4);
  transition:transform .5s ease;
}

.sps-team-img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.sps-team-card:hover .sps-team-img{
  transform:scale(1.05);
}

/* NAME */
.sps-team-name{
  font-size:22px;
  font-weight:900;
  margin-top:28px;
  color:#ffffff;
}

/* ROLE */
.sps-team-role{
  font-size:13px;
  font-weight:700;
  margin:10px 0 15px;
  letter-spacing:2px;
  color:#A7D4EE;
}

/* DESCRIPTION */
.sps-team-desc{
  font-size:14px;
  line-height:1.7;
  color:#ffffff;
  opacity:0.9;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-team-card{
    width:280px;
  }
}

@media(max-width:768px){
  .sps-team-grid{
    flex-direction:column;
    align-items:center;
  }

  .sps-team-card{
    width:100%;
    max-width:350px;
  }

  .sps-team-img{
    width:180px;
    height:180px;
  }

  .sps-team-title{
    font-size:32px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const team = [
    {
      name: "Prasanth V",
      role: "PROJECT MANAGER",
      img: "/images/about/prasanth.webp",
      desc: "Managing relocation projects across Tamil Nadu with efficiency and precision."
    },
    {
      name: "Ramya",
      role: "PROJECT MANAGER",
      img: "/images/about/ramya.webp",
      desc: "Ensuring safe packing and damage-free transport every time."
    },
    {
      name: "Sowndarya S",
      role: "WEB DEVELOPER",
      img: "/images/about/SOW.webp",
      desc: "Transparent communication from booking to final delivery."
    },
    {
      name: "Gayathri S",
      role: "TEAM LEAD",
      img: "/images/about/gaya.webp",
      desc: "Overseeing GPS-enabled fleet operations across India."
    },
    {
      name: "Sathish Kumar",
      role: "MANAGEMENT",
      img: "/images/about/sk.webp",
      desc: "Strategic planning and operational excellence leadership."
    }
  ];

  return (
    <section className="sps-team-section" ref={sectionRef}>

      <h2 className="sps-team-title">
        Meet Our Expert Team
      </h2>

      <div className="sps-team-grid">
        {team.map((member, i) => (
          <div key={i} className="sps-team-card">

            <div className="sps-team-img">
              <img src={member.img} alt={member.name} />
            </div>

            <div className="sps-team-name">{member.name}</div>
            <div className="sps-team-role">[ {member.role} ]</div>
            <p className="sps-team-desc">{member.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}
