
import Service from "./Service";
import Testmonials from "./Testmonials";

// Service Data
const serviceData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

// Testimonials Data
const testmonioalData = [
  {
    name: "Narasimha Reddy, Project Manager at Pro Stack Academy",
    avatar: "/images/avatar-1.png",
    testimonial:
      "Vasu consistently demonstrated exceptional web development skills during his time at Pro Stack Academy. His ability to understand client requirements and deliver high-quality solutions exceeded our expectations.",
  },
  {
    name: "Sushmitha, Senior Developer at Greet Labs PVT LTD",
    avatar: "/images/avatar-2.png",
    testimonial:
      "Vasu was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of the client.",
  },
  {
    name: "Rithi, Team Lead at Greet Labs PVT LTD",
    avatar: "/images/avatar-3.png",
    testimonial:
      "Vasu's contributions to our web development projects were invaluable. His expertise in full stack development and attention to detail ensured that our projects were completed on time and to the highest standards.",
  },
  {
    name: "Vijay, Senior Developer at Pro Stack Academy",
    avatar: "/images/avatar-4.png",
    testimonial:
      "Working with Vasu was a pleasure. He brought innovative ideas to the table and effectively implemented them. His collaborative approach and technical proficiency make him an asset to any development team.",
  },
];

const About = () => {
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I completed my Bachelor of Business Administration (BBA) in 2022 and
          later transitioned into web development after discovering a passion
          for coding during the COVID-19 pandemic. To build my technical
          expertise, I completed a Full Stack Web Development Course at Pro
          Stack Academy (Feb 2024 – Aug 2024), where I gained proficiency in
          HTML, CSS, JavaScript, React.js, Redux, Redux Toolkit, Node.js,
          Express.js, MySQL, MongoDB, and Python.
        </p>

        <p>
          During my internship at Greet Labs Pvt Ltd (Oct 2024 – Dec 2024), I
          worked on real-world web applications, collaborated with development
          teams, and strengthened my skills in frontend and backend development.
        </p>

        <p>
          I have developed full-stack projects, including ShopCART and
          RapidRetails, where I built responsive UIs using React.js, managed
          state with Redux, developed RESTful APIs with Node.js and Express, and
          handled databases with MongoDB, MySQL. With a strong foundation in
          business and technology, I am eager to contribute to innovative
          projects and grow as a MERN Stack Developer.
        </p>
      </section>

      {/* What I'm Doing Section */}
      <section className="service">
        <h2 className="h3 service-title">What I&apos;m Doing</h2>
        <ul className="service-list">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testmonioalData.map((testimonial, index) => (
            <Testmonials
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <li key={num} className="clients-item">
              <a href="#">
                <img src={`/images/logo-${num}-color.png`} alt={`Client ${num}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
