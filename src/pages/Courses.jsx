// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Courses() {

//   const { courseId } = useParams();

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: ""
//   });

//   /* ================= COURSE DATA ================= */

//   const courses = [
//     {
//       id: "seo",
//       title: "SOCIAL MEDIA MARKETING",
//       subtitle:
//         "In recent days, social media has become one of the best techniques for promoting business online. It helps business owners interact directly with customers and increase potential growth opportunities.",
//       image: "/images/truck.png",
//       curriculum: [
//         {
//           title: "Introduction to SEO",
//           topics: [
//             "Overview of SEO",
//             "Evolution of Search Engines",
//             "Importance of SEO"
//           ]
//         },
//         {
//           title: "On-Page SEO",
//           topics: [
//             "Keyword Research",
//             "Meta Tags",
//             "Internal Linking"
//           ]
//         }
//       ],
//       whyRegister: [
//         {
//           title: "Best Industry Trainers",
//           desc: "Learn directly from 10+ Digital Marketing experts with up to 18+ years of experience."
//         },
//         {
//           title: "Interactive & Practical",
//           desc: "100+ hours of hands-on tasks and live projects."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         }
//       ]
//     },

//     {
//       id: "smm",
//       title: "DIGITAL MARKETING",
//       subtitle:
//         "Master Facebook, Instagram & LinkedIn Ads with Live Campaign Execution.",
//       image: "/images/grgl.png",
//       curriculum: [
//         {
//           title: "Introduction to Social Media",
//           topics: [
//             "Platform Overview",
//             "Content Strategy",
//             "Ad Campaign Setup"
//           ]
//         },
//         {
//           title: "Introduction to Social Media",
//           topics: [
//             "Platform Overview",
//             "Content Strategy",
//             "Ad Campaign Setup"
//           ]
//         },
//         {
//           title: "Introduction to Social Media",
//           topics: [
//             "Platform Overview",
//             "Content Strategy",
//             "Ad Campaign Setup"
//           ]
//         },
//         {
//           title: "Introduction to Social Media",
//           topics: [
//             "Platform Overview",
//             "Content Strategy",
//             "Ad Campaign Setup"
//           ]
//         }
//       ],
//        whyRegister: [
//         {
//           title: "Best Industry Trainers",
//           desc: "Learn directly from 10+ Digital Marketing experts with up to 18+ years of experience."
//         },
//         {
//           title: "Interactive & Practical",
//           desc: "100+ hours of hands-on tasks and live projects."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         },
//         {
//           title: "Attend from Anywhere & Save Time",
//           desc: "Learn from anywhere and save up to 120+ hrs of precious time."
//         }
//       ]
//     }
//   ];

//   const course = courses.find(c => c.id === courseId) || courses[0];

//   /* ================= WHATSAPP ================= */

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = `
// New Brochure Request

// Course: ${course.title}
// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// `;

//     const whatsappNumber = "917550057453";
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//     window.location.href = url;

//     setSubmitted(true);
//     setShowForm(false);
//   };

//   /* ================= CSS LOAD ================= */

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = styles;
//     document.head.appendChild(style);
//   }, []);

//   /* ================= SUCCESS ================= */

//   if (submitted) {
//     return (
//       <section className="success-wrapper">
//         <div className="success-box">
//           <h2>Thank You {formData.name}! 😊</h2>
//           <p>Our team will contact you shortly.</p>
//         </div>
//       </section>
//     );
//   }

//   /* ================= FORM ================= */

//   if (showForm) {
//     return (
//       <section className="form-wrapper">
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h3>Download Brochure</h3>
//             <input
//               type="text"
//               placeholder="Your Name"
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <input
//               type="tel"
//               placeholder="Your Phone"
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//             />
//             <button type="submit">Submit & Open WhatsApp</button>
//           </form>
//         </div>
//       </section>
//     );
//   }

//   /* ================= MAIN PAGE ================= */

//   return (
//     <>
//       {/* MODERN HERO */}
//       <section className="modern-hero">

//         <div className="dot-pattern-left"></div>
//   <div className="dot-pattern-right"></div>


//         <div className="modern-container">

//           <div className="modern-left">
//             <h1>{course.title}</h1>
//             <p>{course.subtitle}</p>
//             <button
//               className="modern-btn"
//               onClick={() => setShowForm(true)}
//             >
//               ⬇ Download Brochure
//             </button>
//           </div>

//           <div className="modern-right">
//             <div className="circle-img">
//               <img src={course.image} alt="course" />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* CURRICULUM */}
//    {/* CURRICULUM */}
// <section className="curriculum-section">
//   <h2 className="curriculum-title">What Will You Learn?</h2>

//   <div className="curriculum-wrapper">
//     {course.curriculum.map((module, index) => (
//       <div
//         className={`modern-accordion ${
//           activeIndex === index ? "active" : ""
//         }`}
//         key={index}
//       >
//         <div
//           className="modern-accordion-header"
//           onClick={() =>
//             setActiveIndex(activeIndex === index ? null : index)
//           }
//         >
//           <div className="accordion-left">
//             <span className="accordion-number">
//               {String(index + 1).padStart(2, "0")}
//             </span>
//             <h3>{module.title}</h3>
//           </div>

//           <div className="accordion-icon">
//             {activeIndex === index ? "−" : "+"}
//           </div>
//         </div>

//         <div className="modern-accordion-content">
//           <ul>
//             {module.topics.map((topic, i) => (
//               <li key={i}>{topic}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* WHY REGISTER (SEO ONLY) */}
//       {course.whyRegister && (
//         <section className="why-section">
//           <h2>Why Register?</h2>
//           <div className="why-grid">
//             {course.whyRegister.map((item, i) => (
//               <div key={i} className="why-card">
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
        

        
//       )}
//       {/* CALL TO ACTION BANNER - FOR ALL COURSES */}
// <section className="cta-banner">
//   <div className="cta-container">

//     <div className="cta-image">
//       <img src="/images/trainer.png" alt="Trainer" />
//     </div>

//     <div className="cta-content">
//       <span className="cta-small">HURRY UP!</span>
//       <h2>
//         Limited Seats call us now for Amazing <br />
//         Discounts on Digital Marketing Course – NIDM
//       </h2>
//     </div>

//     <div className="cta-button">
//       <a href="tel:917550057453" className="cta-call-btn">
//         Call Now
//       </a>
//     </div>

//   </div>
// </section>
//     </>
//   );
// }

// /* ================= CSS ================= */

// const styles = `

// /* ================= HERO ================= */

// .modern-hero{
//   padding:10px 8%;
//   position:relative;
//   overflow:hidden;
// }

// .modern-container{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   gap:60px;
//   position:relative;
//   z-index:2;
// }

// .modern-left{
//   flex:1;
// }

// .modern-left h1{
//   font-size:48px;
//   font-weight:800;
//   color:#3c3a59;
//   line-height:1.2;
// }

// .modern-left p{
//   margin:25px 0;
//   font-size:18px;
//   color:#6b6b85;
//   line-height:1.6;
//   max-width:600px;
// }

// .modern-btn{
//   background:#f4c400;
//   padding:14px 30px;
//   border:none;
//   font-weight:600;
//   border-radius:8px;
//   cursor:pointer;
//   transition:0.3s ease;
// }

// .modern-btn:hover{
//   transform:translateY(-3px);
// }

// .modern-right{
//   flex:1;
//   display:flex;
//   justify-content:center;
// }

// .circle-img{
//   width:420px;
//   height:420px;
//   border-radius:50%;
//   overflow:hidden;
// }

// .circle-img img{
//   width:100%;
//   height:100%;
//   object-fit:cover;
// }

// /* ================= DOT PATTERNS ================= */

// .dot-pattern-left{
//   position:absolute;
//   top:120px;
//   left:50%;
//   width:160px;
//   height:160px;
//   background-image: radial-gradient(#cfcfd8 1px, transparent 1px);
//   background-size: 18px 18px;
//   opacity:0.5;
// }

// .dot-pattern-right{
//   position:absolute;
//   bottom:100px;
//   right:8%;
//   width:180px;
//   height:180px;
//   background-image: radial-gradient(#b6e3d6 2px, transparent 2px);
//   background-size: 18px 18px;
//   opacity:0.6;
// }

// /* ================= CURRICULUM ================= */

// .curriculum-section{
//   padding:8px 8%;
// }

// .curriculum-title{
//   font-size:36px;
//   font-weight:800;
//   margin-bottom:50px;
// }

// .curriculum-wrapper{
//   max-width:900px;
// }

// .modern-accordion{
//   background:#ffffff;
//   border-radius:14px;
//   margin-bottom:20px;
//   overflow:hidden;
//   box-shadow:0 12px 30px rgba(0,0,0,0.06);
//   transition:all 0.3s ease;
//   border-left:4px solid transparent;
// }

// .modern-accordion.active{
//   border-left:4px solid #4c6ef5;
//   transform:translateY(-3px);
// }

// .modern-accordion-header{
//   padding:20px 25px;
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
//   cursor:pointer;
// }

// .accordion-left{
//   display:flex;
//   align-items:center;
//   gap:16px;
// }

// .accordion-number{
//   font-weight:700;
//   color:#94a3b8;
//   font-size:14px;
// }

// .modern-accordion-header h3{
//   font-size:18px;
//   font-weight:700;
// }

// .accordion-icon{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   background:#eef2ff;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:700;
//   color:#4c6ef5;
// }

// .modern-accordion-content{
//   max-height:0;
//   overflow:hidden;
//   transition:max-height 0.4s ease;
//   padding:0 25px;
// }

// .modern-accordion.active .modern-accordion-content{
//   max-height:300px;
//   padding:10px 25px 25px;
// }

// .modern-accordion-content li{
//   margin-bottom:10px;
//   font-size:15px;
//   line-height:1.6;
//   color:#475569;
// }

// /* ================= WHY SECTION ================= */

// .why-section{
//   padding:8px 8%;
// }

// .why-section h2{
//   text-align:center;
//   font-size:38px;
//   font-weight:800;
//   margin-bottom:60px;
//   color:#0f172a;
// }


// .why-grid{
//   display:grid;
//   grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
//   gap:40px;
// }

// .why-card{
//   background:#ffffff;
//   padding:50px 35px;
//   border-radius:24px;
//   box-shadow:0 20px 40px rgba(0,0,0,0.06);
//   text-align:center;
//   transition:0.4s ease;
//   position:relative;
//   overflow:hidden;
// }

// /* subtle gradient border effect */
// .why-card::before{
//   content:"";
//   position:absolute;
//   inset:0;
//   border-radius:24px;
//   padding:2px;
//   background:linear-gradient(135deg,#4c6ef5,#15aabf);
//   -webkit-mask:
//      linear-gradient(#fff 0 0) content-box,
//      linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//           mask-composite: exclude;
// }

// .why-card:hover{
//   transform:translateY(-12px);
//   box-shadow:0 30px 60px rgba(0,0,0,0.12);
// }

// .why-card h3{
//   font-size:20px;
//   font-weight:700;
//   margin-bottom:18px;
//   color:#0f172a;
// }

// .why-card p{
//   font-size:15px;
//   line-height:1.7;
//   color:#475569;
// }
// /* ================= FORM ================= */

// .form-wrapper{
//   padding:100px 8%;
// }

// .form-container{
//   display:flex;
//   justify-content:center;
// }

// .form-container form{
//   width:100%;
//   max-width:500px;
//   display:flex;
//   flex-direction:column;
// }

// .form-container input{
//   margin-bottom:15px;
//   padding:14px;
//   border-radius:6px;
//   border:1px solid #ddd;
// }

// .form-container button{
//   padding:14px;
//   background:#f4c400;
//   border:none;
//   border-radius:6px;
//   font-weight:600;
//   cursor:pointer;
// }

// /* ================= SUCCESS ================= */

// .success-wrapper{
//   padding:120px 8%;
//   text-align:center;
// }

// /* ================= CTA BANNER ================= */

// .cta-banner{
//   padding:60px 8%;
//   margin-top:80px;
// }

// .cta-container{
//   background:#f5f6f8;
//   border-radius:16px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   gap:40px;
//   padding:40px;
//   position:relative;
//   overflow:hidden;
// }

// .cta-container::before{
//   content:"";
//   position:absolute;
//   left:0;
//   top:0;
//   height:100%;
//   width:40%;
//   background:linear-gradient(135deg,#4c6ef5,#3b5bdb);
//   clip-path:polygon(0 0, 100% 0, 70% 100%, 0% 100%);
// }

// .cta-image img{
//   height:180px;
// }

// .cta-content{
//   flex:1;
// }

// .cta-content h2{
//   font-size:22px;
//   line-height:1.5;
// }

// .cta-call-btn{
//   display:inline-block;
//   padding:14px 35px;
//   background:linear-gradient(90deg,#4c6ef5,#15aabf);
//   color:#fff;
//   border-radius:8px;
//   font-weight:600;
//   text-decoration:none;
// }

// /* ================= RESPONSIVE ================= */

// @media(max-width:1024px){
//   .modern-container{
//     flex-direction:column;
//     text-align:center;
//   }

//   .modern-left h1{
//     font-size:38px;
//   }

//   .circle-img{
//     width:320px;
//     height:320px;
//   }

//   .cta-container{
//     flex-direction:column;
//     text-align:center;
//   }

//   .cta-container::before{
//     width:100%;
//     clip-path:none;
//     height:120px;
//   }
// }

// @media(max-width:768px){
//   .modern-hero{
//     padding:60px 6%;
//   }

//   .curriculum-section,
//   .why-section,
//   .form-wrapper,
//   .cta-banner{
//     padding:60px 6%;
//   }

//   .modern-left h1{
//     font-size:30px;
//   }

//   .modern-left p{
//     font-size:15px;
//   }

//   .curriculum-title{
//     font-size:26px;
//   }

//   .why-section h2{
//     font-size:26px;
//   }

//   .circle-img{
//     width:260px;
//     height:260px;
//   }

//   .cta-image img{
//     height:130px;
//   }
// }

// `;