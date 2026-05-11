


import React, { Suspense, lazy, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
// import Adayar from "./components/Services/Adayar.jsx";
import Adayar from "../components/Services/Adayar.jsx";
import Madipakkam from "../components/Services/Madipakkam.jsx";
import Annanagar from "../components/Services/Annanagar.jsx";
import Sholinganallur from "../components/Services/Sholinganallur.jsx";
import Padi from "../components/Services/Padi.jsx";
import Ambattur from "../components/Services/Ambattur.jsx";
import Kolathur from "../components/Services/Kolathur.jsx";


// import ServicesHero from "../components/Services/ServicesHero";
import ServicesIntro from "../components/Services/ServicesIntro";
import ServicesShowcase from "../components/Services/ServicesShowcase";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import SkillSection from "../components/Services/SkillSection";
import ProcessTimelineFixed from "../components/Services/ProcessTimelineFixed";

const IndustriesWeServeBalanced = lazy(() =>
  import("../components/Services/IndustriesWeServeBalanced")
);

const SpecialOffersPremium = lazy(() =>
  import("../components/Services/SpecialOffersPremium")
);

// const TamilNaduCitySearch = lazy(() =>
//   import("../components/Services/TamilNaduCitySearch")
// );


export default function Services() {

  const heroRef = useRef(null);

  useEffect(() => {

    /* ===== HERO REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    if (heroRef.current) observer.observe(heroRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== EXCELLENCE HERO ===== */
.sps-excellence {
  min-height:40vh;
  padding:0px 3vw;
  position:relative;
  overflow:hidden;

  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%),
    radial-gradient(circle at 80% 80%, rgba(6,34,66,0.45), transparent 50%),
    linear-gradient(135deg, rgba(6,34,66,0.92), rgba(63,108,135,0.92)),
    url("/images/truck.png") center/cover no-repeat;

  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-family:Inter,system-ui;

  opacity:0;
  transform:translateY(60px);
  transition:1s cubic-bezier(.22,.61,.36,1);
}

/* Reveal */
.sps-excellence.show{
  opacity:1;
  transform:translateY(0);
}

/* Subtle background zoom */
.sps-excellence::before{
  content:"";
  position:absolute;
  inset:0;
  background:url("/images/truck.png") center/cover no-repeat;
  opacity:0.08;
  animation: zoomBg 20s ease-in-out infinite alternate;
}

@keyframes zoomBg{
  from{ transform:scale(1); }
  to{ transform:scale(1.08); }
}

/* MAIN TITLE */
.sps-excellence h1 {
  font-size:64px;
  font-weight:900;
  color:#ffffff;
  letter-spacing:-0.02em;
  position:relative;
  z-index:2;
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp{
  from{ opacity:0; transform:translateY(40px); }
  to{ opacity:1; transform:translateY(0); }
}

/* Highlight word */
.sps-excellence h1 span {
  background: linear-gradient(90deg,#ffffff,#A7D4EE,#ffffff);
  background-size:200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s linear infinite;
}

/* Animated shimmer */
@keyframes shimmer{
  from{ background-position:0% center; }
  to{ background-position:200% center; }
}

/* ===== RESPONSIVE ===== */

/* Tablet */
@media(max-width:900px){

  .sps-excellence{
    padding:90px 5vw;
    min-height:70vh;
  }

  .sps-excellence h1{
    font-size:42px;
  }
}

/* Mobile */
@media(max-width:480px){

  .sps-excellence{
    padding:80px 6vw;
    min-height:60vh;
  }

  .sps-excellence h1{
    font-size:32px;
    line-height:1.3;
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

     <Helmet>
          <title>House Shifting Services in Chennai | Chennailal Packers and Movers</title>
          <meta
            name="description"
            content="Professional house shifting services in Chennai with safe packing, loading, transportation, and doorstep delivery at affordable prices. "
          />
         <link rel="canonical" href="https://www.chennailalpackersmovers.com/services" />
        </Helmet>


      <section className="sps-excellence" ref={heroRef}>
        <h1>
          Professional Packers & Movers <br />
          <span>Complete Relocation Solutions.</span>
          
        </h1>
      </section>

      <ServicesIntro />
      <ServicesShowcase />
      <WhyChooseUs />
      <SkillSection />
      <ProcessTimelineFixed />
            <Suspense fallback={<div style={{ minHeight: "400px" }}></div>}>

      <IndustriesWeServeBalanced />
   <SpecialOffersPremium />

   {/* <TamilNaduCitySearch /> */}
 
         </Suspense>
    </>
  );
}