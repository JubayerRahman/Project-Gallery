import React, { useEffect } from 'react'
import"./Achivements.css"
import AchivementImg from "../Images/achivementsImg.png"
import FreameWorkCertificate from "../Images/frameWorkCertificate.png"
import  freeCodeCampCertificate1 from "../Images/freeCodeCampCertificate1.webp"
import  freeCodeCampCertificate2 from "../Images/freecodecampCertificate3.webp"
import BrightSkillsCertificate1 from "../Images/brightSkillsCertificate1.webp"
import BrightSkillsCertificate2 from "../Images/brightSkillsCertificate2.webp"
import BrightSkillsCertificate3 from "../Images/brightSkillsCertificate3.webp"
import GovernmentCertificate from "../Images/govtCertificate.jpg"
import GovernmentGift from '../Images/govtGift.jpg'
// the carousel import
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// the scroll animation library
import Aos from 'aos'
import "aos/dist/aos.css"


const Achivements = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
      const responsive ={
        superLargeDesktop: {
            breakpoint: {max:4000, min:3000},
            items:5
        },
        desktop: {
            breakpoint: {max:3000, min:1024},
            items:3
        },
        tablet: {
            breakpoint: {max:1024, min:464},
            items:2
        },
        mobile: {
            breakpoint: {max:464, min:0},
            items:1
        }
      }
  return (
    <div className='achvementsSection'>
      <div className='AchvementImgBox' data-aos="zoom-in">
        <img src={AchivementImg} alt='anImg'/>
      </div>
      <div className='AchivementData' data-aos="fade-let">
        <h2>Here are some of my achivements</h2>
        <Carousel responsive={responsive} className='carouselwidth'>
            <div>
            <img src={FreameWorkCertificate} alt='certificate'/>
            <p>Certificate form freeCodeCamp</p>
            </div>
            <div>
            <img src={freeCodeCampCertificate1} alt='certificate'/>
            <p>Certificate form freeCodeCamp</p>
            </div>
            <div>
            <img src={freeCodeCampCertificate2} alt='certificate'/>
            <p>Certificate form freeCodeCamp</p>
            </div>
            <div>
            <img src={BrightSkillsCertificate1} alt='certificate'/>
            <p>Certificate form BrightSkills</p>
            </div>
            <div>
            <img src={BrightSkillsCertificate2} alt='certificate'/>
            <p>Certificate form BrightSkills</p>
            </div>
            <div>
            <img src={BrightSkillsCertificate3} alt='certificate'/>
            <p>Certificate form BrightSkills</p>
            </div>
            <div>
            <img src={GovernmentGift} alt='certificate'/>
            <p>Got a price form Govenment Cource</p>
            </div>
            <div>
            <img src={GovernmentCertificate} alt='certificate'/>
            <p>Govenment Certificate</p>
            </div>
            <div>
            <p>I had more certificates and achvements images. But, I cant find them now. </p>
            </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Achivements
