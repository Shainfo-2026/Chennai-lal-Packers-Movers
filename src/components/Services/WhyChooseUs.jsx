
import React, { useEffect } from "react";

export default function WhyChooseUs() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".why-card").forEach((el) => {
      observer.observe(el);
    });

    const style = document.createElement("style");
    style.innerHTML = `

body{
  margin:0;
  font-family:'Segoe UI',sans-serif;
  background:#f4f7fb;
}

.section{
  padding:80px 5%;
}

.title{
  text-align:center;
  font-size:32px;
  font-weight:800;
  color:#0b2c4d;
  margin-bottom:60px;
}

/* GRID */
.why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:35px;
  max-width:1200px;
  margin:auto;
}

/* CARD */
.why-card{
  background:#ffffff;
  border-radius:20px;
  padding:35px 30px;
  position:relative;
  border:2px solid #d6e3f3;
  box-shadow:0 15px 35px rgba(0,0,0,0.05);
  transition:0.4s ease;

  opacity:0;
  transform:translateY(40px);
}

.why-card.show{
  opacity:1;
  transform:translateY(0);
}

/* HOVER */
.why-card:hover{
  transform:translateY(-8px);
  border-color:#0b2c4d;
  box-shadow:0 25px 50px rgba(11,44,77,0.15);
}

/* NUMBER BADGE */
.badge{
  position:absolute;
  top:-15px;
  left:20px;
  background:#0b2c4d;
  color:white;
  font-size:13px;
  font-weight:700;
  padding:6px 14px;
  border-radius:30px;
}

/* ICON */
.icon{
  position:absolute;
  top:25px;
  right:25px;
}

.icon svg{
  width:26px;
  height:26px;
  fill:#0b2c4d;
}

/* CONTENT */
.why-card h3{
  margin-top:20px;
  margin-bottom:15px;
  font-size:19px;
  color:#0b2c4d;
}

.why-card ul{
  padding-left:18px;
}

.why-card li{
  font-size:14px;
  margin-bottom:8px;
  color:#4a6378;
  line-height:1.5;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .why-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:700px){
  .why-grid{
    grid-template-columns:1fr;
  }
}

`;
    document.head.appendChild(style);

  }, []);

  const data = [
    {
      title: "Professional Excellence",
      points: [
        "Trained and verified moving professionals",
        "Systematic approach to every relocation",
        "Quality assured services"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5L4 14.2l5 5L20 8.2l-1.5-1.4z"/></svg>`
    },
    {
      title: "Safety & Security",
      points: [
        "100% insured services",
        "GPS-tracked shipments",
        "Secure packing materials",
        "Background-checked staff"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z"/></svg>`
    },
    {
      title: "Punctuality & Efficiency",
      points: [
        "On-time pickup and delivery",
        "Real-time shipment tracking",
        "Dedicated project managers"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M12 8v5l3 3 1.5-1.5-2.5-2.5V8z"/><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>`
    },
    {
      title: "Transparent Pricing",
      points: [
        "No hidden charges",
        "Free estimates and consultations",
        "Competitive pricing packages"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1C7 1 4 4 4 7c0 5 8 10 8 10s8-5 8-10c0-3-3-6-8-6z"/></svg>`
    },
    {
      title: "Customer-Centric Approach",
      points: [
        "24/7 customer support",
        "Customized relocation plans",
        "Post-move follow-up"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M12 21l-8-7h5V3h6v11h5l-8 7z"/></svg>`
    },
    {
      title: "Advanced Logistics Network",
      points: [
        "Wide transport coverage",
        "Modern fleet management",
        "Efficient route planning"
      ],
      icon: `<svg viewBox="0 0 24 24"><path d="M3 17h2v2H3v-2zm3 0h12v2H6v-2zm13-7h2v9h-2V10zM3 10h12v5H3v-5z"/></svg>`
    }
  ];

  return (
    <section className="section">

      <h2 className="title">
        Why Choose Chennai Lal Packers and Movers?
      </h2>

      <div className="why-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="badge">0{index + 1}</div>
            <div
              className="icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}