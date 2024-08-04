import React, { useEffect, useState } from 'react'
import Service from './Service'
import Testmonials from './Testmonials';
const serviceData= [
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "Web development",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
  {
    "title": "Mobile apps",
    "icon": "/images/icon-app.svg",
    "description": "Professional development of applications for iOS and Android."
  },
  {
    "title": "Photography",
    "icon": "/images/icon-photo.svg",
    "description": "I make high-quality photos of any category at a professional level."
  }
]
const About = () => {
  const [testimonials, setTestimonials]= useState([]);
  useEffect(()=>{
    fetch('public/testimonials.json').then((resp)=> resp.json().then(data => {
      //console.log(data);
    setTestimonials(data)
      
    }))
  },[])
  return (
    <div className='about active'>
          <header>
            <h2 className='h2 article-title'>About Me</h2>
          </header>
          <section className='about-text'>
            <p>I'm a recent BBA graduate who discovered a passion for coding during the COVID-19 pandemic. 
            To pursue this newfound interest, I completed a full stack web development bootcamp at Pro Stack Academy, 
            where I gained expertise in HTML, CSS, JavaScript, React, Node.js, and Python. 
            I have hands-on experience from an internship at Greet Labs PVT LTD, where I worked on web projects 
            and collaborated with teams.</p>

            <p>I have developed projects such as a full stack food delivery app and an eCommerce website, 
            demonstrating my ability to create responsive and user-friendly applications. With a unique 
            blend of business and technical skills, I am eager to contribute to innovative projects and 
            continue growing as a web developer.</p>
          </section>

          {/* Section */}
          <section className='service'>
            <h2 className='h3 service-title'>What I'm Doing</h2>
            <ul className='service-list'>
              {
                serviceData.map((service, index) => (
                  <Service key={index} title={service.title} icon={service.icon} description={service.description} />
                ))
              }
            </ul>
          </section>

          {/* Testimonials Section */}
          <section className='testimonials'>
            <h3 className='h3 testimonials-title'>Testimonials</h3>
            <ul className='testimonials-list has-scrollbar'>
               {
                testimonials.map((testimonial, index) => (
                  <Testmonials key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
                ))
               }
            </ul>
          </section>

          {/* Clients */}
          <section className='clients'>
          <h3 className='h3 clients-title'>Clients</h3>
          <ul className='clients-list has-scrollbar'>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-1-color.png" alt="" />
               </a>
            </li>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-2-color.png" alt="" />
               </a>
            </li>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-3-color.png" alt="" />
               </a>
            </li>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-4-color.png" alt="" />
               </a>
            </li>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-5-color.png" alt="" />
               </a>
            </li>
            <li className='clients-item'>
               <a href="">
                <img src="/images/logo-6-color.png" alt="" />
               </a>
            </li>
          </ul>
          </section>
    </div>
  )
}

export default About