
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesShowcase() {

  const navigate = useNavigate();
  const sectionRef = useRef([]);

  const openWhatsApp = (service) => {
    const ownerNumber = "919361046387";
    const message = `Hello SPS Packers & Movers 👋

I am interested in ${service}.
Please contact me with details.`;

    window.open(
      `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sps-service-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current.forEach(el => el && observer.observe(el));

    const css = `
/* ===== RESET ===== */
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-service-wrap{
  padding: 4vw 6vw;
  font-family: Inter, system-ui;
}

/* ===== ROW ===== */
.sps-service-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:all .7s ease;
}

.sps-service-visible{
  opacity:1;
  transform:translateY(0);
}

/* Alternate layout */
.sps-service-row:nth-child(even) .sps-service-img{ order:2; }
.sps-service-row:nth-child(even) .sps-service-content{ order:1; }

/* ===== IMAGE ===== */
.sps-service-img{
  border-radius:18px;
  overflow:hidden;
}

.sps-service-img img{
  width:100%;
  max-height:360px;
  object-fit:cover;
  border-radius:18px;
}

/* ===== CONTENT ===== */
.sps-service-content{
  display:flex;
  flex-direction:column;
}

.sps-service-content h3{
  font-size:42px;
  font-weight:900;
  color:#062242;
  margin-bottom:12px;
}

.sps-service-content p{
  font-size:18px;
  line-height:1.7;
  color:#062242;
  max-width:560px;
}

/* ===== FEATURES ===== */
.sps-service-features{
  margin-top:16px;
}

.sps-service-features li{
  list-style:none;
  font-size:17px;
  margin-bottom:7px;
  padding-left:24px;
  position:relative;
  color:#062242;
}

.sps-service-features li::before{
  content:"✔";
  position:absolute;
  left:0;
  color:#25D366;
  font-weight:900;
}

/* ===== BUTTONS ===== */
.sps-btns{
  display:flex;
  gap:16px;
  margin-top:22px;
  flex-wrap:wrap;
}

.sps-btn{
  padding:14px 28px;
  font-size:16px;
  font-weight:800;
  border-radius:12px;
  border:none;
  cursor:pointer;
  transition:.25s ease;
}

.sps-btn-primary{
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
}

.sps-btn-whatsapp{
  background:#25D366;
  color:#fff;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-service-row{
    grid-template-columns:1fr;
    gap:30px;
  }

  .sps-service-content h3{
    font-size:34px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){
  .sps-service-wrap{
    padding:40px 18px;
  }

  .sps-service-row{
    margin-bottom:55px;
  }

  .sps-service-content h3{
    font-size:28px;
  }

  .sps-service-content p{
    font-size:16px;
  }

  .sps-service-features li{
    font-size:15.5px;
  }

  .sps-btn{
    width:100%;
    text-align:center;
  }

  .sps-service-img img{
    max-height:260px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

   const services = [
    {
      title: "House Shifting",
      img: "/images/bgserv/bghousemini.webp",
      desc: "We make home relocation seamless and stress-free using high-quality packing materials and modern equipment.",
      features: [
        "Pre-move survey and planning",
        "Safe packing and unpacking of household items",
        "Careful handling of furniture and fragile goods",
        "Loading, transportation, and unloading",
        "Door-to-door relocation support"
      ]
    },
    {
      title: "Office Shifting",
      img: "/images/bgserv/offs.webp",
      desc: "Professional office relocation ensuring minimal downtime and safe IT equipment handling.",
      features: [
        "Minimal business disruption during relocation",
        "IT equipment and electronics handling",
        "Furniture disassembly and reassembly",
        "Secure document transportation",
        "Weekend and after-hours moving options"
      ]
    },
    {
      title: "Transportation",
      img: "/images/bgserv/transmini.webp",
      desc: "Fast and reliable GPS-enabled transportation for safe and timely delivery.",
      features: [
        "Dedicated fleet of modern vehicles",
        "GPS-enabled trucks for real-time tracking",
        "Climate-controlled transport options",
        "Insurance-covered transportation",
        "Pan-India and international network"
      ]
    },
    {
      title: "AC Installation",
      img: "/images/bgserv/bgacmini.webp",
      desc: "Expert AC dismantling, shifting and re-installation with complete safety.",
      features: [
        "New AC installation (Split & Window AC)",
        "AC uninstallation and reinstallation",
        "Proper indoor & outdoor unit mounting",
        "Gas leak check and performance testing",
        "Clean, safe, and professional setup"
      ]
    },
    {
      title: "Godown Shifting",
      img: "/images/bgserv/godownmin.webp",
      desc: "Complete warehouse and inventory relocation with heavy equipment handling.",
      features: [
        "Inventory assessment and planning",
        "Heavy machinery transportation",
        "Storage solutions during transition",
        "Climate-controlled moving options",
        "Logistics management"
      ]
    },
    {
      title: "Commercial Moves",
      img: "/images/bgserv/bgcommmini.webp",
      desc: "End-to-end commercial relocation solutions for businesses and industries.",
      features: [
        "Retail store relocations",
        "Warehouse transfers",
        "Factory equipment moving",
        "Inventory management during transition",
        "Business continuity planning"
      ]
    }
  ];

  return (
    <section className="sps-service-wrap">
      {services.map((service, index) => (
        <div
          className="sps-service-row"
          key={index}
          ref={el => (sectionRef.current[index] = el)}
        >
          <div className="sps-service-img">
            <img src={service.img} alt={service.title} />
          </div>

          <div className="sps-service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <ul className="sps-service-features">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="sps-btns">
              <button
                className="sps-btn sps-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>

              <button
                className="sps-btn sps-btn-whatsapp"
                onClick={() => openWhatsApp(service.title)}
              >
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}