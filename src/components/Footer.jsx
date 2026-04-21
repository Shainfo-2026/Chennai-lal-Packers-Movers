import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
 function Footer() {
  useEffect(() => {
    const css = `
/* ================= FOOTER ================= */
.sps-footer{
  background: linear-gradient(90deg, #062242, #3F6C87); /* BLUE GRADIENT BG */
  color:#FFFFFF; /* WHITE TEXT */
  padding:60px 6vw 30px;
  font-family:Inter,system-ui;
}

/* GRID */
.sps-footer-grid{
  display:grid;
  grid-template-columns:2fr 1fr 1fr 1fr;
  gap:40px;
}

/* LOGO / MAIN TITLE */
.sps-footer h3{
  font-size:22px;
  font-weight:900;
  margin-bottom:14px;
  color:#FFFFFF; /* WHITE */
}

/* PARAGRAPHS */
.sps-footer p{
  font-size:14px;
  line-height:1.7;
  color:#FFFFFF; /* WHITE */
}

/* HEADINGS */
.sps-footer h4{
  font-size:16px;
  margin-bottom:14px;
  color:#FFFFFF; /* WHITE */
}

/* LINKS */
.sps-footer a{
  display:block;
  color:#FFFFFF; /* WHITE */
  text-decoration:none;
  font-size:14px;
  margin-bottom:8px;
}

.sps-footer a:hover{
  color:#E0EBF5; /* LIGHT BLUE-WHITE HOVER */
}

/* BOTTOM */
.sps-footer-bottom{
  margin-top:40px;
  padding-top:20px;
  border-top:1px solid rgba(255,255,255,0.35);
  text-align:center;
  font-size:13px;
  color:#FFFFFF; /* WHITE */
}

/* MOBILE */
@media(max-width:900px){
  .sps-footer-grid{
    grid-template-columns:1fr;
    gap:30px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
  
    <footer className="sps-footer">
      <div className="sps-footer-grid">

        {/* ABOUT */}
        <div>
          <img
            src="/images/loo.webp"
            width="150"
            height="150"
            loading="lazy"
            decoding="async"
            alt="Chennailal Packers & Movers Logo"
            style={{ marginBottom: "5px" }}
          />

          <h3>Chennailal Packers & Movers</h3>

          <p>
            Chennailal Packers & Movers provides safe, reliable, and
            professional relocation services for homes, offices, and
            commercial moves across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/shiftingservices">Shifting Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        {/* SERVICES */}
        <nav>
          <h4>Services</h4>

          <Link to="/services">House Shifting</Link>
          <Link to="/services">Office Relocation</Link>
          <Link to="/services">Vehicle Transportation</Link>
          <Link to="/services">Godown Shifting</Link>
          <Link to="/services">AC Installation</Link>
          <Link to="/services">Commercial Moves</Link>
        </nav>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>

          <a
            href="tel:+919361046387"
            aria-label="Call Chennai Lal Packers Movers"
          >
            📞 +91 93610 46387
          </a>

          <a href="mailto:info@chennailalpackers.com">
            📧 info@chennailalpackers.com
          </a>

          <p>📍 Chennai, Tamil Nadu, India</p>
        </div>

      </div>

      <div className="sps-footer-bottom">
        © {new Date().getFullYear()} Chennailal Packers & Movers. All rights reserved.
      </div>
    </footer>
  );
}

export default React.memo(Footer);