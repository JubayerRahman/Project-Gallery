import React, { useEffect, useState } from 'react'
import Me from '../Components/Me/Me'
// import ProjectsData from "../Components/projectData.json"
import Cards from '../Components/Cards/Cards';
import { Link } from 'react-router-dom';
import './Home.css'
import img from "../Components/Images/projectsimg.gif"
import AboutMe from '../Components/AboutMe/AboutMe';
import Achivements from '../Components/Achivements/Achivements';
// the scroll animation library
import Aos from 'aos'
import "aos/dist/aos.css"
import useAxios from '../Components/Hook/useAxios';

const Home = () => {
  const [ProjectsData, setProjectsData] = useState([])
  const Axios = useAxios()
  useEffect(()=>{
    Aos.init({duration: 2000})
    Axios('/projects')
    .then(res=> setProjectsData(res.data))
  },[])
  return (
    <div>
      <Me/>
      <AboutMe/>
      <div className="App">
      <div className='projectstitle'>
        <img src={img} alt='img' data-aos="fade-right"/>
        <div className='projectsDetails'>
        <h1 data-aos="fade-donn">My 100 cool React Projeacts:</h1>
        <p data-aos="fade-up" className='myInterDate'>Here are some of my projects. I took a goal to make 100 react projects. I want to become 
        the best web developer. So I started gathering ideas about web applications related to websites, react, 
        and good UI designs. The whole process of gathering information and ideas is very interesting and exciting. 
        I get to see other developer's projects, it is really fascinating that the same project idea can be 
        presented in so many different ways and every version of that project inspires new bees like me to polish 
        our skills more and more.</p>
        </div>
      </div>
      {/* <CardContainer/> */}
      <div className='cardContainer' data-aos="fade-down">
        {
          ProjectsData.slice(0,6).map((projectName, index)=>{
            return(
                <Cards 
                key ={projectName.Key}
                keys = {index+1}
                projectImg ={projectName.img}
                projectname = {projectName.name}
                projectDescription = {projectName.description}
                github = {projectName.GitRepo}
                livelink = {projectName.LiveLink}
                />
            )
          })
        }
      </div>
      <Link className='aLlProjects' to="all_Projects">Wanna see All projects??</Link>
    </div>
    <Achivements/>
    </div>
  )
}

export default Home