import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import React, { useEffect, useState, useRef } from "react";

export default function ChooseWe() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("choosewe-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION ================= */
.choosewe-hero {
  // padding: 100px 6vw;
  padding-top:10px;
  font-family: Inter, system-ui;
  // background: #ffffff;
  overflow:hidden;
}

/* ================= GRID ================= */
.choosewe-grid {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* ================= LEFT ================= */
.choosewe-left {
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
}

.choosewe-visible .choosewe-left {
  opacity:1;
  transform:translateX(0);
}

.choosewe-left small {
  display: block;
  font-size: 14px;
  color: #062242;
  font-weight: 800;
  letter-spacing: 2px;
}

/* Animated underline */
.choosewe-underline {
  width: 70px;
  height: 4px;
  margin: 14px 0 30px;
  background: linear-gradient(90deg, #062242, #3F6C87);
  border-radius: 3px;
  transform:scaleX(0);
  transform-origin:left;
  transition:0.8s ease 0.4s;
}

.choosewe-visible .choosewe-underline {
  transform:scaleX(1);
}

.choosewe-left h2 {
  font-size: 48px;
  font-weight: 900;
  color: #062242;
  line-height: 1.25;
  margin-bottom: 28px;
}

.choosewe-sub-heading {
  font-size: 22px;
  font-weight: 800;
  color: #062242;
  margin-bottom: 22px;
}

.choosewe-description {
  font-size: 16px;
  line-height: 1.85;
  color: #486C85;
  max-width: 720px;
}

/* ================= RIGHT IMAGE ================= */
.choosewe-right {
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.choosewe-visible .choosewe-right {
  opacity:1;
  transform:translateX(0);
}

.choosewe-right img {
  width:100%;
  max-width:550px;
  border-radius:24px;
  display:block;
  box-shadow:0 25px 55px rgba(0,0,0,0.15);
  transition:0.5s ease;
  animation:floatImg 5s ease-in-out infinite;
}

/* Floating animation */
@keyframes floatImg {
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-12px); }
  100%{ transform:translateY(0); }
}

/* Hover */
.choosewe-right img:hover {
  transform:scale(1.05);
}

/* ================= TABLET ================= */
@media (max-width:1100px) {
  .choosewe-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .choosewe-left h2 {
    font-size: 36px;
  }

  .choosewe-sub-heading {
    font-size: 20px;
  }

  .choosewe-right img {
    margin:auto;
  }
}

/* ================= MOBILE ================= */
@media (max-width:600px) {

  .choosewe-hero {
    padding:70px 5vw;
  }

  .choosewe-left {
    text-align:center;
  }

  .choosewe-left h2 {
    font-size: 28px;
  }

  .choosewe-description {
    font-size: 15px;
  }

  .choosewe-grid {
    gap:40px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="choosewe-hero" ref={sectionRef}>
      <div className="choosewe-grid">

        {/* LEFT SIDE */}
        <div className="choosewe-left">
          <small>WHY CHOOSE US</small>

          <div className="choosewe-underline"></div>

          <h2>Hire the Best Packers and Movers in India</h2>

          <div className="choosewe-sub-heading">
            We provide the best industrial solutions for our customers to grow for 10+ years.
          </div>

          <p className="choosewe-description">
            CHENNAI LAL Packers & Movers is a renowned service provider for packing and moving 
            households, office furniture, equipment, machinery, industrial goods, and more.
            We are a leader in the relocation industry and serve customers nationwide.
            CHENNAI LAL Packers & Movers is an independent relocation management company ranked among 
            India's leading packers and movers specializing in household & corporate goods 
            transportation with facilities for warehousing and storage.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="choosewe-right">
          <img src="/images/bgserv/hiremini.webp" alt="Packers and Movers" />
        </div>

      </div>
    </section>
  );
}