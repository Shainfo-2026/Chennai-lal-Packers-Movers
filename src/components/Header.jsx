import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
const [serviceOpen, setServiceOpen] = useState(false);
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

/* SERVICES DROPDOWN */
/* ================= PREMIUM DROPDOWN ================= */

/* ================= DROPDOWN ================= */
/* ================= DROPDOWN ================= */

/* ================= DROPDOWN ================= */

.sps-dropdown{
  position:relative;
}

/* DROPDOWN MENU */
/* SERVICES TEXT + ARROW */
.sps-dropdown-btn-wrap{
   display:flex;

  align-items:center;

  justify-content:center;

  gap:6px;

  width:100%;
}

.sps-services-link{
  text-decoration:none !important;

  color:#ffffff !important;

  font-weight:600;

  font-size:15px;

  line-height:1;
}

.sps-dropdown-arrow{
  color:#ffffff;

  cursor:pointer;

  font-size:20px;

  display:flex;

  align-items:center;

  justify-content:center;

  margin-top:2px;

  transition:0.3s ease;
}

.sps-dropdown-arrow:hover{
  transform:rotate(180deg);
}
.sps-dropdown-menu{
  position:absolute;

  top:45px;
  left:0;

  width:250px;

  background:#ffffff;

  border-radius:12px;

  overflow:hidden;

  border:1px solid #dbe4ef;

  box-shadow:
    0 12px 30px rgba(0,0,0,0.15);

  display:flex;
  flex-direction:column;

  z-index:9999;

  animation:dropdownFade 0.25s ease;
}

/* DROPDOWN LINKS */
.sps-dropdown-menu a{
  padding:15px 18px;

  text-decoration:none !important;

  font-size:15px;

  font-weight:600;

  color:#15304D !important;

  background:#ffffff !important;

  border-bottom:1px solid #eef2f7;

  transition:0.25s ease;

  display:block;
}

/* REMOVE LAST BORDER */
.sps-dropdown-menu a:last-child{
  border-bottom:none;
}

/* HOVER */
.sps-dropdown-menu a:hover,
.sps-dropdown-menu a:active{
  background:#15304D !important;

  color:#ffffff !important;

  padding-left:24px;
}

/* ANIMATION */
@keyframes dropdownFade{
  from{
    opacity:0;
    transform:translateY(10px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}

/* ================= MOBILE ================= */

@media(max-width:900px){

  .sps-dropdown{
    width:100%;
    text-align:center;
  }

  .sps-dropdown-menu{
    position:static;

    width:92%;

    margin:12px auto 0 auto;

    border-radius:12px;

    overflow:hidden;
  }

  .sps-dropdown-menu a{
    padding:14px;

    font-size:14px;

    color:#15304D !important;

    background:#ffffff !important;

    -webkit-tap-highlight-color: transparent;

    touch-action: manipulation;

    transition:
      background 0.2s ease,
      color 0.2s ease,
      transform 0.15s ease;
  }

  /* MOBILE TAP EFFECT */
  .sps-dropdown-menu a:active{
    background:#15304D !important;

    color:#ffffff !important;

    transform:scale(0.97);
  }

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
<div className="sps-dropdown">
<div
  className="sps-dropdown-btn-wrap"
  onClick={() => setServiceOpen(!serviceOpen)}
>

  <span className="sps-services-link">
    Location
  </span>

  <span className="sps-dropdown-arrow">
    {serviceOpen ? "▴" : "▾"}
  </span>

</div>

  {serviceOpen && (
    <div className="sps-dropdown-menu">

      <Link
        to="/services/adayar"
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
      >
        Adayar
      </Link>

      <Link
        to="/services/madipakkam"
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
      >
        Madipakkam
      </Link>

      <Link
        to="/services/sholinganallur"
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
      >
        Sholinganallur
      </Link>

      <Link
        to="/services/annanagar"
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
      >
        Annanagar
      </Link>

      <Link
        to="/services/padi"
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
      >
        Padi
      </Link>

    </div>
  )}
</div>        {/* <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link> */}
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