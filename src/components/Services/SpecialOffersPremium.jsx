import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SpecialOffersPremium() {

  const navigate = useNavigate();

  /* ================= LOOPING 2-HOUR COUNTDOWN ================= */
  const TWO_HOURS = 2 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(TWO_HOURS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return TWO_HOURS; // reset automatically
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const goToContact = () => {
    navigate("/contact");
  };

  /* ================= CSS ================= */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `

body{
  margin:0;
  font-family:'Segoe UI',sans-serif;
  background:white;
}

/* SECTION */
.offers-section{
  padding:70px 6%;
  text-align:center;
}

/* TIMER */
.timer-banner{
  background:#0b2c4d;
  color:white;
  padding:18px;
  border-radius:12px;
  margin-bottom:50px;
  font-weight:600;
  font-size:18px;
  box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

/* GRID */
.offers-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:30px;
}

/* CARD */
.offer-card{
  position:relative;
  background:linear-gradient(160deg,#0b2c4d,#163e6d);
  color:white;
  padding:50px 25px 40px;
  border-radius:25px;
  min-height:420px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  overflow:hidden;
  transition:0.4s ease;
}

.offer-card:hover{
  transform:translateY(-12px);
  box-shadow:0 20px 45px rgba(11,44,77,0.5);
}

/* SHINE SWIPE EFFECT */
.offer-card::after{
  content:"";
  position:absolute;
  top:-100%;
  left:-50%;
  width:200%;
  height:300%;
  background:linear-gradient(
    120deg,
    transparent 30%,
    rgba(255,255,255,0.25),
    transparent 70%
  );
  transform:rotate(25deg);
  animation:shine 6s infinite;
}

@keyframes shine{
  0%{ top:-120%; }
  100%{ top:120%; }
}

/* RIBBON */
.ribbon{
  position:absolute;
  top:25px;
  left:-55px;
  background:white;
  color:#0b2c4d;
  padding:8px 65px;
  font-size:13px;
  font-weight:bold;
  transform:rotate(-42deg);
  box-shadow:0 0 15px rgba(255,255,255,0.8);
  animation:glowRibbon 2s infinite alternate;
}

/* Ribbon glow animation */
@keyframes glowRibbon{
  from{
    box-shadow:0 0 10px rgba(255,255,255,0.6);
  }
  to{
    box-shadow:0 0 25px rgba(255,255,255,1);
  }
}

/* CONTENT */
.offer-card h3{
  font-size:22px;
  margin-top:40px;
  line-height:1.4;
}

.offer-card p{
  font-size:15px;
  margin-top:15px;
  line-height:1.6;
}

/* BUTTON */
.offer-btn{
  margin-top:25px;
  background:white;
  color:#0b2c4d;
  border:none;
  padding:12px;
  border-radius:30px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.offer-btn:hover{
  background:#f2f2f2;
}

/* TABLET */
@media(max-width:1024px){
  .offers-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

/* MOBILE */
@media(max-width:600px){
  .offers-grid{
    grid-template-columns:repeat(2,1fr);
    gap:20px;
  }

  .offer-card{
    padding:35px 15px 25px;
    min-height:360px;
  }

  .offer-card h3{
    font-size:18px;
  }

  .offer-card p{
    font-size:14px;
  }
}

`;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="offers-section">

      <div className="timer-banner">
        🔥 Limited Time Offer Ends In: {formatTime(timeLeft)}
      </div>

      <div className="offers-grid">

        <div className="offer-card">
          <div className="ribbon">15% OFF</div>
          <h3>Family Relocation Package</h3>
          <p>15% off on complete home shifting.</p>
          <button className="offer-btn" onClick={goToContact}>
            Claim Now
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">Bulk Deal</div>
          <h3>Corporate Client Discount</h3>
          <p>Special rates for bulk business relocations.</p>
          <button className="offer-btn" onClick={goToContact}>
            Get Quote
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">10% OFF</div>
          <h3>First-Time Customer Offer</h3>
          <p>10% discount on your first move.</p>
          <button className="offer-btn" onClick={goToContact}>
            Book Today
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">Seasonal</div>
          <h3>Seasonal Discount</h3>
          <p>Check our current promotions.</p>
          <button className="offer-btn" onClick={goToContact}>
            View Details
          </button>
        </div>

      </div>

    </section>
  );
}
