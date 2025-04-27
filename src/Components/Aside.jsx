
import { GiClawSlashes } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import Img from '../../public/images/Vasu2.jpeg'
const Git = `https://github.com/Vasudev290`
const Linkedin= `https://www.linkedin.com/in/vasudev31/`
const Aside = () => {

    const handleDownload = () => {
        const link = document.getElementById('cvDownloadLink' );
        if (link) {
          link.click();
        }
      };

  return (
    <aside className='sidebar'>
        <div className='sidebar-info'>
            <figure className='avatar-box'>
                <img src={Img} alt="" width='93' />
            </figure>
            <div className='info-content'>
                <h1 className='name'>Vasu Dev</h1>
                <p className='title'>Full Stack Web Devloper</p>
            </div>
            <button className='info_more-btn'>
                <span>Show Contact</span>
                <GiClawSlashes />
            </button>
        </div>
        {/* Contact info */}
        <div className="sidebar-info_more">
            <hr className='separator2'/>
            <ul className='contacts-list'>
                <li className='contact-item'>
                    <div className='icon-box'>
                        <IoIosMail />   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>Email</p>
                        <a href="mailto:vasukesavulu@gmail.com" className='contact-link'>vasukesavulu@gmail.com</a>
                    </div>
                </li>
                <li className='contact-item'>
                    <div className='icon-box'>
                        <FaPhoneAlt />   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>Phone</p>
                        <a href="tel:(+91) 9360390839" className='contact-link'>(+91) 9360390839</a>
                    </div>
                </li>
                <li className='contact-item'>
                    <div className='icon-box'>
                        < FaGithub/>   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>GitHub</p>
                        <a href={Git} className='contact-link'>VasuDev290</a>
                    </div>
                </li>
                <li className='contact-item'>
                    <div className='icon-box'>
                        < IoLogoLinkedin />   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>Linkedin</p>
                        <a href={Linkedin} className='contact-link'>VasuDev31</a>
                    </div>
                </li>
                <li className='contact-item'>
                    <div className='icon-box'>
                        < FaRegPaperPlane/>   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>Resume</p>
                        <button onClick={() => handleDownload()}  className='contact-link' style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Download CV</button>
                        <a href="/Resoures/Vasu Devu Mern.pdf" id='cvDownloadLink' download="Vasu Devu Mern.pdf" style={{display:'none'}}></a>
                    </div>
                </li>
                <li className='contact-item'>
                    <div className='icon-box'>
                        < FaLocationDot/>   
                    </div>
                    <div className='contact-info'>
                        <p className='contact-title'>Location</p>
                        <a href="#" className='contact-link'>Bangalore, IN</a>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Aside