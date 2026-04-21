import React, { useEffect, useRef } from "react";


export default function ShiftingProcess() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shift-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ====== SECTION ====== */
.shift-wrap {
  padding:0px 6vw;
  font-family: Inter, sans-serif;
  // background:#ffffff;
  overflow:hidden;
}

/* HEADING */
.shift-title {
  text-align: center;
  font-size: 46px;
  line-height: 1.25;
  font-weight: 900;
  color: #062242;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.shift-visible .shift-title{
  opacity:1;
  transform:translateY(0);
}

.shift-title span {
  color: #3F6C87;
}

/* ===== TIMELINE WRAPPER ===== */
.shift-timeline {
  position: relative;
  padding-left: 90px;
  max-width:1000px;
  margin:auto;
}

/* LINE */
.shift-timeline::before {
  content: "";
  position: absolute;
  left: 40px;
  top: 0;
  width: 6px;
  height: 0;
  border-radius: 20px;
  background: linear-gradient(180deg, #062242, #3F6C87);
  transition:height 1.5s ease;
}

.shift-visible .shift-timeline::before{
  height:100%;
}

/* EACH STEP */
.shift-step {
  display: flex;
  align-items: flex-start;
  gap: 35px;
  margin-bottom: 60px;
  opacity:0;
  transform:translateY(50px);
  transition:0.8s ease;
}

.shift-visible .shift-step{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.shift-visible .shift-step:nth-child(1){ transition-delay:.3s; }
.shift-visible .shift-step:nth-child(2){ transition-delay:.6s; }
.shift-visible .shift-step:nth-child(3){ transition-delay:.9s; }
.shift-visible .shift-step:nth-child(4){ transition-delay:1.2s; }

/* ICON */
.shift-icon-box {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 3px solid #062242;
  box-shadow: 0 0 20px rgba(6, 34, 66, 0.25);
  font-size: 30px;
  transition:0.4s ease;
}

/* Icon hover pop */
.shift-step:hover .shift-icon-box{
  transform:scale(1.15) rotate(8deg);
}

/* CARD */
.shift-card {
  background: #ffffff;
  padding: 28px 32px;
  border-radius: 18px;
  width: 100%;
  box-shadow: 0 15px 45px rgba(6, 34, 66, 0.08);
  border:1px solid rgba(6,34,66,0.08);
  transition:0.4s ease;
}

.shift-step:hover .shift-card{
  transform:translateY(-8px);
  box-shadow:0 25px 65px rgba(6,34,66,0.25);
}

.shift-card-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shift-card-text {
  font-size: 16px;
  color: #486C85;
  line-height: 1.7;
}

/* ===== TABLET ===== */
@media(max-width:900px){
  .shift-timeline{
    padding-left:60px;
  }

  .shift-timeline::before{
    left:25px;
  }

  .shift-title{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .shift-wrap{
    padding:0px 5vw;
  }

  .shift-title{
    font-size:28px;
    margin-bottom:50px;
  }

  .shift-timeline{
    padding-left:40px;
  }

  .shift-timeline::before{
    left:18px;
  }

  .shift-step{
    gap:18px;
    margin-bottom:40px;
  }

  .shift-icon-box{
    width:50px;
    height:50px;
    font-size:22px;
  }

  .shift-card{
    padding:20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const steps = [
    {
      icon: "📋",
      title: "Assign Us Service",
      desc: "Once you approve our quotation, we schedule your shifting service immediately."
    },
    {
      icon: "📦",
      title: "Loading and Packing",
      desc: "We carefully pack and load your belongings with premium packing materials."
    },
    {
      icon: "🚚",
      title: "Transportation Service",
      desc: "Your items are transported safely to the destination with GPS-enabled vehicles."
    },
    {
      icon: "📬",
      title: "Unpacking & Unloading",
      desc: "We unload, unpack, and help arrange your essentials at the new location."
    },
  ];

  return (
    <section className="shift-wrap" ref={sectionRef}>
      <h2 className="shift-title">
        Check Out Our <span>Shifting Process</span>
      </h2>

      <div className="shift-timeline">
        {steps.map((s, i) => (
          <div className="shift-step" key={i}>
            <div className="shift-icon-box">{s.icon}</div>

            <div className="shift-card">
              <div className="shift-card-title">{s.title}</div>
              <div className="shift-card-text">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}