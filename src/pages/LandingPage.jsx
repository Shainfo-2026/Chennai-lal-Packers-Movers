import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";


function WhatWeProvide() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("services-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `
* { box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION ================= */
.services-section {
  padding: 6vw;
  padding-top:10px;
  text-align: center;
  // background: #ffffff;
  overflow: hidden;
}

/* TITLE */
.services-title {
  font-size: 42px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 14px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.services-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-subtitle {
  max-width: 680px;
  margin: 0 auto 60px auto;
  color: #486C85;
  font-size: 17px;
  line-height: 1.7;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease 0.2s;
}

.services-visible .services-title,
.services-visible .services-subtitle {
  opacity: 1;
  transform: translateY(0);
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

/* CARD */
.service-card2 {
  position: relative;
  height: 260px;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: 0.5s ease;
  opacity: 0;
  transform: translateY(40px);
}

.services-visible .service-card2 {
  opacity: 1;
  transform: translateY(0);
}

/* ACTIVE (MOBILE TOUCH FEEDBACK) */
.service-card2:active {
  transform: scale(0.98);
}

/* STAGGER */
.services-visible .service-card2:nth-child(1){ transition-delay:0.2s; }
.services-visible .service-card2:nth-child(2){ transition-delay:0.4s; }
.services-visible .service-card2:nth-child(3){ transition-delay:0.6s; }
.services-visible .service-card2:nth-child(4){ transition-delay:0.8s; }
.services-visible .service-card2:nth-child(5){ transition-delay:1s; }
.services-visible .service-card2:nth-child(6){ transition-delay:1.2s; }

/* OVERLAY */
.service-card2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(6,34,66,0.75);
  transition: 0.4s ease;
}

.service-card2:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 20px 45px rgba(0,0,0,0.25);
}

.service-card2:hover::before {
  background: rgba(6,34,66,0.5);
}

/* INNER CONTENT */
.service-inner {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.service-text {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

/* TABLET */
@media(max-width:1100px){
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-title {
    font-size: 34px;
  }
}

/* MOBILE */
@media(max-width:600px){

  .services-section {
    padding: 0px 5vw;
  }

  .services-title {
    font-size: 26px;
  }

  .services-subtitle {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card2 {
    height: 220px;
  }

  .service-text {
    font-size: 18px;
  }
}
`;

  if (!document.getElementById("services-style")) {
  const style = document.createElement("style");
  style.id = "services-style";
  style.innerHTML = css;
  document.head.appendChild(style);
}

    return () => observer.disconnect();

  }, []);

  const services = [
    { title: "House Shifting", img: "/images/bgserv/bghousemini.png" },
     { title: "Commercial Moves", img: "/images/bgserv/bgcommmini.png" },
         { title: "Office Shifting", img: "/images/bgserv/offs.png" },
    { title: "Transportation", img: "/images/bgserv/transmini.png" },
    { title: "Godown Shifting", img: "/images/bgserv/godownmin.png" },
    { title: "AC Installation", img: "/images/bgserv/bgacmini.png" },




  ];

  /* 🔥 Navigate Function */
  const handleNavigate = () => {
    navigate("/services"); // Change this if your route is different
  };

  return (
    <section className="services-section" ref={sectionRef}>

      <h2 className="services-title">
        What We <span>Provide</span>
      </h2>

      <p className="services-subtitle">
        We ensure reliable, safe, and professional moving solutions for homes, offices, and businesses with 100% satisfaction.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
         <div
  key={i}
  className="service-card2"
  onClick={handleNavigate}
>

  <img
    src={s.img}
      loading="eager"
    decoding="async"
    fetchPriority="low"
    width="400"
    height="260"
    alt={s.title}
    className="service-img"
  />

  <div className="service-inner">
    <div className="service-text">{s.title}</div>
  </div>

</div>
        ))}
      </div>

    </section>
  );
}


function WhyChooseUsSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("why-visible");
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const styleId = "why-choose-style";

    if (!document.getElementById(styleId)) {

      const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.why-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;   /* TEXT SIDE BIGGER */
  gap: 80px;
  padding: 80px 6vw;
  align-items: center;
  font-family: Inter, sans-serif;
  overflow:hidden;
}

/* ===== LEFT IMAGES ===== */
.why-left {
  position: relative;
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
}

.why-visible .why-left{
  opacity:1;
  transform:translateX(0);
}

.why-main-img {
  width:100%;
  border-radius:24px;
  box-shadow:0 30px 60px rgba(0,0,0,0.2);
  transition:0.5s ease;
}

.why-main-img:hover{
  transform:scale(1.03);
}

.why-small-img {
  position:absolute;
  bottom:-60px;
  right:-40px;
  width:65%;
  border-radius:18px;
  box-shadow:0 30px 60px rgba(0,0,0,0.25);
  border:6px solid #fff;
  animation:floatImg 5s ease-in-out infinite;
}

@keyframes floatImg{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-15px); }
  100%{ transform:translateY(0); }
}

/* ===== RIGHT CONTENT ===== */
.why-right{
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.why-visible .why-right{
  opacity:1;
  transform:translateX(0);
}

.why-top-text {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #062242;
  margin-bottom:12px;
}
 
.why-title {
  font-size: 46px;
  font-weight: 900;
  margin-bottom:18px;
  color: #062242;
  line-height:1.25;
}

.why-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #486C85;
}

/* ===== CHECK LIST ===== */
.sps-about-bottom{
  margin-top:30px;
}

.sps-checks{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.sps-check{
  display:flex;
  gap:14px;
  align-items:flex-start;
  font-size:15px;           /* slightly reduced */
  font-weight:600;
  line-height:1.5;          /* better spacing */
  color:#062242;
  max-width:420px;          /* prevents awkward wrap */
  opacity:0;
  transform:translateY(20px);
  transition:0.6s ease;
}

/* Animation Trigger */
.why-visible .sps-check:nth-child(1){ transition-delay:0.3s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(2){ transition-delay:0.5s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(3){ transition-delay:0.7s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(4){ transition-delay:0.9s; opacity:1; transform:translateY(0);}

.sps-check span{
  min-width:24px;
  height:24px;
  border-radius:50%;
  background:#062242;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:14px;
  margin-top:3px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){

  .why-wrap {
    grid-template-columns:1fr;
    gap:60px;
  }

  .why-small-img{
    position:static;
    width:100%;
    margin-top:20px;
  }

  .why-title{
    font-size:34px;
  }

  .sps-check{
    max-width:100%;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .why-wrap{
    padding:70px 5vw;
  }

  .sps-check{
    justify-content:center;
    text-align:left;
  }

  .why-right{
    text-align:center;
  }

  .why-title{
    font-size:28px;
  }
}
`;

      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <section className="why-wrap" ref={sectionRef}>
      
      <div className="why-left">
        <img
          src="/images/tow.webp"
          alt="Relocation team"
          className="why-main-img"
        />

        <img
          src="/images/LEFTTRUCK.jpg"
          alt="Safe Transportation"
          className="why-small-img"
        />
      </div>

      <div className="why-right">
        <p className="why-top-text">CHENNAI LAL PACKERS & MOVERS</p>

        <h2 className="why-title">
          Reliable Packers And Movers <br /> Solutions Saves Your Time!
        </h2>

        <p className="why-desc">
          CHENNAI LAL Packers & Movers is a leading relocation service provider in
          South India, offering safe, reliable, and cost-effective moving
          solutions.
        </p>

        <div className="sps-about-bottom">
          <div className="sps-checks">
            {[
              "Reliable & Secure Moving",
              "Affordable Service Pricing",
              "Timely & Efficient Service",
              "Expert Packing & Handling"
            ].map((text, i) => (
              <div key={i} className="sps-check">
                <span>✓</span>
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}




function WorkProcess() {
  useEffect(() => {
    const css = `
/* ===== WORK PROCESS (IMAGE COLOR BASED) ===== */
.sps-process{
  padding:0px 6vw;
  background:#fff;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* HEADER */
.sps-process-head{
  text-align:center;
  margin-bottom:10px;
}
.sps-process-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#2F5D78;
  margin-bottom:14px;
}
.sps-process-head h2{
  font-size:42px;
  font-weight:900;
  line-height:1.25;
  margin:0;
  color:#102A3A;
}
.sps-process-head h2 span{
  color:#0E2A44;
}

/* STEPS GRID */
.sps-process-steps{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
}

/* STEP */
.sps-step{
  text-align:center;
}

/* CIRCLE */
.sps-step-circle{
  position:relative;
  width:120px;
  height:120px;
  margin:0 auto 22px;
  border-radius:50%;
  border:10px solid rgba(14,42,68,0.35);
  background-color:#0E2A44;
  background-image:
    repeating-radial-gradient(
      rgba(111,163,200,0.35) 0px,
      rgba(14,42,68,0) 60%
    ),
    repeating-radial-gradient(
      rgba(47,93,120,1) 12%,
      rgba(255,255,255,1) 24px
    );
  box-shadow:
    inset 0 12px 18px rgba(255,255,255,0.25),
    inset 0 -8px 14px rgba(0,0,0,0.45),
    0 14px 30px rgba(14,42,68,0.45);
  display:grid;
  place-items:center;
  transform:scale(0.85);
  transition:transform .45s cubic-bezier(.32,0,.15,1);
}

/* HOVER */
.sps-step-circle:hover{
  transform:scale(1);
  cursor:pointer;
  animation:jelly .8s cubic-bezier(.1,.4,.9,.6);
}

/* ICON */
.sps-step-icon{
  font-size:36px;
  color:#EAF4FA;
  z-index:2;
}

/* NUMBER */
.sps-step-num{
  position:absolute;
  bottom:-14px;
  left:50%;
  transform:translateX(-50%);
  width:34px;
  height:34px;
  border-radius:50%;
  background:#fff;
  color:#0E2A44;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:14px;
  box-shadow:0 6px 16px rgba(14,42,68,0.45);
  z-index:3;
}

/* JELLY ANIMATION */
@keyframes jelly {
  from {
    background-size:60px 60px, 24px 24px;
  }
  50% {
    background-size:120px 120px, 100px 100px;
  }
  to {
    background-size:24px 24px, 140px 140px;
  }
}

/* TEXT */
.sps-step h4{
  font-size:18px;
  font-weight:800;
  margin-bottom:10px;
  color:#0E2A44;
}
.sps-step p{
  font-size:14px;
  line-height:1.6;
  color:#5F7F96;
  max-width:260px;
  margin:0 auto;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-process-steps{
    grid-template-columns:repeat(2,1fr);
    gap:50px;
  }
}
@media(max-width:600px){
  .sps-process{
    padding:0px 5vw;
  }
  .sps-process-head h2{
    font-size:32px;
  }
  .sps-process-steps{
    grid-template-columns:1fr;
  }
}
    `;

    if (!document.getElementById("workprocess-style")) {
  const style = document.createElement("style");
  style.id = "workprocess-style";
  style.innerHTML = css;
  document.head.appendChild(style);
}
  }, []);

  return (
    <section className="sps-process">
      <div className="sps-process-head">
        <small>OUR WORK PROFESSIONAL PROCESS</small>
        <h2>
          Reliable moving services built <br />
          <span>around you</span>
        </h2>
      </div>

      <div className="sps-process-steps">
        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📝</div>
            <div className="sps-step-num">1</div>
          </div>
          <h4>Get a Quote</h4>
          <p>Contact Chennailal Packers and Movers for a free customized quote.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📅</div>
            <div className="sps-step-num">2</div>
          </div>
          <h4>Plan Your Move</h4>
          <p>We plan schedules, packing, and transport logistics.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">🛡️</div>
            <div className="sps-step-num">3</div>
          </div>
          <h4>Safe & Secure Moving</h4>
          <p>High-quality packing and trained professionals execute the move.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📦</div>
            <div className="sps-step-num">4</div>
          </div>
          <h4>Unpack & Settle In</h4>
          <p>We help you unload and settle comfortably in your new space.</p>
        </div>
      </div>
    </section>
  );
}



function CustomerSatisfactionTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sps-cust4-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `

/* ================= SECTION ================= */
.sps-cust4-section {
  padding: 10px 6vw;
  font-family: Inter, system-ui;
  background: #f9fbff;
  overflow: hidden;
}

/* ================= LAYOUT ================= */
.sps-cust4-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

/* ================= LEFT CONTENT ================= */
.sps-cust4-left {
  flex: 1;
  opacity: 0;
  transform: translateX(-50px);
  transition: 0.8s ease;
}

.sps-cust4-visible .sps-cust4-left {
  opacity: 1;
  transform: translateX(0);
}

.sps-cust4-title {
  font-size: 42px;
  font-weight: 900;
  color: #1E1B4B;
  margin-bottom: 20px;
}

.sps-cust4-sub {
  font-size: 17px;
  color: #555;
  line-height: 1.8;
}

/* ================= RIGHT GRID ================= */
.sps-cust4-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  opacity: 0;
  transform: translateX(50px);
  transition: 0.8s ease 0.2s;
}

.sps-cust4-visible .sps-cust4-right {
  opacity: 1;
  transform: translateX(0);
}

/* ================= CARD ================= */
.sps-cust4-card {
  background: linear-gradient(135deg, #0f172a, #1e3a8a); /* Dark blue gradient */
  padding: 28px 22px;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: 0.3s ease;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff; /* Text white */
  display: flex;
  align-items: center;
  gap: 14px;
}

.sps-cust4-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
}

/* ICON STYLE */
.sps-cust4-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #ffffff;  /* White background */
  color: #1e3a8a;        /* Blue icon color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  font-weight: bold;
}

/* ================= RESPONSIVE ================= */
@media(max-width:900px){
  .sps-cust4-container {
    flex-direction: column;
    text-align: center;
  }

  .sps-cust4-right {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .sps-cust4-title {
    font-size: 32px;
  }
}

    `;

    if (!document.getElementById("customer-timeline-style")) {
  const style = document.createElement("style");
  style.id = "customer-timeline-style";
  style.innerHTML = css;
  document.head.appendChild(style);
}

    return () => {
  if (sectionRef.current) {
    observer.unobserve(sectionRef.current);
  }
};
  }, []);

  return (
    <section className="sps-cust4-section" ref={sectionRef}>
      <div className="sps-cust4-container">

        {/* LEFT SIDE */}
        <div className="sps-cust4-left">
          <h2 className="sps-cust4-title">
            ⭐ Customer Satisfaction Guaranteed
          </h2>
          <p className="sps-cust4-sub">
            We prioritize safety, speed, and service quality, making us one of
            the most preferred packers and movers in Tamilnadu.
            <br /><br />
            Thousands of customers trust us because of our commitment to
            professionalism, transparency, and reliable support.
          </p>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="sps-cust4-right">

          <div className="sps-cust4-card">
            <div className="sps-cust4-icon">✔</div>
            Consistent Service Quality
          </div>

          <div className="sps-cust4-card">
            <div className="sps-cust4-icon">👨‍🔧</div>
            Reliable Staff
          </div>

          <div className="sps-cust4-card">
            <div className="sps-cust4-icon">💰</div>
            Transparent Pricing
          </div>

          <div className="sps-cust4-card">
            <div className="sps-cust4-icon">⚡</div>
            Fast Response
          </div>

          <div className="sps-cust4-card">
            <div className="sps-cust4-icon">⭐</div>
            Excellent Google Reviews
          </div>

        </div>
      </div>
    </section>
  );
}

 function ChennaiAreas() {

  useEffect(() => {

const css = `

*{box-sizing:border-box}

/* ================= SECTION ================= */

.sps-areas{
  padding:110px 6vw;
  background:
  linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
  position:relative;
  overflow:hidden;
}

/* FLOATING BACKGROUND */

.sps-areas::before{
  content:"";
  position:absolute;
  width:500px;
  height:500px;
  background:radial-gradient(circle,#06224220,transparent 70%);
  top:-150px;
  left:-150px;
  animation:floatArea 12s ease-in-out infinite alternate;
}

@keyframes floatArea{
  from{transform:translateY(0)}
  to{transform:translateY(60px)}
}

/* ================= CONTAINER ================= */

.sps-areas-container{
  max-width:1200px;
  margin:auto;
  text-align:center;
  position:relative;
  z-index:2;
}

/* ================= TITLE ================= */

.sps-areas h2{
  font-size:42px;
  font-weight:900;
  color:#062242;
  margin-bottom:16px;
}

/* SUBTEXT */

.sps-areas-sub{
  max-width:720px;
  margin:auto;
  margin-bottom:55px;
  color:#062242;
  font-size:16px;
  line-height:1.7;
}

/* ================= GRID ================= */

.sps-areas-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:24px;
}

/* ================= AREA CARD ================= */

.sps-area-card{
  background:rgba(255,255,255,0.9);
  backdrop-filter:blur(10px);
  padding:20px 16px;
  border-radius:18px;
  font-weight:800;
  color:#062242;
  border:1px solid rgba(6,34,66,0.15);
  box-shadow:0 15px 30px rgba(6,34,66,0.15);
  transition:all .35s ease;
  cursor:pointer;
  position:relative;
  overflow:hidden;
}

/* ICON */

.sps-area-card::before{
  content:"📍";
  margin-right:6px;
}

/* HOVER EFFECT */

.sps-area-card:hover{
  transform:translateY(-6px) scale(1.03);
  box-shadow:0 25px 50px rgba(6,34,66,0.25);
  background:linear-gradient(135deg,#ffffff,#F7F9FC);
}

/* HOVER GLOW */

.sps-area-card::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:18px;
  opacity:0;
  transition:.35s;
  box-shadow:0 0 25px rgba(6,34,66,.35);
}

.sps-area-card:hover::after{
  opacity:1;
}

/* ================= TABLET ================= */

@media(max-width:1000px){

.sps-areas-grid{
grid-template-columns:repeat(3,1fr);
}

.sps-areas h2{
font-size:34px;
}

}

/* ================= MOBILE ================= */

@media(max-width:650px){

.sps-areas-grid{
grid-template-columns:repeat(2,1fr);
}

.sps-areas{
padding:80px 5vw;
}

.sps-areas h2{
font-size:28px;
}

.sps-area-card{
padding:16px 12px;
font-size:14px;
}

}

`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  const areas = [
    "Anna Nagar",
    "Velachery",
    "Tambaram",
    "Porur",
    "OMR",
    "Sholinganallur",
    "Medavakkam",
    "Pallikaranai",
    "T Nagar",
    "Adyar"
  ];

  return (
    <section className="sps-areas">

      <div className="sps-areas-container">

        <h2>Chennai Service Areas</h2>

        <p className="sps-areas-sub">
          We provide professional packers and movers services across
          all major locations in Chennai with safe packing, fast
          transportation, and reliable relocation support.
        </p>

        <div className="sps-areas-grid">

          {areas.map((area, i) => (
            <div key={i} className="sps-area-card">
              Packers & Movers in {area}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}



function SpecialOffersPremium() {

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




 function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  const [success, setSuccess] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Moving Enquiry

Name: ${form.name}
Phone: ${form.phone}
From: ${form.from}
To: ${form.to}
Service: ${form.service}
`;

    const whatsappURL =
      "https://wa.me/919361046387?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setSuccess(true);

    setForm({
      name: "",
      phone: "",
      from: "",
      to: "",
      service: ""
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* CONTACT SECTION */
.sps-contact{
  padding:100px 6vw;
  background:linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
  position:relative;
  overflow:hidden;
  opacity:0;
  transform:translateY(60px);
  transition:1s ease;
}

.sps-contact.show{
  opacity:1;
  transform:translateY(0);
}

.sps-contact-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:60px;
  align-items:center;
}

.sps-contact-left h2{
  font-size:42px;
  font-weight:900;
  color:#062242;
}

.sps-contact-left p{
  font-size:16px;
  color:#062242;
  line-height:1.7;
  margin:18px 0;
}

.sps-contact-info{
  display:flex;
  flex-direction:column;
  gap:14px;
  margin-top:22px;
  color:#062242;
  font-weight:700;
}

.sps-contact-card{
  background:rgba(255,255,255,0.9);
  backdrop-filter:blur(18px);
  border-radius:22px;
  padding:35px;
  border:1.5px solid rgba(6,34,66,0.2);
  box-shadow:0 30px 60px rgba(6,34,66,0.25);
}

.sps-contact-card h3{
  color:#062242;
  font-weight:900;
  margin-bottom:18px;
}

.sps-contact-card form{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.sps-contact-card input,
.sps-contact-card select{
  padding:15px;
  border-radius:12px;
  border:1.5px solid #B7C4D3;
  font-size:15px;
}

.sps-contact-card input:focus,
.sps-contact-card select:focus{
  outline:none;
  border-color:#062242;
}

.sps-contact-btn{
  margin-top:8px;
  padding:16px;
  border:none;
  border-radius:14px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
  font-weight:900;
  font-size:16px;
  cursor:pointer;
}

.sps-contact-btn:hover{
  transform:translateY(-3px);
}

.sps-success{
  position:fixed;
  bottom:30px;
  right:30px;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  padding:18px 24px;
  border-radius:14px;
  font-weight:800;
  box-shadow:0 15px 35px rgba(6,34,66,.45);
  z-index:9999;
}

@media(max-width:900px){
  .sps-contact-grid{
    grid-template-columns:1fr;
    gap:40px;
  }

  .sps-contact-left h2{
    font-size:32px;
  }
}

@media(max-width:480px){

  .sps-contact{
    padding:80px 5vw;
  }

  .sps-contact-card{
    padding:25px;
  }

  .sps-success{
    right:15px;
    left:15px;
    bottom:20px;
    text-align:center;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Call Chennai Lal Relocation Experts</title>
        <meta
          name="description"
          content="Need help with packing in Chennai? Reach Chennai Lal Packers Movers via phone or email. Get instant quotes and start your smooth relocation right away."
        />
      </Helmet> */}

      <section className="sps-contact" ref={sectionRef}>
        <div className="sps-contact-grid">

          <div className="sps-contact-left">
            <h2>Contact CHENNAI LAL Packers & Movers</h2>

            <p>
              We provide safe, reliable, and affordable packing & moving
              services across India with professional handling and
              transparent pricing.
            </p>

            <div className="sps-contact-info">
              <div>📞 +91 93610 46387</div>
              <div>📍 Pan-India Service</div>
              <div>🕘 Mon – Sun | 8AM – 9PM</div>
            </div>
          </div>

          <div className="sps-contact-card">
            <h3>Get Free Moving Quote</h3>

            <form onSubmit={handleSubmit}>

              <input
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <input
                placeholder="Mobile Number"
                required
                value={form.phone}
                onChange={(e)=>setForm({...form,phone:e.target.value})}
              />

              <input
                placeholder="From City"
                required
                value={form.from}
                onChange={(e)=>setForm({...form,from:e.target.value})}
              />

              <input
                placeholder="To City"
                required
                value={form.to}
                onChange={(e)=>setForm({...form,to:e.target.value})}
              />

              <select
                required
                value={form.service}
                onChange={(e)=>setForm({...form,service:e.target.value})}
              >
                <option value="">Select Service</option>
                <option>House Shifting</option>
                <option>Office Relocation</option>
                <option>Vehicle Transportation</option>
                <option>Godown Shifting</option>
                <option>AC Installation</option>
                <option>Commercial Moves</option>
              </select>

              <button className="sps-contact-btn">
                Submit Enquiry
              </button>

            </form>
          </div>

        </div>
      </section>

      {success && (
        <div className="sps-success">
          ✅ Opening WhatsApp...
        </div>
      )}
    </>
  );
}

function Testimonials() {

  const testimonials = [
    {
      name: "Praveen Kumar",
      text: "The service was excellent! My household items were packed neatly and delivered safely without any damage.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sathya Narayanan",
      text: "Professional team, quick shifting, and very polite staff. Highly recommended for home shifting in Tamilnadu!",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Lakshmi Priya",
      text: "Affordable and reliable packers. My office shifting was done smoothly with zero downtime.",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ===== CSS ===== */

  useEffect(() => {

    const css = `
.sps-testimonial-section{
font-family:Inter,system-ui;
text-align:center;
overflow:hidden;
}

.sps-testimonial-title{
font-size:44px;
font-weight:900;
color:#062242;
margin-bottom:60px;
}

.sps-testimonial-slider{
max-width:800px;
margin:auto;
position:relative;
}

.sps-testimonial-card{
position:relative;
background:white;
border-radius:24px;
padding:60px 40px;
border:2px solid #041953;
box-shadow:0 25px 50px rgba(0,0,0,0.08);
animation:fadeSlide .5s ease;
}

@keyframes fadeSlide{
from{opacity:0;transform:translateY(40px);}
to{opacity:1;transform:translateY(0);}
}

.sps-testimonial-card::before{
content:"“";
position:absolute;
font-size:120px;
color:rgba(6,34,66,0.05);
top:20px;
left:30px;
font-weight:900;
}

.sps-testimonial-img{
width:95px;
height:95px;
border-radius:50%;
overflow:hidden;
margin:auto;
margin-bottom:25px;
border:5px solid #062242;
transition:transform .4s ease;
}

.sps-testimonial-img img{
width:100%;
height:100%;
object-fit:cover;
}

.sps-testimonial-img:hover{
transform:scale(1.1);
}

.sps-testimonial-text{
font-size:17px;
line-height:1.8;
color:#062242;
margin-bottom:25px;
padding:0 10px;
font-weight:500;
}

.sps-testimonial-name{
font-size:18px;
font-weight:800;
color:#062242;
}

.sps-testimonial-controls{
margin-top:35px;
display:flex;
justify-content:center;
gap:25px;
}

.sps-testimonial-btn{
width:50px;
height:50px;
border-radius:50%;
border:none;
cursor:pointer;
font-size:22px;
color:white;
background:linear-gradient(135deg,#062242,#3F6C87);
box-shadow:0 12px 25px rgba(6,34,66,0.3);
transition:.3s;
}

.sps-testimonial-btn:hover{
transform:translateY(-4px);
box-shadow:0 18px 35px rgba(6,34,66,0.4);
}

@media(max-width:600px){

.sps-testimonial-title{
font-size:28px;
margin-bottom:40px;
}

.sps-testimonial-card{
padding:40px 20px;
}

.sps-testimonial-text{
font-size:15px;
}

.sps-testimonial-btn{
width:42px;
height:42px;
font-size:18px;
}

}
`;

    if (!document.getElementById("testimonial-style")) {
      const style = document.createElement("style");
      style.id = "testimonial-style";
      style.innerHTML = css;
      document.head.appendChild(style);
    }

  }, []);

  return (

    <section className="sps-testimonial-section">

      <h2 className="sps-testimonial-title">
        What Our Clients Say
      </h2>

      <div className="sps-testimonial-slider">

        <div className="sps-testimonial-card" key={index}>

          <div className="sps-testimonial-img">
            <img
              src={testimonials[index].img}
              width="95"
              height="95"
              loading="eager"
              decoding="async"
              fetchPriority="low"
              alt={testimonials[index].name}
            />
          </div>

          <p className="sps-testimonial-text">
            “{testimonials[index].text}”
          </p>

          <div className="sps-testimonial-name">
            — {testimonials[index].name}
          </div>

        </div>

        <div className="sps-testimonial-controls">
          <button className="sps-testimonial-btn" onClick={prev}>‹</button>
          <button className="sps-testimonial-btn" onClick={next}>›</button>
        </div>

      </div>

    </section>

  );
}



export default function LandingPage() {

  const navigate = useNavigate();
  const heroRef = useRef(null);

  const [form, setForm] = useState({
    name:"",
    phone:"",
    from:"",
    to:"",
    service:""
  });

  const handleSubmit = (e)=>{
    e.preventDefault();

    const message = `Moving Enquiry

Name: ${form.name}
Phone: ${form.phone}
From: ${form.from}
To: ${form.to}
Service: ${form.service}`;

    const url =
      "https://wa.me/919361046387?text="+
      encodeURIComponent(message);

    window.open(url,"_blank");

    setForm({
      name:"",
      phone:"",
      from:"",
      to:"",
      service:""
    });
  };

  useEffect(()=>{

const css = `

*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,system-ui}

/* HERO */

.hero-container{
width:100%;
min-height:80vh;
padding:70px 8vw;
display:grid;
grid-template-columns:1fr 1fr;
gap:80px;
align-items:center;
background:linear-gradient(180deg,#f7f7f9,#ffffff);
}

/* LEFT */

.hero-content h1{
font-size:52px;
font-weight:900;
color:#122b45;
margin-bottom:20px;
}

.hero-content h1 span{
background:linear-gradient(90deg,#122b45,#5b7f97);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.hero-content p{
font-size:18px;
color:#4a6a83;
max-width:500px;
margin-bottom:30px;
}

.hero-btns{
display:flex;
gap:16px;
margin-bottom:30px;
}

.hero-btn{
padding:14px 28px;
border-radius:10px;
font-weight:700;
cursor:pointer;
border:none;
}

.hero-primary{
background:linear-gradient(90deg,#15304D,#486C85);
color:white;
}

.hero-outline{
border:2px solid #486C85;
background:white;
}

/* BADGES */

.hero-badges{
display:flex;
gap:16px;
flex-wrap:wrap;
}

.hero-badge{
background:white;
padding:10px 18px;
border-radius:30px;
font-size:14px;
font-weight:600;
color:#15304D;
box-shadow:0 6px 14px rgba(0,0,0,0.08);
}

/* FORM CARD */

.hero-form{
background:rgba(255,255,255,0.9);
backdrop-filter:blur(10px);
padding:40px;
border-radius:28px;
box-shadow:0 30px 60px rgba(0,0,0,0.12);
border:1px solid rgba(0,0,0,0.08);
}

/* TITLE */

.hero-form h3{
font-size:26px;
font-weight:900;
color:#102a43;
margin-bottom:25px;
}

/* FORM */

.hero-form form{
display:flex;
flex-direction:column;
gap:18px;
}

/* INPUTS */

.hero-form input,
.hero-form select{
width:100%;
padding:18px;
border-radius:14px;
border:1.5px solid #c6d3df;
font-size:16px;
outline:none;
background:#f9fafc;
transition:0.25s;
}

.hero-form input:focus,
.hero-form select:focus{
border-color:#486C85;
background:white;
}

/* BUTTON */

.hero-form button{
margin-top:10px;
padding:18px;
border-radius:16px;
border:none;
font-size:18px;
font-weight:800;
color:white;
background:linear-gradient(90deg,#0d2a4a,#4d6f86);
cursor:pointer;
transition:0.3s;
}

.hero-form button:hover{
transform:translateY(-2px);
box-shadow:0 12px 20px rgba(0,0,0,0.15);
}

/* MOBILE */

@media(max-width:900px){

.hero-container{
grid-template-columns:1fr;
text-align:center;
gap:50px;
}

.hero-btns{
justify-content:center;
}

.hero-badges{
justify-content:center;
}

.hero-form{
max-width:420px;
margin:auto;
}

.hero-content h1{
font-size:36px;
}

}

`;

    if(!document.getElementById("hero-style")){
      const style=document.createElement("style");
      style.id="hero-style";
      style.innerHTML=css;
      document.head.appendChild(style);
    }

  },[]);

  const handleFreeQuote=()=>navigate("/contact");

  const handleCallNow=()=>{
    window.location.href="tel:+919361046387";
  };

  return(

<>
<section className="hero-container" ref={heroRef}>

{/* LEFT */}

<div className="hero-content">

<h1>
Fast & Safe <span>Relocation Services</span>
</h1>

<p>
Chennai Lal Packers & Movers offers reliable and affordable relocation
solutions across Chennai and major cities across India.
</p>

<div className="hero-btns">

<button
className="hero-btn hero-primary"
onClick={handleFreeQuote}
>
Get Free Quote
</button>

<button
className="hero-btn hero-outline"
onClick={handleCallNow}
>
Call Now
</button>

</div>

<div className="hero-badges">

<div className="hero-badge">✔ Verified Movers</div>

<div className="hero-badge">🚚 Fast Delivery</div>

<div className="hero-badge">🛡 Insurance Available</div>

</div>

</div>


{/* RIGHT FORM */}

<div className="hero-form">

<h3>Get Free Moving Quote</h3>

<form onSubmit={handleSubmit}>

<input
placeholder="Full Name"
required
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Mobile Number"
required
value={form.phone}
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<input
placeholder="From City"
required
value={form.from}
onChange={(e)=>setForm({...form,from:e.target.value})}
/>

<input
placeholder="To City"
required
value={form.to}
onChange={(e)=>setForm({...form,to:e.target.value})}
/>

<select
required
value={form.service}
onChange={(e)=>setForm({...form,service:e.target.value})}
>

<option value="">Select Service</option>
<option>House Shifting</option>
<option>Office Relocation</option>
<option>Vehicle Transportation</option>
<option>Warehouse Shifting</option>

</select>

<button type="submit">
Submit Enquiry
</button>

</form>

</div>

</section>

<WhatWeProvide />
<WhyChooseUsSection />
<WorkProcess />
<CustomerSatisfactionTimeline />
<Testimonials />
<ChennaiAreas />
<SpecialOffersPremium />
<ContactPage />
</>

  );
}