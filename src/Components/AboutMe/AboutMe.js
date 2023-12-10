import React, { useEffect } from 'react'
import "./AboutMe.css"
import AboutMeImg from "../Images/aboutMe.gif"
import EducationImg from "../Images/educationImg.gif"
import SkillsImg from "../Images/skills.gif"
import TailwindLogo from "../Images/tailwindLogo.webp"
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutMe = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div>
      <div className='aboutMeSecton' data-aos="fade-right">
        <img alt='aboutGif' src={AboutMeImg}/>
        <div className='AboutMeData'>
            <h1>About Me</h1>
            <p>Hi, I am Jobayer Rahman Ohee. I am a professional web developer. I love to build attractive websites in different topics. As a computer science student I love to work in different asspect of computer science . The main thing this is I want to build a solid carrier in this field it really attracts me how with an electric box you can do almost anythig.</p>
        </div>
      </div>
      <div className='aboutMeEduSecton'>
      <div className='AboutMeEduData' data-aos="fade-left">
            <h1>My Education</h1>
                <p>I have completed my diploma from Feni Polytechnic Institute, Feni. It is a government institute. one of the most renouned and old polytechnic institute of Bangladesh. It is also the most beautifull institute in my opinion. Before that I completed my school life from Hasan Ali Govt High School, Chandpur. Which is the oldest school form my birth city. I am really lucky that i get to study in these renouned and old educational institutes.</p>
        </div>
        <img data-aos="fade-left" src={EducationImg} alt='education' />
      </div>
      <div className='SkillsSction pt-[50px]' data-aos="fade-right">
      <img alt='aboutGif' src={SkillsImg}/>
      <div className='AboutMeData'>
          <h1>My Skills</h1>
          <p>In my student life I have acquired a lot of skills in computer science. as I said earlier I am very interested in computers and it really excites me how these machines actually works.</p>
          <div className='skillsList'>
            <ul>
                <li><i className="fa-brands fa-html5"></i> HTML</li>
                <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
                <li><i className="fa-brands fa-square-js"></i> JAVASCRIPT</li>
                <li className='tailwind'><img  src={TailwindLogo} alt='megaProject'/> Tailwind</li>
                <li><i className="fa-brands fa-bootstrap"></i> BOOTSTRAP</li>
            </ul>
            <ul>
                <li><i className="fa-brands fa-react"></i> REACT</li>
                <li className='flex items-center'><IoLogoFirebase /> Firebase</li>
                <li className='flex items-center gap-2'><SiExpress /> express</li>
                <li><i className="fa-solid fa-pen-to-square"></i> PHOTOSHOP</li>
                <li><i className="fa-brands fa-github"></i> GITHUB</li>
            </ul>
          </div>
            <p>More skills will be added soon...<i className="fa-regular fa-face-smile-beam"></i></p>
      </div>
    </div>
    </div>
  )
}

export default AboutMe
