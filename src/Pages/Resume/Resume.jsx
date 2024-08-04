import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import TimeLineItem from './TimeLineItem';

const Resume = () => {
  return (
    <section>
        <header>
            <h2 className='h2 article-title'>Resume</h2>
        </header>
        <div className='timeline'>
           <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className='h3'>Education</h3>
           </div>
           <ol className='timeline-list'>
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

        <div className='timeline'>
           <div className="title-wrapper">
            <div className="icon-box">
              <RiHomeOfficeLine />
            </div>
            <h3 className='h3'>Experience</h3>
           </div>
           <ol className='timeline-list'>
               <TimeLineItem 
               category="Full Stack Web Developer - Bootcamp"
               title="Pro Stack Academy, Bangalore"
               date="Nov 2023 - April 2024"
               description="I completed a comprehensive full stack web development bootcamp from November 2023 to April 2024. This intensive program equipped me with a robust set of skills in modern web technologies, including HTML, CSS, JavaScript, React, Node.js, and Python. The academy’s hands-on approach provided me with practical experience in both frontend and backend development."
               />
               <TimeLineItem 
               category="Full Stack Web Developer"
               title="GREET LABS PVT LTD (Intership Trainee), Bangalore"
               date="June 2024 - Present"
               description="I worked as an Internship Trainee from June 2024 to the present, gaining invaluable hands-on experience in full stack web development. This role allowed me to apply my technical skills in a professional setting, working on a variety of web projects and collaborating with a talented team of developers."
               />
           </ol>
        </div>
    </section>
  )
}

export default Resume