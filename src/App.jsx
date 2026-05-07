import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

// import Adayar from "./components/Services/Adayar.jsx";
import Madipakkam from "./components/Services/Madipakkam.jsx";
import Sholinganallur from "./components/Services/Sholinganallur.jsx";
import Annanagar from "./components/Services/Annanagar.jsx";
import Padi from "./components/Services/Padi.jsx";

import Adayar from "./components/Services/Adayar.jsx";
// import AnnaNagar from "./pages/AnnaNagar";
// import Madipakkam from "./pages/Madipakkam";
// import Kolathur from "./pages/Kolathur";
// import Padi from "./pages/Padi";
// import Coimbatore from "./component/services/Coimbatore";

/* Lazy Load Pages */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MasonryBlog = lazy(() => import("./pages/Blog"));

/* Lazy Load Components */
const Footer = lazy(() => import("./components/Footer"));
const WhatsAppFloat = lazy(() => import("./components/WhatsAppFloat"));
const AssistantPopup = lazy(() => import("./components/AssistantPopup"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Suspense
        fallback={
          <div
            style={{
              padding: "100px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/services/packers-and-movers-in-Adayar" element={<Adayar />} />
          <Route path="/services/packers-and-movers-in-Madipakkam" element={<Madipakkam />} />
          <Route path="/services/packers-and-movers-in-Sholinganallur" element={<Sholinganallur />} />
         <Route path="/services/packers-and-movers-in-Annanagar" element={<Annanagar />} />
         <Route path="/services/packers-and-movers-in-Padi" element={<Padi />} />

          <Route path="/shiftingservices" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<MasonryBlog key="list" />} />
          <Route path="/blog/:id" element={<MasonryBlog key="details" />} />


        

{/* <Route path="/packers-and-movers-in-anna-nagar" element={<AnnaNagar />} />

<Route path="/packers-and-movers-in-madipakkam" element={<Madipakkam />} />

<Route path="/packers-and-movers-in-kolathur" element={<Kolathur />} />

<Route path="/packers-and-movers-in-padi" element={<Padi />} />

<Route path="/packers-and-movers-in-coimbatore" element={<Coimbatore />} /> */}
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <AssistantPopup />
        <WhatsAppFloat />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;