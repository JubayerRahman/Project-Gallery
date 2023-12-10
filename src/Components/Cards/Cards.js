import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'

const Cards = (props) => {
  const shortCaptionFunction = (description, wordlimit)=>{
    const word = description.split(' ')
    const presentStatus = word.slice(0, wordlimit).join(" ")
    return presentStatus;
  }
  const caption = shortCaptionFunction(props.projectDescription,25)
  return (
    <div  className='cards'>
      <div className='imgBox'>
      <img src={props.projectImg} draggable="false" alt='Project Img'/>
      </div>
      <h1><Link className='link' to={props.projectname}> {props.projectname}</Link></h1>
      <p>{caption} ...</p>
      <div className='buttons'>
      <a className='githubLink' href={props.github} target='_break'><i className="fa-brands fa-github"></i> Github Repo</a>
      <a className='liveLink'   href={props.livelink} target='_break'>
        <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Link</a>
      </div>
    </div>
  )
}

export default Cards
