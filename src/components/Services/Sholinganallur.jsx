import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Sholinganallur() {

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

  background-image: url("/images/about/sholinga.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* desktop */

  position: relative;
}

/* 🔥 MOBILE FIX */
@media (max-width: 600px) {
  .madi-top {
    min-height: 260px;
 background-image: url("/images/about/ss.png");
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

.transport-section-white {
  background: #ffffff;
  padding: 0px 20px;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #062242;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin: 15px 0 30px;
}

/* Highlight Strip */
.highlight-box {
  background: linear-gradient(135deg, #0a3d7a, #062242);
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 40px;
  font-weight: 500;
}

/* Grid Layout */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

/* Service Cards */
.service-box {
  background: #f4f8ff;
  border-radius: 12px;
  padding: 25px;
  text-align: left;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.service-box.dark {
  background: linear-gradient(135deg, #062242, #0a3d7a);
  color: #fff;
}

.service-box:hover {
  transform: translateY(-6px);
}

/* Titles */
.service-box h3 {
  margin-bottom: 15px;
  font-size: 20px;
}

/* List */
.service-box ul {
  list-style: none;
  padding: 0;
}

.service-box ul li {
  margin-bottom: 10px;
  padding-left: 18px;
  position: relative;
  font-size: 15px;
}

.service-box ul li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #0a3d7a;
  font-weight: bold;
}

.service-box.dark ul li::before {
  color: #4da6ff;
}

/* CTA */
.cta-box {
  margin-top: 50px;
}

.cta-box p {
  margin-bottom: 10px;
  font-weight: 500;
}

.cta-btn {
  display: inline-block;
  padding: 12px 25px;
  background: #062242;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s;
}

.cta-btn:hover {
  background: #0a3d7a;
}


.areas-section {
  background: #ffffff;
  padding: 0px 20px;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 30px;
  font-weight: 700;
  color: #062242;
}

.subtitle {
  font-size: 15px;
  color: #666;
  margin: 15px 0 30px;
}

/* Tag Style */
.areas-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.areas-tags span {
  background: #eef4ff;
  color: #062242;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
  border: 1px solid #d6e4ff;
}

.areas-tags span:hover {
  background: #062242;
  color: #fff;
}

/* Cards Layout */
.areas-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

/* Individual Card */
.area-card {
  background: #f8fbff;
  padding: 25px;
  border-radius: 15px;
  text-align: left;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: 0.3s ease;
  border-top: 4px solid #0a3d7a;
}

.area-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.area-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #062242;
}

.area-card p {
  font-size: 14px;
  color: #555;
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <>
   <Helmet>
         
          <link rel="canonical"   href="https://www.chennailalpackersmovers.com/services/sholinganallur"/>

        </Helmet>

      {/* ===== TOP BANNER ===== */}
      <section className="madi-top">
       <h1 className="typing-text">
Packers & Movers
in Sholinganallur 
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

    <h2>Professional Packers and Movers in Sholinganallur</h2>

    {/* <h4>Reliable, Safe & Hassle-Free Relocation Services</h4> */}

    <p>
Looking for professional packers and movers in Solinganallur? Chennailal Packers offers end-to-end packing solutions and transport services in Solinganallur designed to make your relocation smooth, safe, and stress-free.   </p>

    <p>
Whether you're moving your home, office, or commercial goods, our trained team ensures secure packing, careful handling, and timely transportation.  </p>

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

    <h2>Trusted Transport Services in Sholinganallur</h2>

    <p>
    At Chennailal Packers and Movers, we provide high-quality packing solutions in Sholinganallur tailored to your specific needs. Our team uses premium packing materials such as bubble wrap, sturdy cartons, foam sheets, and protective coverings to ensure maximum safety of your belongings.

Whether it’s delicate glassware, electronics, or heavy furniture, our packing specialists ensure everything is securely packed to prevent any damage during transit.


    </p>

  

  </div>

</section>

{/* /* expert*/ }

<section className="packing-section">

  {/* HEADING (LEFT) */}
  <h2 className="packing-title">
Expert Packing Solutions in Sholinganallur  </h2>

  <div className="packing-container">

    {/* LEFT CONTENT */}
    <div className="packing-text">

      <p>
      We specialize in packing solutions in Sholinganallur, providing customized services for residential and commercial moves. Our packing experts use premium materials like bubble wrap, corrugated boxes, and protective covers to safeguard your valuables.
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
      { icon: "👨‍🔧", text: "Perfect packing for both home & office relocation" },
      { icon: "💰", text: "Skilled and verified staff" },
      { icon: "🛡️", text: "Modern packing techniques" },
      { icon: "⏱️", text: "24/7 customer support" },
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

<section class="transport-section-white">
  <div class="container">

    <h2 class="title">Transport Services in Sholinganallur</h2>
    <p class="subtitle">
      Our transport services ensure your goods reach safely, on time, and without hassle.
    </p>

  
    <div class="highlight-box">
      🚚 Reliable transport solutions tailored for local, city, and intercity shifting.
    </div>

  
    <div class="grid-layout">

 
      <div class="service-box">
        <h3>🚚 What We Offer</h3>
        <ul>
          <li>Local shifting within Sholinganallur</li>
          <li>Chennai city transport services</li>
          <li>Intercity relocation</li>
          <li>Dedicated trucks & shared transport</li>
        </ul>
      </div>

    
      <div class="service-box dark">
        <h3>🔒 Why Choose Our Transport?</h3>
        <ul>
          <li>GPS-enabled tracking</li>
          <li>Experienced drivers</li>
          <li>On-time delivery guarantee</li>
        </ul>
      </div>

    </div>

 
  

  </div>
</section>

<section class="areas-section">
  <div class="container">

    <h2 class="title">Areas We Serve Near Sholinganallur</h2>
    <p class="subtitle">
      We cover major locations around Sholinganallur for quick and efficient transport services.
    </p>

  
    <div class="areas-tags">
      <span>Navalur</span>
      <span>Sholinganallur IT Corridor</span>
      <span>Perumbakkam</span>
      <span>Siruseri</span>
      <span>OMR (Old Mahabalipuram Road)</span>
    </div>

 
    <div class="areas-cards">

      <div class="area-card">
        <h3>📍 Fast Local Coverage</h3>
        <p>Quick pickups and delivery within nearby residential and IT zones.</p>
      </div>

      <div class="area-card">
        <h3>🚚 IT Corridor Experts</h3>
        <p>Specialized relocation services for IT professionals and offices.</p>
      </div>

      <div class="area-card">
        <h3>⏱ Same-Day Availability</h3>
        <p>Flexible scheduling for urgent and same-day transport needs.</p>
      </div>

    </div>

  </div>
</section>


    <section className="madi-highlight-section">

      <div className="madi-highlight-box">

        <h2>Your Local Moving Partner You Can Trust</h2>

        <p>
         With years of experience in the industry, Chennailal Packers and Movers has built a reputation for delivering dependable relocation services. We understand the unique needs of customers in Adyar and nearby areas, making us the preferred choice for stress-free moving.
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