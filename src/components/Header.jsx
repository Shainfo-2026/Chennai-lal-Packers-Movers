import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const css = `

/* ================= HEADER ================= */
.sps-header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:90px;
  background: linear-gradient(90deg, #15304D 0%, #486C85 100%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  font-family:Inter,system-ui;
  z-index:9999;
  box-shadow:0 10px 30px rgba(21,48,77,0.35);
}

/* ================= LOGO ================= */
.sps-logo{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
  z-index:10001;
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

.sps-nav a,
.sps-dropdown-btn{
  text-decoration:none;
  font-weight:600;
  color:#ffffff;
  font-size:15px;
  position:relative;
  cursor:pointer;
  transition:0.3s ease;
}

.sps-nav a:hover,
.sps-dropdown-btn:hover{
  color:#c7dfff;
}

.sps-nav a.active{
  color:#c7dfff;
}

/* ================= DROPDOWN ================= */
.sps-dropdown{
  position:relative;
}

.sps-dropdown-menu{
  position:absolute;
  top:45px;
  left:0;
  width:320px;
  background:#ffffff;
  border-radius:10px;
  box-shadow:0 20px 40px rgba(0,0,0,0.15);
  display:none;
  flex-direction:column;
  overflow:hidden;
  animation:fadeIn 0.25s ease;
}

.sps-dropdown-menu.show{
  display:flex;
}

.sps-dropdown-menu a{
  padding:14px 18px;
  font-size:14px;
  color:#15304D;
  border-bottom:1px solid #eee;
  text-decoration:none;
  transition:0.3s;
}

.sps-dropdown-menu a:last-child{
  border-bottom:none;
}

.sps-dropdown-menu a:hover{
  background:#f2f6ff;
}

/* animation */
@keyframes fadeIn{
  from{opacity:0; transform:translateY(8px);}
  to{opacity:1; transform:translateY(0);}
}

/* ================= CTA ================= */
.sps-right{
  display:flex;
  align-items:center;
  gap:18px;
  z-index:10001;
}

.sps-cta{
  background: linear-gradient(90deg, #ffffff, #c7dfff);
  color:#15304D;
  padding:10px 18px;
  border-radius:10px;
  font-weight:800;
  text-decoration:none;
  font-size:14px;
  transition:0.3s ease;
  border:none;
}

.sps-cta:hover{
  box-shadow:0 0 18px rgba(199,223,255,0.8);
}

/* ================= HAMBURGER ================= */
.sps-hamburger{
  display:none;
  font-size:32px;
  color:#ffffff;
  cursor:pointer;
}

/* ================= MOBILE ================= */
@media(max-width:900px){

  .sps-nav{
    position:fixed;
    top:90px;
    left:0;
    width:100%;
    background: linear-gradient(180deg, #15304D, #486C85);
    flex-direction:column;
    align-items:center;
    gap:22px;
    padding:30px 0;
    display:none;
  }

  .sps-nav.open{
    display:flex;
  }

  .sps-dropdown-menu{
    position:static;
    width:90%;
    background:#ffffff;
  }

  .sps-hamburger{
    display:block;
    position:absolute;
    right:20px;
    top:28px;
  }

  .sps-right{
    display:none;
  }
}

/* PAGE OFFSET */
.page{
  padding-top:90px;
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
        <img src="/images/loo.png" alt="Chennai Lal Packers & Movers Logo" />
        <div className="sps-logo-text">
          CHENNAI LAL
        </div>
      </Link>

      {/* NAVIGATION */}
      <nav className={`sps-nav ${open ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link>

        {/* COURSES DROPDOWN */}
        {/* <div className="sps-dropdown">
          <div
            className="sps-dropdown-btn"
            onClick={() => setCourseOpen(!courseOpen)}
          >
            Courses ▾
          </div>

          <div className={`sps-dropdown-menu ${courseOpen ? "show" : ""}`}>
            <Link to="/courses/smm" onClick={() => { setOpen(false); setCourseOpen(false); }}>
               Digital Marketing Master (CDMM)
            </Link>
            <Link to="/courses/seo" onClick={() => { setOpen(false); setCourseOpen(false); }}>
              Certified SEO Course
            </Link>
        
          </div>
        </div> */}

        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={() => setOpen(false)}>Blog</Link>
      </nav>

      {/* CTA */}
      <div className="sps-right">
        <a href="tel:9361046387" className="sps-cta">Call Now</a>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="sps-hamburger" onClick={() => setOpen(!open)}>☰</div>

    </header>
  );
}