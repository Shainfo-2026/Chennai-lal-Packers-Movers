import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Praveen Kumar",
      text: "The service was excellent! My household items were packed neatly and delivered safely without any damage.",
      img: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Sathya Narayanan",
      text: "Professional team, quick shifting, and very polite staff. Highly recommended for home shifting in Tamilnadu!",
      img: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Lakshmi Priya",
      text: "Affordable and reliable packers. My office shifting was done smoothly with zero downtime.",
      img: "https://i.pravatar.cc/150?img=47"
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

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  /* ===== CSS ===== */
  useEffect(() => {
    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-testimonial-section {
  padding: 0px 6vw;
  text-align: center;
  font-family: Inter, system-ui;
  // background:#ffffff;
}

.sps-testimonial-title {
  font-size: 44px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 60px;
  position:relative;
}

.sps-testimonial-title::after{
  content:"";
  width:80px;
  height:4px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  display:block;
  margin:15px auto 0;
  border-radius:4px;
}

/* ===== SLIDER ===== */
.sps-testimonial-slider {
  max-width: 800px;
  margin: auto;
  position: relative;
}

/* ===== CARD ===== */
.sps-testimonial-card {
  border-radius: 28px;
  padding: 60px 40px;
  position: relative;
  color: #fff;
  box-shadow: 0 25px 60px rgba(6,34,66,0.2);
  background: linear-gradient(135deg, #062242, #3F6C87);
  transition: 0.6s ease;
  animation: fadeInSlide .8s ease;
}

@keyframes fadeInSlide{
  from{
    opacity:0;
    transform:translateY(40px) scale(.96);
  }
  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }
}

/* ===== IMAGE ===== */
.sps-testimonial-img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  margin: auto;
  margin-bottom: 25px;
  box-shadow:0 10px 30px rgba(0,0,0,0.2);
  transition:.4s ease;
}

.sps-testimonial-img:hover{
  transform:scale(1.1);
}

.sps-testimonial-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== TEXT ===== */
.sps-testimonial-text {
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 25px;
  padding: 0 10px;
  animation: textFade .8s ease;
}

@keyframes textFade{
  from{opacity:0; transform:translateY(15px);}
  to{opacity:1; transform:translateY(0);}
}

.sps-testimonial-name {
  font-size: 19px;
  font-weight: 700;
  letter-spacing:0.5px;
}

/* ===== CONTROLS ===== */
.sps-testimonial-controls {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.sps-testimonial-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #062242;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  transition: .3s ease;
  box-shadow:0 10px 20px rgba(6,34,66,0.4);
}

.sps-testimonial-btn:hover {
  background: #3F6C87;
  transform: scale(1.1);
}

/* ===== DOTS ===== */
.sps-testimonial-dots{
  margin-top:25px;
  display:flex;
  justify-content:center;
  gap:10px;
}

.sps-dot{
  width:12px;
  height:12px;
  border-radius:50%;
  background:#cbd6df;
  cursor:pointer;
  transition:.3s ease;
}

.sps-dot.active{
  background:#062242;
  transform:scale(1.2);
}

/* ===== RESPONSIVE ===== */
@media(max-width: 768px){

  .sps-testimonial-section{
    padding:0px 5vw;
  }

  .sps-testimonial-title{
    font-size:32px;
  }

  .sps-testimonial-card{
    padding:45px 22px;
  }

  .sps-testimonial-text{
    font-size:15px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section 
      className="sps-testimonial-section"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      
      <h2 className="sps-testimonial-title">What Our Clients Say</h2>

      <div className="sps-testimonial-slider">

        <div className="sps-testimonial-card key={index}">
          
          <div className="sps-testimonial-img">
            <img src={testimonials[index].img} alt="client" />
          </div>

          <p className="sps-testimonial-text">
            “{testimonials[index].text}”
          </p>

          <div className="sps-testimonial-name">
            — {testimonials[index].name}
          </div>

        </div>

        {/* CONTROLS */}
        <div className="sps-testimonial-controls">
          <button className="sps-testimonial-btn" onClick={prev}>‹</button>
          <button className="sps-testimonial-btn" onClick={next}>›</button>
        </div>

        {/* DOTS */}
        <div className="sps-testimonial-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`sps-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}