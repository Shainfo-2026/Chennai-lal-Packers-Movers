import { useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";

export default function MasonryBlog() {
const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState(null);

  /* ================= BLOG DATA (ID BASED) ================= */

  const blogs = [
    {
      id: "id1",
      title: "Best Packers and Movers in Chennai – Chennai Lal Packers & Movers",
      image: "/images/blog221.png",
      date : "5 Jan 2026",
      content: `
      <h2>Best Packers and Movers in Chennai – Chennai Lal Packers & Movers</h2>

      <p>When it comes to relocating your home or office in Chennai, choosing the right packers and movers makes all the difference. At Chennai Lal Packers & Movers, we take pride in being one of the most trusted and efficient relocation service providers in the city.</p>

      <p>Our services include home shifting, office relocation, vehicle transport, loading and unloading, and safe warehousing solutions. Every item is packed using high-quality materials and delivered on time.</p>


      <h2>Top Vehicle Shifting & Office Shifting Services in Chennai</h2>

      <p>Relocation is one of the most stressful tasks. Chennai Lal Packers & Movers stands out as a trusted name offering premium vehicle shifting and office shifting services tailored to customer needs.</p>

     

      <h3>Why Choose Chennai Lal Packers & Movers?</h3>
      <ul>
        <li>Experienced Professionals</li>
        <li>High-Quality Packing Materials</li>
        <li>Affordable & Transparent Pricing</li>
        <li>Door-to-Door Relocation Support</li>
        <li>GPS Tracking Facility</li>
        <li>On-Time Delivery Commitment</li>
        <li>Customer-Centric Service</li>
      </ul>

   

      <h3>Vehicle Shifting Services in Chennai</h3>
      <p>We ensure safe and efficient vehicle shifting for two-wheelers and four-wheelers.</p>

      <h4>Safe & Professional Packaging</h4>
      <ul>
        <li>High-quality wrapping sheets</li>
        <li>Foam padding</li>
        <li>Protective covers</li>
        <li>Tyre blocks & wheel locks</li>
        <li>Rope and belt fasteners</li>
      </ul>

      <h4>Specialized Vehicle Carriers</h4>
      <ul>
        <li>Enclosed carriers</li>
        <li>Open carriers</li>
        <li>Multi-vehicle carriers</li>
        <li>Premium single-car carriers</li>
      </ul>

      

      <h3>Office Shifting Services in Chennai</h3>
      <p>We provide complete office shifting solutions designed to minimize downtime.</p>

      <ul>
        <li>Initial site survey & asset evaluation</li>
        <li>Customized packing strategy</li>
        <li>Timeline planning & logistics coordination</li>
        <li>Secure IT equipment handling</li>
        <li>Furniture dismantling & reinstallation</li>
      </ul>


      <h2>Conclusion</h2>
      <p>Relocation doesn’t have to be stressful when you choose the right partner. Chennai Lal Packers & Movers delivers professional, reliable, and safe shifting services across Chennai and other cities.</p>
      `
    },

   {
  id: "id2",
  title: "Trusted Home & Office Shifting Services in Chennai – Chennai Lal Packers & Movers",
  image: "/images/blog 2222.png",
  date : "28 Jan 2026",
  content: `
    <h2>Trusted Home & Office Shifting Services in Chennai – Chennai Lal Packers & Movers</h2>

    <p>Relocating your home or office requires proper planning and professional support. Chennai Lal Packers & Movers is a trusted name offering safe, efficient, and reliable shifting services across Chennai.</p>

    <p>From careful packing to secure transportation and timely delivery, our team ensures a smooth and stress-free moving experience for every customer.</p>

    <h2>Complete Relocation Solutions in Chennai</h2>

    <p>We provide end-to-end relocation services designed to meet your specific needs. Our systematic approach ensures safety, transparency, and customer satisfaction at every step.</p>

    <h3>Our Core Strengths</h3>
    <ul>
      <li>Well-trained and professional moving team</li>
      <li>Modern tools and advanced packing techniques</li>
      <li>Transparent pricing with no hidden charges</li>
      <li>Dedicated move coordinator support</li>
      <li>Fast response and customer assistance</li>
    </ul>

    <h3>Residential Relocation Services</h3>
    <p>We make home shifting simple and organized with careful planning and secure handling of all household items.</p>

    <h4>Secure Household Packing Process</h4>
    <ul>
      <li>Premium quality carton boxes</li>
      <li>Bubble wrap for fragile items</li>
      <li>Special packaging for glass and electronics</li>
      <li>Systematic labeling for easy unpacking</li>
      <li>Safe loading and unloading procedures</li>
    </ul>

    <h3>Corporate & Commercial Moving Services</h3>
    <p>Our office relocation services ensure minimal disruption to your business operations.</p>

    <ul>
      <li>Pre-move consultation and site inspection</li>
      <li>Organized document and file handling</li>
      <li>Secure packing of IT systems and servers</li>
      <li>Workstation dismantling and reinstallation</li>
      <li>Timely transport and setup support</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Chennai Lal Packers & Movers is committed to delivering trusted, safe, and efficient home and office shifting services in Chennai. Choose us for a smooth relocation experience backed by professionalism and customer satisfaction.</p>
  `
},

    {
  id: "id3",
  title: "Affordable & Secure Shifting Services in Chennai – Chennai Lal Packers & Movers",
  image: "/images/blog123.png",
  date : "14 Feb 2026",
  content: `
    <h2>Affordable & Secure Shifting Services in Chennai – Chennai Lal Packers & Movers</h2>

    <p>When it comes to relocating your home or office in Chennai, choosing affordable & secure shifting services makes all the difference. At Chennai Lal Packers & Movers, we take pride in being one of the most trusted and efficient relocation service providers in the city.</p>

    <p>Our services include home shifting, office relocation, vehicle transport, loading and unloading, and safe warehousing solutions. Every item is packed using high-quality materials and delivered safely and on time, ensuring complete peace of mind.</p>

    <h2>Top Home, Vehicle & Office Shifting Services in Chennai</h2>

    <p>Relocation can be stressful, but with the right moving partner, it becomes simple and hassle-free. Chennai Lal Packers & Movers stands out as a reliable name offering professional and secure shifting services tailored to customer needs and budgets.</p>

    <h3>Why Choose Chennai Lal Packers & Movers?</h3>
    <ul>
      <li>Experienced Professionals</li>
      <li>High-Quality Packing Materials</li>
      <li>Affordable & Transparent Pricing</li>
      <li>Door-to-Door Relocation Support</li>
      <li>GPS Tracking Facility</li>
      <li>On-Time Delivery Commitment</li>
      <li>Customer-Centric Service</li>
    </ul>

    <h3>Vehicle Shifting Services in Chennai</h3>
    <p>We ensure safe and efficient vehicle shifting for two-wheelers and four-wheelers across Chennai and other cities.</p>

    <h4>Safe & Professional Packaging</h4>
    <ul>
      <li>High-quality wrapping sheets</li>
      <li>Foam padding</li>
      <li>Protective covers</li>
      <li>Tyre blocks & wheel locks</li>
      <li>Rope and belt fasteners</li>
    </ul>

    <h4>Specialized Vehicle Carriers</h4>
    <ul>
      <li>Enclosed carriers</li>
      <li>Open carriers</li>
      <li>Multi-vehicle carriers</li>
      <li>Premium single-car carriers</li>
    </ul>

    <h3>Office Shifting Services in Chennai</h3>
    <p>We provide complete office shifting solutions designed to minimize downtime and ensure smooth business transitions.</p>

    <ul>
      <li>Initial site survey & asset evaluation</li>
      <li>Customized packing strategy</li>
      <li>Timeline planning & logistics coordination</li>
      <li>Secure IT equipment handling</li>
      <li>Furniture dismantling & reinstallation</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Relocation doesn’t have to be stressful when you choose the right partner. Chennai Lal Packers & Movers delivers professional, affordable, and secure shifting services across Chennai and other cities with a strong commitment to safety and customer satisfaction.</p>
  `
},
{
  id: "id4",
  title: "Reliable Packing and Moving Services – Lal Packers and Movers Chennai",
  image: "/images/blog44.png",
  date: "20 Feb 2026",
  content: `
  

  <h3>Your Reliable Partner for Stress-Free Shifting – Lal Packers and Movers Chennai</h3>
  <p>Relocating within Chennai or moving to a new city often comes with many responsibilities, from organizing belongings to ensuring safe transportation. Choosing the right moving partner makes all the difference. With professional packers and movers services, Lal Packers and Movers Chennai help simplify the entire process, making relocation more organized and less stressful for families and businesses alike.</p>

  <h3>Understanding Relocation Needs in Chennai</h3>
  <p>Chennai is a fast-growing city with busy neighborhoods, traffic challenges, and diverse housing options ranging from apartments to independent homes. Relocating within areas like Tambaram, Velachery, Anna Nagar, or OMR requires proper planning and local expertise.</p>

  <p>Lal Packers and Movers understand the city’s logistics well, which helps them plan moves efficiently and avoid delays. Their familiarity with Chennai’s routes, apartment regulations, and moving requirements ensures a more organized and timely shifting experience.</p>

  <h3>Professional Packing with Care</h3>
  <p>One of the biggest worries during relocation is the safety of belongings. Lal Packers and Movers Chennai focus on careful packing using quality materials such as bubble wrap, sturdy cartons, and protective covers. Fragile items like glassware, electronics, and décor pieces are handled with extra attention.</p>

  <p>Their team packs items systematically and labels boxes clearly, making unpacking much easier once you reach your new place. This simple but thoughtful process saves time and reduces confusion after the move.</p>

  <h3>Smooth Local Home Shifting in Chennai</h3>
  <p>Whether you’re moving to a bigger home or relocating closer to work, Lal Packers and Movers provide complete home shifting services across Chennai. From packing and loading to transportation and unloading, their team manages the entire process.</p>

  <ul>
    <li>Complete packing and unpacking support</li>
    <li>Safe loading and unloading</li>
    <li>Furniture dismantling and reinstallation</li>
    <li>Secure handling of fragile items</li>
  </ul>

  <h3>Office Relocation Without Disruption</h3>
  <p>Chennai is home to many startups, IT companies, and small businesses, especially in areas like OMR and Guindy. Office relocation needs to be handled carefully to avoid downtime. Lal Packers and Movers Chennai offer organized office shifting services that focus on speed and safety.</p>

  <ul>
    <li>Secure IT equipment handling</li>
    <li>Planned logistics coordination</li>
    <li>Safe document and file transport</li>
    <li>Minimal business interruption</li>
  </ul>

  <h3>Reliable Transportation Across the City</h3>
  <p>Navigating Chennai traffic can be challenging, but Lal Packers and Movers plan routes carefully to ensure timely delivery. Their well-maintained vehicles are suitable for different types of moves, whether it’s a small apartment shift or a large household relocation.</p>

  <h3>Affordable Services with Transparent Pricing</h3>
  <p>Budget is always an important factor when planning a move. Lal Packers and Movers Chennai offer competitive pricing with clear quotations, so customers know exactly what to expect. There are no hidden costs, and services can be customized based on the size of the move and specific requirements.</p>

  <h3>A Customer-Friendly Approach</h3>
  <p>Their team listens to specific needs, whether it’s handling delicate items, scheduling a move on a particular day, or providing quick support. Their friendly and cooperative service style makes the entire relocation journey feel easier and more comfortable.</p>

  <h3>Simple Tips for Moving in Chennai</h3>
  <ul>
    <li>Schedule your move early to avoid last-minute stress</li>
    <li>Declutter and donate items you no longer need</li>
    <li>Keep essentials like documents and chargers separately</li>
    <li>Inform your apartment management in advance</li>
    <li>Choose a trusted local moving company</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Relocation doesn’t have to feel overwhelming when you have experienced professionals by your side. Lal Packers and Movers Chennai combine local expertise, careful handling, and reliable transport to ensure every move is smooth and secure.</p>

  <p>If you’re planning your next move, choosing trusted packers and movers in Chennai can help you experience a hassle-free transition and settle into your new space with complete peace of mind.</p>
  `
},
{
  id: "id5",
  title: "A Complete Guide to Relocating in Chennai with Lal Packers and Movers",
  image: "/images/blog10.png",
  date: "25 Feb 2026",
  content: `

  <h2>A Complete Guide to Relocating in Chennai with Lal Packers and Movers</h2>

  <h3>Introduction</h3>
  <p>Relocation is more than just moving belongings from one place to another — it’s about starting a new chapter. In a dynamic city like Chennai, where traffic, apartment regulations, and busy schedules can complicate shifting, having experienced professionals makes the process much smoother. Lal Packers and Movers Chennai offer reliable support that helps individuals and businesses relocate without unnecessary stress.</p>

  <h3>1. Planning Your Move the Right Way</h3>
  <p>A successful relocation always begins with proper planning. Whether you’re moving within the same locality or to another part of Chennai, creating a checklist helps keep everything organized. Lal Packers and Movers assist customers with pre-move planning, ensuring timelines, packing requirements, and logistics are clearly defined.</p>
  <p>Early planning also helps avoid last-minute issues and ensures a smoother moving day experience.</p>

  <h3>2. Importance of Professional Packing</h3>
  <p>Packing is one of the most critical steps in relocation. Without proper materials and techniques, items can get damaged during transit. Lal Packers and Movers Chennai use high-quality packing supplies such as bubble wrap, foam sheets, and sturdy boxes to protect belongings.</p>
  <p>Their trained team carefully packs fragile items, electronics, and furniture, ensuring everything reaches the destination safely. Proper labeling also makes unpacking quicker and more convenient.</p>

  <h3>3. Local Expertise Across Chennai</h3>
  <p>Every city has its own moving challenges, and Chennai is no exception. From navigating narrow residential streets to coordinating with apartment management, local knowledge plays a key role. Lal Packers and Movers’ familiarity with areas like Velachery, Porur, Tambaram, and OMR allows them to plan routes efficiently and avoid delays.</p>
  <p>This local expertise ensures timely pickups and deliveries, even during busy hours.</p>

  <h3>4. Hassle-Free Home Shifting Services</h3>
  <p>Moving homes involves handling personal belongings with care and attention. Lal Packers and Movers provide complete home shifting solutions, including packing, loading, transportation, unloading, and unpacking.</p>
  <p>Their team also helps with furniture dismantling and reassembly, making the transition easier for families. With professional assistance, customers can focus on settling into their new homes rather than worrying about logistics.</p>

  <h3>5. Efficient Office Relocation</h3>
  <p>Office shifting requires precision and coordination to prevent disruptions. Lal Packers and Movers Chennai offer structured office relocation services designed to minimize downtime. From safely transporting documents to handling office equipment, every step is planned carefully.</p>
  <p>Businesses benefit from quick turnaround times, allowing them to resume operations smoothly.</p>

  <h3>6. Safe Transportation and Timely Delivery</h3>
  <p>Transportation is at the heart of any relocation service. Lal Packers and Movers maintain well-equipped vehicles suitable for different types of moves. Their logistics team ensures proper loading techniques and secure transit, reducing the risk of damage.</p>
  <p>Customers also receive updates during the move, providing reassurance and transparency throughout the process.</p>

  <h3>7. Transparent Pricing and Flexible Packages</h3>
  <p>One of the reasons customers prefer Lal Packers and Movers Chennai is their clear and honest pricing. They provide detailed quotes based on distance, volume of items, and service requirements. Flexible packages allow customers to choose services that match their budget and needs.</p>
  <p>This transparency helps avoid surprises and builds trust with clients.</p>

  <h3>8. Tips for a Stress-Free Moving Day</h3>
  <ul>
    <li>Pack a small essentials bag for the first day</li>
    <li>Inform utility providers about your move</li>
    <li>Keep valuables and documents with you</li>
    <li>Schedule the move during less busy hours</li>
    <li>Double-check all rooms before leaving</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Relocating in Chennai can feel complex, but with the right support, it becomes a smooth and manageable process. Lal Packers and Movers Chennai bring together experience, careful handling, and customer-focused service to make every move efficient and stress-free.</p>

  <p>If you’re planning to relocate, choosing dependable packers and movers in Chennai ensures your belongings are handled safely while you focus on settling into your new environment with confidence.</p>

  `
},

{
  id: "id6",
  title: "Why Lal Packers and Movers Chennai is the Smart Choice for Packers and Movers in Chennai",
  image: "/images/blog9.png",
  date: "3 Mar 2026",
  content: `

  <h2>Why Lal Packers and Movers Chennai is the Smart Choice for Packers and Movers in Chennai</h2>

  <h3>Introduction</h3>
  <p>Moving to a new home or office is a big milestone, but the process behind it can often feel overwhelming. From packing delicate items to coordinating transportation, every step requires careful planning. In a fast-paced city like Chennai, professional support can make all the difference. Lal Packers and Movers Chennai have become a dependable choice for individuals and businesses looking for a smooth and secure relocation experience.</p>

  <h3>The Growing Need for Professional Movers in Chennai</h3>
  <p>Chennai continues to expand with new residential communities, IT hubs, and commercial spaces. With more people relocating for work, education, and lifestyle changes, the demand for reliable moving services has increased significantly.</p>
  <p>Professional movers like Lal Packers and Movers help bridge this gap by offering organized solutions that save time, reduce effort, and ensure belongings are handled safely.</p>

  <h3>End-to-End Moving Solutions</h3>
  <p>One of the key advantages of choosing Lal Packers and Movers Chennai is their comprehensive service approach. They manage every stage of the relocation process, including:</p>

  <ul>
    <li>Careful packing using quality materials</li>
    <li>Secure loading and unloading</li>
    <li>Safe transportation</li>
    <li>Systematic unpacking</li>
  </ul>

  <p>This end-to-end support allows customers to focus on their transition while the professionals handle the logistics.</p>

  <h3>Safety and Care for Your Belongings</h3>
  <p>Safety is a top priority during any move. Lal Packers and Movers use proven packing techniques to protect items from damage during transit. Fragile items, electronics, and furniture are handled with special care to ensure they arrive in perfect condition.</p>
  <p>Their experienced team understands how to manage different types of belongings, giving customers peace of mind throughout the process.</p>

  <h3>Convenient Local Shifting Services</h3>
  <p>Whether you’re moving to a nearby street or across the city, local shifting requires efficient coordination. Lal Packers and Movers Chennai provide reliable local relocation services designed to make short-distance moves quick and hassle-free.</p>
  <p>Their familiarity with Chennai’s neighborhoods and traffic patterns helps them complete moves on schedule without unnecessary delays.</p>

  <h3>Office Relocation with Minimal Downtime</h3>
  <p>Businesses need a moving partner who can ensure continuity. Lal Packers and Movers specialize in organized office relocations, helping companies shift equipment, documents, and furniture efficiently.</p>
  <p>By planning each step carefully, they reduce downtime and help businesses resume operations quickly in their new location.</p>

  <h3>Affordable Services That Deliver Value</h3>
  <p>Cost is often a deciding factor when choosing a moving company. Lal Packers and Movers Chennai offer competitive pricing with clear estimates, allowing customers to plan their move without worrying about hidden charges.</p>
  <p>Their flexible service options make it easy to choose a package that suits both requirements and budget.</p>

  <h3>Customer Experience That Builds Trust</h3>
  <p>A successful move isn’t just about transporting items — it’s about providing a positive experience. Lal Packers and Movers focus on clear communication, timely service, and professional support to ensure customers feel confident throughout the process.</p>
  <p>Their growing base of satisfied clients reflects their commitment to quality service.</p>

  <h3>Practical Moving Tips for Chennai Residents</h3>
  <ul>
    <li>Book your movers in advance</li>
    <li>Sort and declutter before packing</li>
    <li>Label boxes based on rooms</li>
    <li>Keep essentials accessible</li>
    <li>Inspect items after delivery</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Relocation doesn’t have to be complicated when you choose experienced professionals who understand your needs. Lal Packers and Movers Chennai combine practical expertise, careful handling, and dependable service to make every move simple and efficient.</p>
  <p>Whether you’re shifting your home or relocating your office, partnering with a trusted moving company ensures a seamless transition and a positive start in your new space.</p>

  `
},
{
  id: "id7",
  title: "Best Local Shifting Services in Chennai – Understanding the Moving Process, Costs and Benefits",
  image: "/images/blog8.png",
  date: "6 Mar 2026",
  content: `

  <h2>Best Local Shifting Services in Chennai – Understanding the Moving Process, Costs and Benefits</h2>

  <h3>Introduction</h3>
  <p>Relocating can be exciting, but it also brings many questions — How much will it cost? How long will it take? How do you ensure your belongings are safe? For residents and businesses in Chennai, having a clear understanding of the moving process makes planning much easier. Lal Packers and Movers Chennai help simplify relocation by offering professional support, transparent pricing, and reliable service from start to finish.</p>

  <h3>Understanding the Moving Process</h3>
  <p>A well-structured process is the foundation of a successful move. Lal Packers and Movers Chennai follow a step-by-step approach that ensures every stage is handled efficiently.</p>
  <p>First, they assess the volume of items and specific requirements. Then comes professional packing, where trained staff use protective materials to secure belongings. After packing, items are loaded carefully, transported safely, and finally unloaded and arranged at the destination.</p>
  <p>This systematic workflow reduces confusion and ensures a smooth relocation experience.</p>

  <h3>Factors That Affect Moving Costs</h3>
  <p>One of the most common concerns during relocation is the cost. Several factors influence moving expenses in Chennai:</p>

  <ul>
    <li>Distance between pickup and delivery locations</li>
    <li>Volume and type of items</li>
    <li>Packing materials required</li>
    <li>Floor level and accessibility</li>
    <li>Additional services like unpacking or storage</li>
  </ul>

  <p>Lal Packers and Movers provide clear estimates based on these factors, helping customers plan their budgets effectively without unexpected charges.</p>

  <h3>Benefits of Hiring Professional Movers</h3>
  <p>While some people consider DIY moving, professional services offer several advantages. Lal Packers and Movers Chennai bring experience, equipment, and trained manpower to handle relocation efficiently.</p>
  <p>This not only saves time and effort but also reduces the risk of damage to belongings. Professional movers also handle heavy lifting and logistics, making the entire process more convenient.</p>

  <h3>Home Relocation Made Simple</h3>
  <p>Home shifting involves both emotional and practical aspects. Lal Packers and Movers ensure household items are handled with care, from kitchenware to furniture. Their organized packing and labeling system makes unpacking easier, allowing families to settle in quickly.</p>
  <p>With reliable support, customers can focus on adjusting to their new surroundings instead of worrying about the move itself.</p>

  <h3>Office Shifting with Structured Planning</h3>
  <p>Office relocation requires precise coordination to avoid operational delays. Lal Packers and Movers Chennai offer structured office shifting services that prioritize speed and organization.</p>
  <p>From packing workstations to transporting equipment, every step is planned carefully so businesses can resume operations with minimal downtime.</p>

  <h3>Why Local Expertise Matters</h3>
  <p>Chennai’s traffic patterns, apartment rules, and neighborhood layouts can impact moving schedules. Lal Packers and Movers’ local experience allows them to plan routes efficiently and manage permissions when required.</p>
  <p>This familiarity helps avoid delays and ensures a more predictable moving timeline.</p>

  <h3>Tips to Reduce Moving Stress</h3>
  <ul>
    <li>Start planning at least two weeks in advance</li>
    <li>Dispose of unwanted items</li>
    <li>Pack personal essentials separately</li>
    <li>Communicate special instructions clearly</li>
    <li>Confirm schedules a day before moving</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Relocation doesn’t have to be complicated when you understand the process and have the right professionals supporting you. Lal Packers and Movers Chennai combine practical experience, transparent pricing, and customer-focused service to make every move efficient and worry-free.</p>
  <p>Whether you’re planning a residential move or an office relocation, choosing a trusted moving partner ensures your belongings are handled safely and your transition is smooth from beginning to end.</p>

  `
}
  
  

  ];

  /* ================= ANIMATION ================= */

  useEffect(() => {
    
    const cards = document.querySelectorAll(".blog-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }, []);

  /* ================= SINGLE BLOG VIEW ================= */

  if (selectedBlog) {
    return (
      <>
        <section className="single-blog-wrapper">
          <div className="single-layout">

            <div className="single-main">
              <button
  className="back-btn"
  onClick={() => navigate("/blog")}
>
  ← Back to Blogs
</button>

              <h1>{selectedBlog.title}</h1>

              <img
                src={selectedBlog.image}
                alt="blog"
                className="featured-image"
              />

              <div
                className="single-content"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>

           <aside className="single-sidebar">

  <div className="sidebar-cta">
    <h2>Get Free Moving Quote</h2>
    <p>Safe, Fast & Affordable Relocation Services</p>
    <button className="contact-btn">Call Now</button>
  </div>

  <div className="sidebar-box">
    <h3>Why Customers Trust Us</h3>
    <ul>
      <li>✔ 5000+ Successful Moves</li>
      <li>✔ 10+ Years Experience</li>
      <li>✔ GPS Tracking Available</li>
      <li>✔ 100% Safe Handling</li>
    </ul>
  </div>

  <div className="sidebar-box highlight-sidebar">
    <h3>Need Urgent Shifting?</h3>
    <p>We offer same-day relocation services.</p>
    <button className="contact-btn light-btn">Book Today</button>
  </div>

</aside>


          </div>
        </section>

        <style>{styles}</style>
      </>
    );
  }

  /* ================= GRID VIEW ================= */

  return (
    <>
      <section className="blog-section">
        <div className="blog-container">

          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card ${
  index % 4 === 1
    ? "tall"
    : index % 4 === 2
    ? "medium"
    : ""
}`}
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="card-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <h1>{blog.date}</h1>
              </div>
            </div>
          ))}

        </div>
      </section>

      <style>{styles}</style>
    </>
  );
}

/* ================= CSS ================= */

const styles = `
.blog-section{
  padding:80px 0;   /* reduced bottom white space */
}

/* ================= GRID ================= */

.blog-container{
  width:85%;
  margin:auto;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:80px 120px;  /* row-gap 80 / column-gap 120 */
}

/* ================= BLOG CARD ================= */

.blog-card{
  width:100%;
  background:#fff;
  box-shadow:0 20px 40px rgba(0,0,0,0.08);
  transition:all 0.6s ease;
  opacity:0;
  transform:translateY(40px);
  border-radius:6px;
  overflow:hidden;
  cursor:pointer;
}

.blog-card.show{
  opacity:1;
  transform:translateY(0);
}

.blog-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 70px rgba(0,0,0,0.15);
}

/* ================= CLEAN STAGGER ================= */
/* Even cards slightly down like your 2nd image */

.blog-card:nth-child(even){
  margin-top:40px;
}

/* ================= IMAGE ================= */

.card-image img{
  width:100%;
  height:auto;
  display:block;
  object-fit:cover;
}

/* ================= CONTENT ================= */

.blog-content{
  padding:35px 40px 45px;
}

.blog-content h2{
  font-size:22px;
  font-weight:700;
}

.blog-content h1{
  font-size:15px;
  font-weight:500;
}

/* ================= SINGLE PAGE ================= */

.single-layout{
  width:85%;
  margin:auto;
  display:flex;
  gap:60px;
}

.single-sidebar{
  flex: 0 0 340px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

.featured-image{
  width:100%;
  max-width:100%;
  height:auto;
  display:block;
  margin:30px 0;
  border-radius:8px;
}

.single-content{
  font-size:18px;
  line-height:1.8;
}

/* ================= SIDEBAR ================= */

.sidebar-cta{
  background: linear-gradient(135deg,#0f172a,#1e293b);
  color:#fff;
  padding:35px;
  border-radius:12px;
  margin-bottom:30px;
  text-align:center;
  box-shadow:0 20px 40px rgba(0,0,0,0.15);
}

.sidebar-cta h2{
  font-size:28px;
  font-weight:700;
  margin-bottom:15px;
  line-height:1.3;
}

.sidebar-cta p{
  font-size:15px;
  margin-bottom:20px;
  opacity:0.9;
}

.contact-btn{
  padding:12px 28px;
  background:#ffffff;
  color:#0f172a;
  border:none;
  font-weight:600;
  border-radius:6px;
  cursor:pointer;
  transition:0.3s ease;
}

.contact-btn:hover{
  transform:translateY(-3px);
}

.light-btn{
  background:#fff;
  color:#0f172a;
}

.sidebar-box{
  padding:25px;
  background:#f5f5f5;
  border-radius:10px;
  margin-bottom:30px;
}

.sidebar-box h3{
  margin-bottom:15px;
}

.sidebar-box ul{
  padding-left:18px;
  line-height:1.8;
}

.highlight-sidebar{
  background:#0f172a;
  color:#fff;
}

.highlight-sidebar .contact-btn{
  background:#fff;
  color:#0f172a;
}

/* ================= RESPONSIVE ================= */

@media(max-width:992px){

  .blog-container{
    grid-template-columns:1fr;
    gap:60px;
  }

  .blog-card:nth-child(even){
    margin-top:0;   /* remove stagger on mobile */
  }

  .single-layout{
    flex-direction:column;
  }

  .single-sidebar{
    position:relative;
    top:0;
    flex:1;
  }
}

@media(max-width:768px){

  .blog-section{
    padding:60px 0;
  }

  .blog-container{
    width:92%;
  }

  .blog-content{
    padding:25px 20px 30px;
  }

  .blog-content h2{
    font-size:18px;
    line-height:1.4;
  }

  .blog-content h1{
    font-size:13px;
  }

  .single-layout{
    width:92%;
    gap:30px;
  }

  .single-content{
    font-size:16px;
    line-height:1.7;
  }

  .featured-image{
    margin:20px 0;
  }

  .sidebar-cta{
    padding:25px;
  }

  .sidebar-cta h2{
    font-size:20px;
  }

  .sidebar-cta p{
    font-size:14px;
  }

  .sidebar-box{
    padding:20px;
  }

  .contact-btn{
    width:100%;
    padding:12px;
  }
}

@media(max-width:480px){

  .blog-content{
    padding:20px 18px 5px;
  }

  .blog-content h2{
    font-size:16px;
  }

  .single-content{
    font-size:15px;
  }

  .sidebar-cta h2{
    font-size:18px;
  }
}
`;



