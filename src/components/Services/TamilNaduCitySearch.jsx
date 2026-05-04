import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TamilNaduCitySearch() {

  const navigate = useNavigate();
  const sectionRef = useRef(null);

  /* CLICK FUNCTION */
  const goToCityPage = (city) => {
    const path = city.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/packers-and-movers-in-${path}`);
  };

  const [search, setSearch] = useState("");

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          const boxes = entry.target.querySelectorAll(".location-card");
          boxes.forEach((box, i) => {
            setTimeout(() => box.classList.add("show"), i * 120);
          });
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* SECTION */
.tn-city-section {
  width: 100%;
  padding: 40px 5vw;
  background: linear-gradient(135deg,#062242,#0A304F);
  font-family: Inter, system-ui;
  color: white;
  text-align: center;
  opacity:0;
  transform:translateY(50px);
  transition:0.9s cubic-bezier(.22,.61,.36,1);
}

.tn-city-section.show{
  opacity:1;
  transform:translateY(0);
}

/* TITLE */
.tn-title {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
}

/* SEARCH */
.city-search {
  width: 55%;
  max-width: 600px;
  margin: 0 auto 50px auto;
  padding: 15px 20px;
  border-radius: 14px;
  border: none;
  font-size: 16px;
  outline: none;
  color: #062242;
}

/* GRID */
.location-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* CARD */
.location-card {
  background: #ffffff;
  border-radius: 16px;
  border:3px solid #7a0395;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;
  opacity:0;
  transform:translateY(40px);
}

.location-card.show{
  opacity:1;
  transform:translateY(0);
}

.location-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* ICON */
.location-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

/* TEXT */
.location-text {
  font-size: 16px;
  font-weight: 600;
  color: #062242;
  line-height: 1.4;
}

/* RESPONSIVE */
@media(max-width:900px){
  .location-grid{
    grid-template-columns: repeat(2,1fr);
  }
}

@media(max-width:600px){
  .location-grid{
    grid-template-columns:1fr;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  /* ONLY REQUIRED LOCATIONS */
  const locations = [
    // "Sholinganallur",
    "Adayar",
    "Madipakkam",
    "Sholinganallur",
    "Annanagar"
    // "Kolathur",
    // "Padi"
  ];

  const filtered = locations.filter(loc =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="tn-city-section" ref={sectionRef}>

      <h2 className="tn-title">Our Locations</h2>

      <input
        type="text"
        className="city-search"
        placeholder="Search location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="location-grid">
        {filtered.map((loc, i) => (
          <div
            key={i}
            className="location-card"
            onClick={() => goToCityPage(loc)}
          >
            <div className="location-icon">📍</div>
            <div className="location-text">{loc}</div>
          </div>
        ))}
      </div>

    </section>
  );
}