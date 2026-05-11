import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Ambattur() {

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

  background-image: url("/images/about/amba.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* desktop */

  position: relative;
}

/* 🔥 MOBILE FIX */
@media (max-width: 600px) {
  .madi-top {
    min-height: 260px;
 background-image: url("/images/about/ambat.png");
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
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <>

  <Helmet>
         
          <link
  rel="canonical"
  href="https://www.chennailalpackersmovers.com/services/ambattur"
/>

        </Helmet>
      {/* ===== TOP BANNER ===== */}
      <section className="madi-top">
     <h1 className="typing-text">
Packers & Movers
in Ambattur
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

   <h2>Professional Packers and Movers in Ambattur</h2>

<p>
Looking for professional packers and movers in Ambattur? Chennailal Packers and Movers provides trusted relocation and transport services in Ambattur for residential and commercial customers.
</p>

<p>
We specialize in safe packing, secure transportation, and hassle-free moving services tailored to your requirements. Our experienced relocation team ensures that your belongings are handled carefully from pickup to delivery.
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

   <h2>Professional Transport Services in Ambattur</h2>

<p>
Our transport services in Ambattur are designed to meet the logistics needs of individuals and businesses. We use modern vehicles and trained staff to ensure the safe transportation of goods.
</p>

<p>
We provide transportation for household items, office equipment, industrial materials, commercial goods, furniture, appliances, bikes, and cars with complete safety and timely delivery.
</p>

  </div>

</section>

{/* /* expert*/ }

<section className="packing-section">

  {/* HEADING (LEFT) */}
 <h2 className="packing-title">
Best Packers and Movers in Ambattur
</h2>

  <div className="packing-container">

    {/* LEFT CONTENT */}
    <div className="packing-text">

     <p>
We are committed to delivering high-quality moving services with complete customer satisfaction. As experienced packers and movers in Ambattur, we offer customized solutions for local and long-distance relocation.
</p>
      {/* ICON LIST */}
      <div className="packing-list">

       
<div className="packing-item">
  <div className="packing-icon">🏠</div>
  <p>Safe home shifting and local relocation services</p>
</div>

<div className="packing-item">
  <div className="packing-icon">🏢</div>
  <p>Professional office relocation and intercity moving</p>
</div>

<div className="packing-item">
  <div className="packing-icon">🚗</div>
  <p>Secure vehicle transportation for bikes and cars</p>
</div>

<div className="packing-item">
  <div className="packing-icon">📦</div>
  <p>Packing, unpacking, loading and unloading solutions</p>
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
  { icon: "🛡️", text: "Safe and secure relocation services" },
  { icon: "💰", text: "Affordable and budget-friendly pricing" },
  { icon: "👨‍🔧", text: "Experienced professional moving team" },
  { icon: "⏱️", text: "Timely pickup and delivery services" },
  { icon: "📦", text: "End-to-end packing and transport support" },
  { icon: "📍", text: "Service available across Ambattur and nearby areas" }
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

       <h2>Your Trusted Moving Partner in Ambattur</h2>

<p>
Choose Chennailal Packers and Movers for reliable transport and relocation services in Ambattur. We ensure safe handling, timely transportation, and affordable pricing for every move with complete customer satisfaction.
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