import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AnnaNagar() {

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

  background-image: url("/images/about/annna.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* desktop */

  position: relative;
}

/* 🔥 MOBILE FIX */
@media (max-width: 600px) {
  .madi-top {
    min-height: 260px;
 background-image: url("/images/about/anna.png");
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
  padding: 60px 6vw;
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
    text-align:center;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .madi-wave-content h2 {
    font-size: 24px;
  }

}




.transport-pro-section {
  background: #ffffff;
  padding: 0px 20px;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #062242;
}

.subtitle {
  text-align: center;
  color: #666;
  margin: 10px 0 40px;
}

/* Layout */
.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .split-layout {
    grid-template-columns: 1fr;
  }
}

/* BLUE BOX */
.blue-box {
  background: linear-gradient(135deg, #062242, #0a3d7a);
  padding: 30px;
  border-radius: 16px;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: 0.3s ease;
}

.blue-box:hover {
  transform: translateY(-6px);
}

/* Titles */
.blue-box h3 {
  margin-bottom: 20px;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 25px;
  border-left: 2px solid rgba(255,255,255,0.3);
}

.timeline-item {
  margin-bottom: 20px;
  position: relative;
}

.timeline-item span {
  position: absolute;
  left: -9px;
  top: 5px;
  width: 14px;
  height: 14px;
  background: #4da6ff;
  border-radius: 50%;
}

.timeline-item p {
  margin: 0;
  font-size: 15px;
}

/* Description */
.desc {
  font-size: 14px;
  margin-bottom: 20px;
  color: #dbe7ff;
}

/* Features */
.features {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 12px;
  padding-left: 22px;
  position: relative;
  font-size: 15px;
}

.features li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #4da6ff;
  font-weight: bold;
}







.why-checklist-section {
  background: #ffffff;
  padding: 70px 20px;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #062242;
  margin-bottom: 40px;
}

/* Layout */
.checklist-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .checklist-wrapper {
    grid-template-columns: 1fr;
  }
}

/* LEFT PANEL */
.left-panel {
  background: #f4f8ff;
  padding: 30px;
  border-radius: 15px;
}

.left-panel h3 {
  margin-bottom: 20px;
  color: #062242;
}

/* Checklist Items */
.check-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  gap: 15px;
}

.check-item span {
  background: #062242;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.check-item p {
  margin: 0;
  font-size: 15px;
  color: #333;
}

/* RIGHT PANEL */
.right-panel {
  background: linear-gradient(135deg, #062242, #0a3d7a);
  color: #fff;
  padding: 30px;
  border-radius: 15px;
}

.right-panel h3 {
  margin-bottom: 15px;
}

.right-panel p {
  font-size: 14px;
  color: #dbe7ff;
  margin-bottom: 25px;
}

/* Stats */
.stats {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.stats div {
  text-align: center;
}

.stats h4 {
  font-size: 22px;
  margin-bottom: 5px;
}

.stats span {
  font-size: 12px;
  color: #cfe0ff;
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
Packers & Movers
in Anna Nagar
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

    <h2>Professional Packers and Movers in Anna Nagar</h2>

    <h4>Reliable Transport Services in Anna Nagar for Homes & Businesses</h4>

    <p>
  Searching for dependable transport services in Anna Nagar? Chennailal Packers provides fast, secure, and cost-effective transportation solutions for all types of relocation needs.
    </p>

    <p>
     We ensure your goods are delivered safely with professional handling and efficient logistics support.
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

    <h2>Trusted Transport Services in Anna Nagar</h2>

    <p>
     At Chennailal Packers and Movers, we offer top-notch transport services in Anna Nagar designed to meet diverse moving needs. Our modern fleet of vehicles and experienced drivers ensure your goods reach their destination safely and on time.

    </p>

    <p>
Whether it’s local shifting within Anna Nagar or long-distance relocation, our transport solutions are tailored for reliability, speed, and cost-effectiveness.
    </p>

  </div>

</section>

{/* /* expert*/ }

<section className="packing-section">

  {/* HEADING (LEFT) */}
  <h2 className="packing-title">
   Expert Packing Solutions in Anna Nagar
  </h2>

  <div className="packing-container">

    {/* LEFT CONTENT */}
    <div className="packing-text">

      <p>
     We specialize in packing solutions in Anna Nagar, providing customized services for residential and commercial moves. Our packing experts use premium materials like bubble wrap, corrugated boxes, and protective covers to safeguard your valuables.
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


<section class="transport-pro-section">
  <div class="container">

    <h2 class="title">Professional Transport Services in Anna Nagar</h2>
    <p class="subtitle">
      We offer top-rated transport services in Anna Nagar tailored to your needs.
    </p>

    <div class="split-layout">

      <div class="box blue-box">
        <h3>🚛 Our Services Include</h3>

        <div class="timeline">
          <div class="timeline-item">
            <span></span>
            <p>Household shifting transport</p>
          </div>

          <div class="timeline-item">
            <span></span>
            <p>Office relocation transport</p>
          </div>

          <div class="timeline-item">
            <span></span>
            <p>Commercial goods transportation</p>
          </div>

          <div class="timeline-item">
            <span></span>
            <p>Local & long-distance transport</p>
          </div>
        </div>
      </div>

      <div class="box blue-box">
        <h3>🔒 Safe & Secure Moving Experience</h3>
        <p class="desc">
          Your belongings are valuable — we treat them that way.
        </p>

        <ul class="features">
          <li>High-quality packing support (if required)</li>
          <li>Secure loading & unloading</li>
          <li>Damage-minimizing handling techniques</li>
          <li>Timely dispatch & delivery</li>
        </ul>
      </div>

    </div>

  </div>
</section>






<section class="why-checklist-section">
  <div class="container">

    <h2 class="title">Why We Are the Preferred Packers in Anna Nagar</h2>

    <div class="checklist-wrapper">

      <div class="left-panel">
        <h3>🏆 What Makes Us Stand Out</h3>

        <div class="check-item">
          <span>01</span>
          <p>Years of relocation experience</p>
        </div>

        <div class="check-item">
          <span>02</span>
          <p>Dedicated transport fleet</p>
        </div>

        <div class="check-item">
          <span>03</span>
          <p>Affordable pricing plans</p>
        </div>

        <div class="check-item">
          <span>04</span>
          <p>Professional and trained staff</p>
        </div>

        <div class="check-item">
          <span>05</span>
          <p>Customer-first approach</p>
        </div>
      </div>

      <div class="right-panel">
        <h3>🚀 Your Trusted Moving Partner</h3>
        <p>
          We combine experience, efficiency, and customer care to deliver a smooth and stress-free relocation experience every time.
        </p>

        <div class="stats">
          <div>
            <h4>500+</h4>
            <span>Moves Completed</span>
          </div>
          <div>
            <h4>100%</h4>
            <span>Customer Satisfaction</span>
          </div>
          <div>
            <h4>24/7</h4>
            <span>Support</span>
          </div>
        </div>
      </div>

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