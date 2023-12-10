import React, { useEffect, useState } from 'react'
import './CardContainer.css'
import Cards from '../Cards/Cards'
import useAxios from '../Hook/useAxios'
import LoadingBar from 'react-top-loading-bar'
import Swal from 'sweetalert2'
import { CiSearch } from "react-icons/ci";

const CardContainer = () => {
  
  const [ProjectsData, setProjectsData] = useState([])
  const [projectCount, setProjectCount] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [progress, setProgress] = useState(0)
  const Axios = useAxios()

  
  useEffect(()=>{
    Axios('/projects')
    .then(res=> setProjectCount(res.data))
  },[])

  console.log(projectCount);

  const limlt = 6
  const page = Math.ceil(projectCount.length/limlt)
  const pages =[...Array(page).keys()]
  
  useEffect(()=>{
    Axios(`/projects?page=${currentPage}&size=${limlt}`)
    .then(res=> setProjectsData(res.data))
  },[currentPage])


  const pagebutton = page =>{
    setCurrentPage(page)
    setProgress(100)
    window.scrollTo(0,0)
  }

  const searchForm = e =>{
    e.preventDefault()
    const search = e.target.search.value
    if (search == "") {
      return Swal.fire({
        title:"fill the field to search Project",
        icon:"question"
      })
    }
    Axios(`/projects?search=${search}`)
    .then(res=> setProjectsData(res.data))
    setProgress(100)
  }


  return (
    <div className='container mx-auto'>
      <LoadingBar
        color='green'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form onSubmit={searchForm} className='flex items-center gap-[5px] p-[20px]'>
        <input className="p-[10px] w-full border-2 rounded-md border-black" type='text' name='search' placeholder='Search project'/>
        <button className='w-[20vw] p-[10px] border-2 border-[#282C34] text-center flex itens-center justify-center text-xl md:w-[10vw] bg-[#282C34] text-white p-[10px] text-xl rounded-md cursor-pointer' type="submit" > <CiSearch /> </button>
      </form>
      {ProjectsData.length>0?
      <div className='cardContainer'>
      {ProjectsData.map((projectName, index)=>{
        return(
            <Cards key ={projectName._id}
            keys = {index + 1}
            projectImg ={projectName.img}
            projectname = {projectName.name}
            projectDescription = {projectName.description}
            github = {projectName.GitRepo}
            livelink = {projectName.LiveLink}
            />
        )
      })}
      </div>
      :
      <div className='h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl'>No Project found by this name.</h1>
      </div>
      }
      
      <div className='pagination flex w-full  gap-[5px] my-[25px] justify-center mx-auto'>
      {
        pages.map(page=>
          <button onClick={()=>pagebutton(page)}
          className={currentPage==page?
            'bg-white text-[#282C34] p-[10px] text-xl rounded-md border-[green] border-2': 
            'bg-[#282C34] text-white p-[10px] text-xl rounded-md'} key={page} >{page + 1}</button>
          )
      }
      </div>
      </div>
  )
}

export default CardContainer
