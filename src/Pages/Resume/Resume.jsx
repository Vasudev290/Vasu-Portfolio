import { FaBookReader } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import TimeLineItem from "./TimeLineItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimeLineItem
            category="Bachelor of Business Administration - BBA"
            title="Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College, Chennai"
            date="2019 - 2022"
            description="I completed my undergraduate studies at Dharmamurthi Rao Bahadur Calavala Cunnan Chetty's Hindu College, achieving first-class honors with a 75% score. The college provided a robust academic foundation, emphasizing both theoretical knowledge and practical skills. The faculty were highly supportive, fostering a deep understanding of my field of study."
          />
          <TimeLineItem
            category="Higher Secondary School Certificate - HSC"
            title="Kanakadurga Telugu Higher Secondary School, Chennai"
            date="2018 - 2019"
            description="I completed my Higher Secondary Certificate (HSC) with first-class honors, achieving a percentage of 72%. During my HSC studies, I focused on a comprehensive curriculum that laid a solid foundation for my academic and professional journey. The rigorous coursework honed my analytical skills, critical thinking, and problem-solving abilities."
          />
          <TimeLineItem
            category="Secondary School Certificate - SSC "
            title="The Madras Progres Union Higher Secondary School, Chennai"
            date="2015 - 2016"
            description="I completed my Secondary School Certificate (SSC) with first-class honors, achieving a percentage of 69%. My SSC education provided a strong foundation in various subjects, fostering a well-rounded academic experience. The rigorous coursework and dedicated teachers helped develop my critical thinking, problem-solving skills, and a strong work ethic."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <RiHomeOfficeLine />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimeLineItem
            category="Full Stack Web Development - Online Bootcamp"
            title="Pro Stack Academy, Bangalore"
            date=" February 2024 - August 2024"
            description="I completed a comprehensive full stack web development course from February 2024 to August 2024. This program provided in-depth training in modern web technologies, including HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, MySQL, MongoDB, and Python. The hands-on approach helped me gain practical experience in both frontend and backend development, enabling me to build real-world applications."
          />
          <TimeLineItem
            category="MERN Stack Developer"
            title="Greet Labs Pvt Ltd, Bangalore"
            date=" february 2024 - March 2025"
            description="As a Full-Time MERN Stack Developer at Greet Labs Pvt Ltd, I have been involved in developing and maintaining full-stack web applications using React.js, Redux, Node.js, Express.js, MongoDB, and MySQL. I’ve collaborated with cross-functional teams to build scalable, responsive, and user-friendly interfaces, designed RESTful APIs, and ensured seamless data management across the stack. My responsibilities also include optimizing performance, debugging production issues, and contributing to clean, maintainable code following best practices."
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
