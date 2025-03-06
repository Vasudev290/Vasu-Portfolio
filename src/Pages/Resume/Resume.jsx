import React from "react";
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
            category="Full Stack Web Developer - Bootcamp"
            title="Pro Stack Academy, Bangalore"
            date=" February 2024 - August 2024"
            description="I completed a comprehensive full stack web development course from February 2024 to August 2024. This program provided in-depth training in modern web technologies, including HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, MySQL, MongoDB, and Python. The hands-on approach helped me gain practical experience in both frontend and backend development, enabling me to build real-world applications."
          />
          <TimeLineItem
            category="Full Stack Web Developer - Internship Trainee"
            title="Greet Labs Pvt Ltd, Bangalore"
            date=" October 2024 - December 2024"
            description="I worked as an Internship Trainee from October 2024 to December 2024, gaining hands-on experience in full stack web development. This role allowed me to apply my technical skills in a professional environment, working on various web projects, collaborating with a team of developers, and improving my expertise in React.js, Redux, Node.js, Express.js, MongoDB, and MySQL."
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
