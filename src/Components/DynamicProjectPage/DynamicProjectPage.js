import React, { useEffect, useState } from 'react'
import "./DynamicProjectPage.css"
import { useParams, useNavigate } from 'react-router-dom'
import useAxios from '../Hook/useAxios'
// import ProjectData  from "../projectData.json"

const DynamicProjectPage = () => {
  const proJectKey = useParams()
  console.log(proJectKey)
  const Axios = useAxios()
  const [singleProject, setSingleproject] = useState([])

  useEffect(()=>{
    Axios(`/projects?name=${proJectKey.ProjectName}`)
    .then(res=> setSingleproject(res.data))
  },[proJectKey])

  // const singleProject = ProjectData.filter((ele)=>{
  //   return ele.name === proJectKey.ProjectName
  // })
  const navigate = useNavigate()
  return (
    <div>
      {singleProject.map((project)=>{
          return(
            <div className='dynamicpage'>
              <img className='dynamicImg' src={project.img} draggable="false" alt={project.name}/>
              <div className='dynamicPgaeData'>
              <h1 className='text-xl font-bold'>{project.name}</h1>
              <p>{project.description}</p>
              <div className='buttons'>
              <button className='backButton' onClick={()=>navigate(-1)}>
                <i className="fa-solid fa-delete-left"></i> Back
              </button>
              <a className='githubLink' href={project.GitRepo} target='_break'><i className="fa-brands fa-github"></i> Github Repo</a>
      <a className='liveLink'   href={project.LiveLink} target='_break'>
        <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Link</a>
              </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default DynamicProjectPage
