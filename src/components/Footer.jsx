import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";
import React from "react";
 function Footer() {
  useEffect(() => {
    const css = `
/* ================= FOOTER ================= */
.sps-footer{
  background:
    linear-gradient(90deg, #062242, #3F6C87);
  border-top:2px solid rgba(255,255,255,0.08);  color:#FFFFFF; /* WHITE TEXT */
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
  line-height:1.8;
  color:#FFFFFF; /* WHITE */
  text-decoration:none;
  font-size:14px;
  margin-bottom:8px;
  transition:0.3s ease;
}

.sps-footer a:hover{
  color:#E0EBF5; /* LIGHT BLUE-WHITE HOVER */
}

/* BOTTOM */
.sps-footer-bottom{
    margin-top:50px;
  padding-top:22px;
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


.sps-footer-address{
  display:flex;
  align-items:flex-start;
  gap:12px;
  margin-top:10px;
  line-height:1.8;
  color:#fff;
  font-size:14px;
}

.sps-footer-address span{
  font-size:18px;
  margin-top:2px;
}

.sps-footer-address div{
  opacity:0.95;
}

.sps-footer-social-icons{
  display:flex;
  gap:14px;
  margin-top:18px;
}

.sps-footer-social-icons a{
  width:44px;
  height:44px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:20px;
  transition:0.3s ease;
  color:#fff;
}

/* INSTAGRAM */
.sps-footer-social-icons a:nth-child(1){
  background:linear-gradient(
    45deg,
    #F58529,
    #DD2A7B,
    #8134AF,
    #515BD4
  );
}

/* FACEBOOK */
.sps-footer-social-icons a:nth-child(2){
  background:#1877F2;
}

/* YOUTUBE */
.sps-footer-social-icons a:nth-child(3){
  background:#FF0000;
}

.sps-footer-social-icons a:hover{
  transform:translateY(-5px) scale(1.05);
  box-shadow:0 10px 22px rgba(0,0,0,0.25);
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
style={{
  marginBottom:"5px",
  filter:"drop-shadow(0 5px 12px rgba(255,255,255,0.12))"
}}          />

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
            📧 chennailalpackersmovers@gmail.com
          </a>

         <div className="sps-footer-address">
  <span>📍</span>

  <div>
    123, Lakshmi Illam, F3, 1st Floor,<br />
    Madurai Veeran Street,<br />
    Kalaivanar Nagar, Padi,<br />
    Chennai – 600050.
  </div>
</div>


<div className="sps-footer-social-icons">

  <a
    href="https://www.instagram.com/chennailal_packers_movers/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61577467547428"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.youtube.com/channel/UCUEzb6FagrUTeO1yvl2cUCQ"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

</div>



        </div>

      </div>

      <div className="sps-footer-bottom">
        © {new Date().getFullYear()} Chennailal Packers & Movers. All rights reserved.
      </div>
    </footer>
  );
}

export default React.memo(Footer);