import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/services" element={<Services />} />
          <Route path="/shiftingservices" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<MasonryBlog key="list" />} />
          <Route path="/blog/:id" element={<MasonryBlog key="details" />} />
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