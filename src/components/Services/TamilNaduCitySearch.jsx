import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function TamilNaduCitySearch() {

  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const goContact = () => navigate("/contact");
  const [search, setSearch] = useState("");

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          // stagger animation for city boxes
          const boxes = entry.target.querySelectorAll(".city-box");
          boxes.forEach((box, i) => {
            setTimeout(() => box.classList.add("show"), i * 120);
          });
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===============================
   SECTION
================================ */
.tn-city-section {
  width: 100%;
  padding: 0px 5vw;
  background: linear-gradient(135deg,#062242,#0A304F);
  font-family: Inter, system-ui;
  color: white;
  text-align: center;
  overflow:hidden;
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
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 35px;
}

/* ===============================
   SEARCH BAR
================================ */
.city-search {
  width: 55%;
  max-width: 600px;
  min-width: 260px;
  margin: 0 auto 50px auto;
  padding: 15px 20px;
  border-radius: 14px;
  border: none;
  font-size: 16px;
  outline: none;
  color: #062242;
  background: #ffffff;
  transition: 0.4s ease;
  box-shadow: 0 12px 28px rgba(0,0,0,0.2);
}

.city-search:focus {
  transform: scale(1.03);
  box-shadow: 0 18px 40px rgba(255,255,255,0.25);
}

/* ===============================
   GRID
================================ */
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* ===============================
   CITY BOX
================================ */
.city-box {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 18px;
  padding: 30px 25px;
  text-align: left;
  backdrop-filter: blur(10px);
  transition: all .4s ease;
  opacity:0;
  transform:translateY(40px);
}

.city-box.show{
  opacity:1;
  transform:translateY(0);
}

.city-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0,0,0,0.35);
}

/* ===============================
   TITLE INSIDE BOX
================================ */
.city-title {
  font-size: 18px;
  font-weight: 800;
  color: #A7D4EE;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 8px;
}

/* ===============================
   CITY ITEMS
================================ */
.city-item {
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;
  color: #DCEBFF;
  transition: 0.3s ease;
  padding: 6px 0;
}

.city-item:hover {
  color: #A7D4EE;
  padding-left: 8px;
  text-decoration: underline;
}

.city-highlight {
  color: #FFD166;
  font-weight: 800;
}

/* ===============================
   RESPONSIVE
================================ */

/* Tablet */
@media(max-width:1000px){
  .city-grid{
    grid-template-columns: repeat(2,1fr);
  }
  .city-search{
    width:75%;
  }
}

/* Mobile */
@media(max-width:650px){

  .tn-city-section{
    padding:0px 5vw;
  }

  .tn-title{
    font-size:24px;
  }

  .city-search{
    width:100%;
    margin-bottom:35px;
  }

  .city-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .city-box{
    padding:22px 20px;
  }

  .city-item{
    font-size:14px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  /* ====== CITY LISTS ====== */
  const cities = {
    "Major Cities": [
      "Chennai","Coimbatore","Madurai","Trichy","Salem",
      "Tirunelveli","Erode","Tiruppur","Vellore",
      "Thanjavur","Kanchipuram","Thiruvarur"
    ],
    "Tier 2 & Tier 3 Cities": [
      "Dindigul","Karur","Namakkal","Ariyalur","Nagapattinam",
      "Ramanathapuram","Cuddalore","Thoothukudi","Sivagangai",
      "Virudhunagar","Krishnagiri","Dharmapuri"
    ],
    "All Tamil Nadu Service": [
      "Kanyakumari","Tenkasi","Nilgiris","Ranipet",
      "Chengalpattu","Kallakurichi","Villupuram",
      "Mayiladuthurai","Perambalur","Tiruvannamalai","Tirupattur"
    ]
  };

  const highlight = (text) => {
    if (!search) return text;
    const regex = new RegExp(search, "gi");
    return text.replace(regex, match => 
      `<span class="city-highlight">${match}</span>`
    );
  };

  const filterCities = (list) =>
    list.filter(city =>
      city.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="tn-city-section" ref={sectionRef}>
      
      <h2 className="tn-title">
        Citywise Services — Chennai Lal Packers & Movers
      </h2>

      <input
        type="text"
        className="city-search"
        placeholder="Search your city — Chennai, Coimbatore, Salem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="city-grid">
        {Object.keys(cities).map((group, index) => (
          <div key={index} className="city-box">
            <div className="city-title">{group}</div>

            {filterCities(cities[group]).map((city, i) => (
              <div
                key={i}
                className="city-item"
                onClick={goContact}
                dangerouslySetInnerHTML={{
                  __html: `Packers and Movers in ${highlight(city)}`
                }}
              />
            ))}

            {filterCities(cities[group]).length === 0 && (
              <div style={{ color: "#A7C9E2", marginTop: "10px" }}>
                No matching cities
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}