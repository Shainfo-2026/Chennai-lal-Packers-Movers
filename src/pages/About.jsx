import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import MissionVision from "../components/About/MissionVision";
import ChooseWe from "../components/About/ChooseWe";
import WhyChooseUsSection from "../components/About/WhyChooseUsSection";
import WhyDifferent from "../components/About/WhyDifferent";
import WhyChooseSPS from "../components/About/WhyChooseSPS";
import AwardsStripDark from "../components/About/AwardsStripDark";
import KeyHighlights from "../components/About/KeyHighlights";
import StatsWaveStrip from "../components/About/StatsWaveStrip";
import ShiftingProcess from "../components/About/ShiftingProcess";
import AboutSection from "../components/About/AboutSection";
import Testimonials from "../components/About/Testimonials";
import KeynoteTeamSection from "../components/About/KeynoteTeamSection";

import emailjs from "@emailjs/browser";




export default function About() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState("");

  const heroLeftRef = useRef(null);
  const cardRef = useRef(null);
  const featureRefs = useRef([]);

  const handleHeroSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      name: form.name,
      phone: form.phone,
      from: form.from,
      to: form.to,
      service: form.service
    };

    emailjs.send(
      "service_imdmeff",
      "template_fj46ck6",
      templateParams,
      "yxT-hRvX41RhpOdfZ"
    )
  .then(() => {

  setLoading(false);
  setPopup("success");

  // ✅ WhatsApp Message
  const message = `🚚 New Moving Enquiry

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 From: ${form.from}
📍 To: ${form.to}
📦 Service: ${form.service}

Please contact the customer ASAP.`;

  const phoneNumber = "919361046387";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ✅ Open WhatsApp
  window.open(whatsappURL, "_blank");

  // ✅ Reset form
  setForm({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  setTimeout(() => {
    setPopup("");
  }, 3000);

})
    .catch((error) => {

      console.log(error);
      setLoading(false);
      setPopup("error");

      setTimeout(() => {
        setPopup("");
      }, 3000);

    });
  };

  useEffect(() => {

    setTimeout(() => {
      heroLeftRef.current?.classList.add("show");
      cardRef.current?.classList.add("show");

      featureRefs.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => el.classList.add("show"), i * 200);
        }
      });
    }, 300);

const css = `

*{ box-sizing:border-box; }

html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* ================= HERO SECTION ================= */
/* MOBILE FIRST */

.heroq-section{
  min-height:100vh;
  background:
    linear-gradient(rgba(6,34,66,0.75), rgba(6,34,66,0.75)),
    url("/images/truck.png") center/cover no-repeat;

  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:90px 20px 50px;
  gap:40px;
}

/* LEFT CONTENT */

.heroq-left{
  text-align:center;
}

.heroq-left h1{
  font-size:30px;
  font-weight:900;
  line-height:1.25;
  color:#ffffff;
}

.heroq-left h1 span{
  color:#dce8f7;
}

.heroq-left p.sub{
  margin:16px auto 28px;
  font-size:16px;
  color:#ffffff;
  max-width:500px;
}

/* FEATURES */

.heroq-features{
  display:flex;
  flex-direction:column;
  gap:18px;
  text-align:left;
}

.heroq-feature{
  display:flex;
  gap:14px;
  color:#ffffff;
}

.heroq-feature h4{
  font-weight:800;
  margin-bottom:4px;
}

.heroq-icon{
  min-width:42px;
  height:42px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  display:grid;
  place-items:center;
  font-size:18px;
}

/* FORM CARD */

.heroq-card{
  background:rgba(255,255,255,0.95);
  border-radius:20px;
  padding:24px;
  width:100%;
  border:1.5px solid rgba(6,34,66,0.2);
  box-shadow:0 20px 50px rgba(6,34,66,0.25);
  backdrop-filter:blur(10px);
}

.heroq-card h3{
  margin-bottom:16px;
  color:#062242;
  font-weight:900;
  text-align:center;
}

/* FORM */

.heroq-card form{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.heroq-card input,
.heroq-card select{
  padding:14px;
  border-radius:10px;
  border:1.5px solid #062242;
  font-size:15px;
  width:100%;
}

.heroq-btn{
  margin-top:6px;
  padding:15px;
  border:none;
  border-radius:10px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
  font-weight:800;
  font-size:16px;
  cursor:pointer;
}

/* ========================= */
/* 📲 TABLET (768px+) */
/* ========================= */

@media (min-width:768px){

.heroq-section{
  padding:110px 40px 70px;
}

.heroq-left h1{
  font-size:38px;
}

.heroq-left p.sub{
  font-size:17px;
}

.heroq-card{
  max-width:520px;
  margin:auto;
}

}

/* ========================= */
/* 💻 DESKTOP (1024px+) */
/* ========================= */

@media (min-width:1024px){

.heroq-section{
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  padding:120px 6vw 70px;
  gap:60px;
}

.heroq-left{
  text-align:left;
}

.heroq-left h1{
  font-size:48px;
}

.heroq-left p.sub{
  font-size:18px;
}

.heroq-card{
  justify-self:end;
}

}

/* ================= POPUP ================= */

.form-popup{
  position:fixed;
  top:25px;
  left:50%;
  transform:translateX(-50%);
  padding:12px 24px;
  border-radius:8px;
  color:#fff;
  font-weight:700;
  z-index:9999;
}

.form-popup.success{
  background:#2ecc71;
}

.form-popup.error{
  background:#e74c3c;
}

`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <>

 <Helmet>
          <title>Top Home Shifting Chennai Packers Service
 </title>
          <meta
            name="description"
            content="Get to know Chennai Lal Packers Movers, Chennai's top choice for hassle-free packing and shifting. Our story shows proven care for your belongings. Relocate with ease call now!
"
          />
        </Helmet>

      {popup === "success" && (
        <div className="form-popup success">
          Message sent successfully!
        </div>
      )}

      {popup === "error" && (
        <div className="form-popup error">
          Failed to send message!
        </div>
      )}

      <section className="heroq-section">

        <div className="heroq-left fade-left" ref={heroLeftRef}>
          <h1>
            About <span>CHENNAI LAL Packers & Movers</span>
          </h1>

          <p className="sub">
            Trusted relocation company delivering safe, reliable and professional
            moving solutions across India.
          </p>

          <div className="heroq-features">
            {[
              ["🏆", "Years of Experience", "Proven expertise in relocations"],
              ["🌍", "Nationwide Presence", "Serving homes & businesses across India"],
              ["🤝", "Customer First", "Transparency, care and commitment"]
            ].map((item, i) => (
              <div
                key={i}
                className="heroq-feature fade-up"
                ref={(el) => (featureRefs.current[i] = el)}
              >
                <div className="heroq-icon">{item[0]}</div>
                <div>
                  <h4>{item[1]}</h4>
                  <p>{item[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="heroq-card fade-right" ref={cardRef}>
          <h3>Talk to Our Team</h3>

          <form onSubmit={handleHeroSubmit}>

            <input
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Mobile Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="From City"
              required
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
            />

            <input
              placeholder="To City"
              required
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
            />

            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="">Select Service</option>
              <option>House Shifting</option>
              <option>Office Relocation</option>
              <option>Vehicle Transportation</option>
              <option>Godown Shifting</option>
              <option>AC Installation</option>
              <option>Commercial Moves</option>
            </select>

            <button className="heroq-btn" disabled={loading}>
              {loading ? "Sending..." : "Contact Us"}
            </button>

          </form>
        </div>
      </section>

      <WhyChooseUsSection />
      <MissionVision />
      <ChooseWe />
      <WhyDifferent />
      <KeynoteTeamSection />
      <AboutSection />
      <WhyChooseSPS />
      <StatsWaveStrip />
      <AwardsStripDark />
      <ShiftingProcess />
      <KeyHighlights />
      <Testimonials />

    </>
  );
}