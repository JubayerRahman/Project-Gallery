import React, { useEffect } from 'react'
import "./Me.css"
import myImg from "../Images/me.png"
import myCv from "../Images/myCv.pdf"
// the scroll animation library
import Aos from 'aos'
import "aos/dist/aos.css"

const Me = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='meSection'>
      <div className='myIntro' data-aos="fade-right">
        <h1>Hii, Welome to <br/> my  Projects gallery</h1>
        <p>I am Jobayer Rahman this is my Portfolio. I made this portfolio to give you a joyful and exciting ride about my learning journey and experience.  Here if you scroll below you can learn a lot about me. Hope you would love the tour.</p>
        <div className='myLinks'>
            <a className='githubLink' href={myCv} download="JobayerRahmanC.V-2023">See my CV?</a>
        </div>
      </div>
      <div className='myimgBox' data-aos="fade-left">
        <img src={myImg} alt='me'/>
      </div>
    </div>
  )
}

export default Me
