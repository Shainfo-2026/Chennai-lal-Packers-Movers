import React, { useEffect } from "react";


export default function IndustriesWeServeBalanced() {

  useEffect(() => {
    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.sps-industry-wrap{
  padding:70px 20px;
  font-family:Inter,system-ui;
  display:flex;
  justify-content:center;
}

/* ===== CIRCLE WRAPPER ===== */
.sps-industry-circle{
  position:relative;
  width:620px;
  height:620px;
}

/* ===== CENTER ===== */
.sps-industry-center{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:190px;
  height:190px;
  border-radius:50%;
  background:#fff;
  box-shadow:
    0 20px 55px rgba(0,0,0,.15),
    inset 0 0 0 6px rgba(6,34,66,.04);
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:20px;
  font-size:24px;
  font-weight:900;
  line-height:1.25;
  color:#062242;
  z-index:3;
}

/* ===== ITEM ===== */
.sps-industry-item{
  position:absolute;
  width:130px;
  height:130px;
  border-radius:50%;
  background:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size:13px;
  font-weight:800;
  color:#062242;
  box-shadow:0 14px 34px rgba(0,0,0,.12);
  animation:pulseGlow 3.5s ease-in-out infinite;
}

/* ===== ICON ===== */
.sps-industry-icon{
  width:56px;
  height:56px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  color:#fff;
  margin-bottom:6px;
}

/* ===== GLOW ===== */
@keyframes pulseGlow{
  0%{ box-shadow:0 14px 34px rgba(0,0,0,.12); }
  50%{ box-shadow:0 0 26px currentColor; }
  100%{ box-shadow:0 14px 34px rgba(0,0,0,.12); }
}

/* ===== COLORS ===== */
.c1{ color:#4CAF50; } .bg1{ background:#4CAF50; }
.c2{ color:#1976D2; } .bg2{ background:#1976D2; }
.c3{ color:#FF9800; } .bg3{ background:#FF9800; }
.c4{ color:#9C27B0; } .bg4{ background:#9C27B0; }
.c5{ color:#E53935; } .bg5{ background:#E53935; }
.c6{ color:#546E7A; } .bg6{ background:#546E7A; }
.c7{ color:#6D4C41; } .bg7{ background:#6D4C41; }
.c8{ color:#00897B; } .bg8{ background:#00897B; }

/* ===== PERFECT POSITIONS ===== */
.p1{ top:0%; left:50%; transform:translate(-50%,0); }
.p2{ top:18%; left:82%; transform:translate(-50%,-50%); }
.p3{ top:50%; left:100%; transform:translate(-100%,-50%); }
.p4{ top:82%; left:82%; transform:translate(-50%,-50%); }
.p5{ top:100%; left:50%; transform:translate(-50%,-100%); }
.p6{ top:82%; left:18%; transform:translate(-50%,-50%); }
.p7{ top:50%; left:0%; transform:translate(0,-50%); }
.p8{ top:18%; left:18%; transform:translate(-50%,-50%); }

/* ===== RESPONSIVE – SCALE DOWN BUT KEEP CIRCLE ===== */
@media(max-width:900px){
  .sps-industry-circle{
    width:420px;
    height:420px;
  }

  .sps-industry-center{
    width:140px;
    height:140px;
    font-size:18px;
  }

  .sps-industry-item{
    width:95px;
    height:95px;
    font-size:11px;
  }

  .sps-industry-icon{
    width:40px;
    height:40px;
    font-size:18px;
  }
}

@media(max-width:500px){
  .sps-industry-circle{
    width:320px;
    height:320px;
  }

  .sps-industry-center{
    width:110px;
    height:110px;
    font-size:14px;
  }

  .sps-industry-item{
    width:75px;
    height:75px;
    font-size:9px;
  }

  .sps-industry-icon{
    width:30px;
    height:30px;
    font-size:14px;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const industries = [
    { name:"Residential Communities", icon:"🏠", color:"c1", bg:"bg1", pos:"p1" },
    { name:"Corporate Offices", icon:"🏢", color:"c2", bg:"bg2", pos:"p2" },
    { name:"Retail Establishments", icon:"🏬", color:"c3", bg:"bg3", pos:"p3" },
    { name:"Educational Institutions", icon:"🎓", color:"c4", bg:"bg4", pos:"p4" },
    { name:"Healthcare Facilities", icon:"🏥", color:"c5", bg:"bg5", pos:"p5" },
    { name:"Government Organizations", icon:"🏛️", color:"c6", bg:"bg6", pos:"p6" },
    { name:"Manufacturing Units", icon:"🏭", color:"c7", bg:"bg7", pos:"p7" },
    { name:"IT Companies", icon:"💻", color:"c8", bg:"bg8", pos:"p8" }
  ];

  return (
    <section className="sps-industry-wrap">
      <div className="sps-industry-circle">

        <div className="sps-industry-center">
          Industries<br />We Serve
        </div>

        {industries.map((item,i)=>(
          <div
            key={i}
            className={`sps-industry-item ${item.color} ${item.pos}`}
            style={{ animationDelay:`${i * 0.25}s` }}
          >
            <div className={`sps-industry-icon ${item.bg}`}>
              {item.icon}
            </div>
            {item.name}
          </div>
        ))}

      </div>
    </section>
  );
}