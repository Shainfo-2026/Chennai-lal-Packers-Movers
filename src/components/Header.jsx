import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const css = `

/* ================= HEADER ================= */
.sps-header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:75px;
  background:linear-gradient(90deg,#15304D 0%,#486C85 100%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  font-family:Inter,system-ui;
  z-index:1000;
  box-shadow:0 10px 30px rgba(21,48,77,0.35);
}

/* ================= LOGO ================= */
.sps-logo{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
}

.sps-logo img{
  height:55px;
  width:auto;
  object-fit:contain;
}

.sps-logo-text{
  font-size:18px;
  font-weight:900;
  background:linear-gradient(90deg,#ffffff,#c7dfff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ================= NAV ================= */
.sps-nav{
  display:flex;
  gap:32px;
  align-items:center;
}

.sps-nav a{
  text-decoration:none;
  font-weight:600;
  color:#ffffff;
  font-size:15px;
  transition:0.3s ease;
}

.sps-nav a:hover,
.sps-nav a.active{
  color:#c7dfff;
}

/* ================= CTA ================= */
.sps-right{
  display:flex;
  align-items:center;
}

.sps-cta{
  background:linear-gradient(90deg,#ffffff,#c7dfff);
  color:#15304D;
  padding:10px 18px;
  border-radius:10px;
  font-weight:800;
  text-decoration:none;
  font-size:14px;
}

/* ================= HAMBURGER ================= */
.sps-hamburger{
  display:none;
  font-size:32px;
  color:#ffffff;
  cursor:pointer;
  line-height:1;
  user-select:none;
}

/* ================= MOBILE ================= */
@media(max-width:900px){

  .sps-nav{
    position:fixed;
    top:75px;
    left:0;
    width:100%;
    background:linear-gradient(180deg,#15304D,#486C85);
    flex-direction:column;
    align-items:center;
    gap:22px;
    padding:30px 0;
    display:none;
    z-index:999;
  }

  .sps-nav.open{
    display:flex;
  }

  .sps-hamburger{
    display:block;
  }

  .sps-right{
    display:none;
  }

  .sps-logo-text{
    font-size:15px;
  }
}

.page{
  padding-top:75px;
}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sps-header">

      {/* LOGO */}
      <Link to="/" className="sps-logo">
        <img
          src="/images/loo.webp"
          width="160"
          height="55"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          alt="Chennai Lal Packers Movers Logo"
        />
        <div className="sps-logo-text">
          CHENNAI LAL
        </div>
      </Link>

      {/* NAVIGATION */}
      <nav className={`sps-nav ${open ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link>
        <Link to="/shiftingservices" className={isActive("/shiftingservices") ? "active" : ""} onClick={() => setOpen(false)}>Shifting Services</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={() => setOpen(false)}>Blog</Link>
      </nav>

      {/* CTA */}
      <div className="sps-right">
        <a href="tel:+919361046387" className="sps-cta">
          Call Now
        </a>
      </div>

      {/* MOBILE MENU ICON */}
      <div
        className="sps-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </div>

    </header>
  );
}