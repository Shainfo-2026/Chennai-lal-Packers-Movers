import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import AssistantPopup from "./components/AssistantPopup";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
// import BlogDetails from "./pages/BlogDetails";
import MasonryBlog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Header />
       <ScrollToTop />
       <AssistantPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
          {/* <Route path="/courses/:courseId" element={<Courses />} /> */}
       
        <Route path="/servicespage" element={<LandingPage />} />
      
        <Route path="/contact" element={<Contact />} />
<Route path="/blog" element={<MasonryBlog key="list" />} />
<Route path="/blog/:id" element={<MasonryBlog key="details" />} />
   
  
         {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
      </Routes>
        <WhatsAppFloat />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
