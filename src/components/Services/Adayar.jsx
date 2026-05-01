import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Adayar() {

  const navigate = useNavigate();

  useEffect(() => {

    const css = `

/* ================= RESET ================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ================= VARIABLES ================= */
:root {
  --primary: #062242;
  --secondary: #3F6C87;
  --text: #486C85;
  --white: #ffffff;
}

/* ================= BODY ================= */
body {
  font-family: 'Poppins', sans-serif;
  background: #fff;
  color: var(--text);
  line-height: 1.7;
}

/* ================= HERO ================= */
.madi-top {
  min-height: 320px;
  display: flex;
  align-items: center;
  padding: 40px 6vw;

  background-image: url("/images/about/aadayar.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* desktop */

  position: relative;
}

/* 🔥 MOBILE FIX */
@media (max-width: 600px) {
  .madi-top {
    min-height: 260px;
 background-image: url("/images/about/adayar.png");
     background-position: cover;   /* 👈 KEY FIX */
    // background-position: top;   /* show full image */
    
    padding: 0px 5vw;
  }
}

.madi-top::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.typing-text {
  position: relative;
  color: #fff;
  font-weight: 900;
  font-size: 42px;
  line-height: 1.2;
  max-width: 800px;
  z-index: 2;
}

/* ================= ABOUT ================= */
.madi-about-section {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  padding: 60px 6vw;
  align-items: center;
}

.madi-about-img {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.madi-about-img img {
  width: 100%;
  max-width: 350px;
}

.madi-about-content h2 {
  font-size: 34px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 10px;
}

.madi-about-content h4 {
  font-size: 20px;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 15px;
}

.madi-about-content p {
  font-size: 16px;
  color: var(--text);
  margin-bottom: 12px;
}

/* ================= WAVE ================= */
.madi-wave-section {
  background: var(--primary);
  color: white;
  text-align: center;
  padding: 60px 6vw;
}

.madi-wave-content h2 {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
}

.madi-wave-content p {
text-align:center;
  font-size: 16px;
  opacity: 0.9;
}

/* ================= PACKING ================= */
.packing-section {
  padding: 0px 6vw;
}

.packing-title {
  font-size: 34px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 30px;
  text-align:center;
 
}

.packing-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.packing-text p {
  font-size: 16px;
  color: var(--text);
  margin-bottom: 15px;
}

.packing-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
}

.packing-icon {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.packing-image img {
  width: 100%;
  border-radius: 15px;
}

/* ================= WHY ================= */
.why-section {
  padding: 0px 6vw;
}

.why-title {
  font-size: 32px;
  font-weight: 900;
  color: var(--primary);
  text-align: center;
  margin-bottom: 30px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
   
}

.why-card {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;


  padding: 15px 20px;
  border-radius: 40px;
  display: flex;
  gap: 10px;
  align-items: center;
}

/* ================= HIGHLIGHT ================= */
.madi-highlight-section {
  padding: 60px 6vw;
}

.madi-highlight-box {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

.madi-highlight-box h2 {
  font-size: 30px;
  font-weight: 900;
}

.madi-highlight-box p {
  font-size: 16px;
  margin: 15px 0;
}

.madi-btn {
  background: #FFD166;
  color: var(--primary);
  padding: 12px 25px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 900px) {

  .madi-about-section,
  .packing-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}

/* Mobile */
@media (max-width: 600px) {

  .typing-text {
    font-size: 24px;
    line-height: 1.3;
  }

  .madi-about-content h2 {
    font-size: 24px;
  }

  .packing-title {
    font-size: 24px;
     text-align: center;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .madi-wave-content h2 {
    font-size: 24px;
  }

}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <>

      {/* ===== TOP BANNER ===== */}
      <section className="madi-top">
       <h1 className="typing-text">
Packers and Movers in Adyar 
</h1>
      </section>

      {/* ===== NEXT SECTION (you can continue below) */}
     
      <section className="madi-about-section">

  {/* LEFT IMAGE */}
  <div className="madi-about-img">
    <img src="/images/about/prov.png" alt="Packers and Movers Madipakkam" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="madi-about-content">

    <h2>Professional Packers and Movers in Madipakkam</h2>

    {/* <h4>Reliable, Safe & Hassle-Free Relocation Services</h4> */}

    <p>
    Looking for reliable and professional packers and movers in Madipakkam? Chennailal Packers and Movers is your trusted partner for safe, efficient, and affordable relocation services. Whether you’re moving your home, office, or vehicle, we ensure a hassle-free experience with expert handling and timely delivery.
    </p>

    <p>
      Our trained team uses high-quality materials and proven techniques to guarantee the safety of your belongings. From careful packing to secure transportation, we handle every step with precision and care.
    </p>

  </div>

</section>

{/* secition 3 */}

{/* WHITE SECTION ABOVE */}
<section className="madi-wave-section">

  {/* 🔥 TOP WAVY SHAPE */}
  {/* <div className="wave-top">
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
      <path 
        d="M0,140 C250,220 1200,0 1440,140 L1440,0 L0,0 Z" 
        fill="#609904"
      />
    </svg>
  </div> */}

  {/* ===== CONTENT ===== */}
  <div className="madi-wave-content">

    <h2>Trusted Transport Services in Madipakkam</h2>

    <p>
      At Chennailal Packers and Movers, we offer top-notch transport services in Madipakkam designed to meet diverse moving needs. Our modern fleet of vehicles and experienced drivers ensure your goods reach their destination safely and on time.


    </p>

    <p>
    Whether it’s local shifting within Madipakkam or long-distance relocation, our transport solutions are tailored for reliability, speed, and cost-effectiveness.
    </p>

  </div>

</section>

{/* /* expert*/ }

<section className="packing-section">

  {/* HEADING (LEFT) */}
  <h2 className="packing-title">
   Expert Packing Solutions in Madipakkam & Velachery
  </h2>

  <div className="packing-container">

    {/* LEFT CONTENT */}
    <div className="packing-text">

      <p>
      We specialize in packing solutions in Madipakkam, Velachery, providing customized services for residential and commercial moves. Our packing experts use premium materials like bubble wrap, corrugated boxes, and protective covers to safeguard your valuables.
      </p>

      {/* ICON LIST */}
      <div className="packing-list">

        <div className="packing-item">
          <div className="packing-icon">📦</div>
          <p>Premium packing materials like bubble wrap & corrugated boxes</p>
        </div>

        <div className="packing-item">
          <div className="packing-icon">🛡️</div>
          <p>Safe protection for fragile and valuable items</p>
        </div>

        <div className="packing-item">
          <div className="packing-icon">🚚</div>
          <p>Secure transportation with damage prevention</p>
        </div>

        <div className="packing-item">
          <div className="packing-icon">🏠</div>
          <p>Perfect packing for both home & office relocation</p>
        </div>

      </div>

      {/* <p>
        From fragile items to heavy furniture, we ensure everything is packed securely to prevent damage during transit.
      </p> */}

    </div>

    {/* RIGHT IMAGE */}
    <div className="packing-image">
       <img src="/images/about/trust.png" alt="Packing Services" />
    </div>

  </div>

</section>


{/* separate boxes */}
<section className="why-section">

  {/* HEADING */}
  <h2 className="why-title">
    Why Choose Chennailal Packers and Movers?
  </h2>

  {/* GRID */}
  <div className="why-grid">

    {[
      { icon: "👨‍🔧", text: "Experienced and professional team" },
      { icon: "💰", text: "Affordable pricing with no hidden costs" },
      { icon: "🛡️", text: "Safe and secure handling of goods" },
      { icon: "⏱️", text: "Timely pickup and delivery" },
      { icon: "📦", text: "Customized moving and packing solutions" },
      { icon: "📍", text: "Strong local presence in Madipakkam and Velachery" }
    ].map((item, i) => (

      <div key={i} className="why-card">
        <span className="why-icon">{item.icon}</span>
        <span className="why-text">{item.text}</span>
      </div>

    ))}

  </div>

</section>


    <section className="madi-highlight-section">

      <div className="madi-highlight-box">

        <h2>Your Local Moving Partner You Can Trust</h2>

        <p>
         With years of experience in the industry, Chennailal Packers and Movers has built a reputation for delivering dependable relocation services. We understand the unique needs of customers in Madipakkam and nearby areas, making us the preferred choice for stress-free moving.
        </p>

        {/* BUTTON */}
        <button 
          className="madi-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

      </div>

    </section>
    </>
  );
}