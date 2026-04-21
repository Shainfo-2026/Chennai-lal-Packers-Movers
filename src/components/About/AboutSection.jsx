
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import React, { useEffect, useState, useRef } from "react";


export default function AboutSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.about-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  padding: 0px 6vw;
  align-items: center;
  // background: #ffffff;
  font-family: Inter, sans-serif;
  overflow:hidden;
}

/* ===== LEFT IMAGES ===== */
.about-left {
  position: relative;
  opacity:0;
  transform:translateX(-50px);
  transition:1s ease;
}

.about-visible .about-left{
  opacity:1;
  transform:translateX(0);
}

.about-main-img img {
  width: 100%;
  border-radius: 26px;
  height: 420px;
  object-fit:cover;
  box-shadow:0 25px 60px rgba(6,34,66,0.15);
}

.about-small-img {
  position: absolute;
  bottom: -60px;
  right: 20px;
  width: 40%;
  border-radius: 22px;
  border: 6px solid #062242;
  box-shadow:0 25px 60px rgba(6,34,66,0.25);
  animation: floatSmall 4s ease-in-out infinite;
}

.about-small-img img {
  width: 100%;
  border-radius: 18px;
  height: 320px;
  object-fit:cover;
}

@keyframes floatSmall{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-12px); }
  100%{ transform:translateY(0); }
}

/* ===== RIGHT CONTENT ===== */
.about-right{
  opacity:0;
  transform:translateX(50px);
  transition:1s ease;
}

.about-visible .about-right{
  opacity:1;
  transform:translateX(0);
}

.about-top-text {
  font-size: 15px;
  font-weight: 700;
  color: #062242;
  letter-spacing: 1px;
}

.about-title {
  font-size: 46px;
  font-weight: 900;
  margin: 18px 0;
  color: #062242;
  line-height:1.25;
}

.about-desc {
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 40px;
  color: #486C85;
}

/* ===== FEATURES ===== */
.about-feature {
  display: flex;
  gap: 18px;
  margin-bottom: 28px;
  align-items: center;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.about-visible .about-feature{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.about-visible .about-feature:nth-child(4){ transition-delay:.3s; }
.about-visible .about-feature:nth-child(5){ transition-delay:.6s; }

.feature-icon-box {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg,#062242,#3F6C87);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  transition:0.4s ease;
}

.about-feature:hover .feature-icon-box{
  transform:scale(1.15) rotate(8deg);
}

.feature-title {
  font-size: 21px;
  font-weight: 800;
  color: #062242;
}

.feature-text {
  font-size: 15px;
  color: #486C85;
  margin-top: 6px;
}

/* ===== TABLET ===== */
@media(max-width: 950px) {

  .about-wrap {
    grid-template-columns: 1fr;
    gap:60px;
  }

  .about-left {
    margin-bottom: 40px;
  }

  .about-small-img {
    position: relative;
    width: 70%;
    bottom: -20px;
    right: 0;
    margin: auto;
  }

  .about-title{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width: 600px) {

  .about-wrap{
    padding:0px 5vw;
  }

  .about-title {
    font-size: 28px;
  }

  .about-desc {
    font-size: 15px;
  }

  .feature-title {
    font-size: 18px;
  }

  .about-main-img img{
    height:380px;
  }

  .about-small-img img{
    height:240px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="about-wrap" ref={sectionRef}>
      
      {/* LEFT SIDE IMAGES */}
      <div className="about-left">
        <div className="about-main-img">
          <img
            src="images/about/best2.webp"
            alt="Relocation team"
          />
        </div>

        <div className="about-small-img">
          <img
            src="images/about/aboutbest.webp"
            alt="Packing service"
          />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="about-right">
        <p className="about-top-text">WHY WE ARE THE BEST</p>

        <h2 className="about-title">
          We Simplify Relocation <br /> with Experience & Care
        </h2>

        <p className="about-desc">
          At CHENNAI LAL Packers & Movers, we make every move stress-free — whether it’s
          your home, office, or vehicle. With trusted service and trained
          professionals, we ensure your belongings are packed safely, transported
          securely, and delivered on time.
        </p>

        <div className="about-feature">
          <div className="feature-icon-box">📈</div>
          <div>
            <h4 className="feature-title">Expert Relocation Team</h4>
            <p className="feature-text">
              Our trained team ensures every shift is handled with care.
            </p>
          </div>
        </div>

        <div className="about-feature">
          <div className="feature-icon-box">💰</div>
          <div>
            <h4 className="feature-title">Affordable Pricing</h4>
            <p className="feature-text">
              Enjoy smooth relocation without stretching your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
