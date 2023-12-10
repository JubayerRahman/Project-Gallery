import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../Hook/useAxios'
import Swal from 'sweetalert2'

const Updatepage = () => {
    const param = useParams().id
    const [dataUpdate, setUpdateData] = useState()
    const Aixos = useAxios()
    
    useEffect(()=>{
        Aixos(`/projects/${param}`)
        .then(res=> setUpdateData(res.data))
    },[])
    const updateFunction = e=>{
        e.preventDefault()
        const name = e.target.name.value
        const description = e.target.description.value
        const GitRepo = e.target.GitRepo.value
        const LiveLink = e.target.LiveLink.value
        const UpdateData = {name, description, GitRepo, LiveLink}
        console.log(UpdateData);
        Aixos.put(`/projects/${param}`, UpdateData)
        .then(res=> {
            if (res.data.modifiedCount>0){
                Swal.fire({
                    title:"Project data uploaded successfully",
                    icon:"success"
                })
            }
        })
        // console.log(UpdateData)
    }
    console.log(dataUpdate);
  return (
    <div className='container mx-auto my-[50px]'>
      <h1 className='text-xl text-center'>Update project data:</h1>
      {
        dataUpdate?
        <form onSubmit={updateFunction} className='flex flex-col gap-[10px] p-[10px]'>
        <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="name" placeholder='Project name' defaultValue={dataUpdate[0].name} id="" />
        <textarea className="p-[10px] w-full border-2 rounded-md border-black" name="description" placeholder="Project description" id="" defaultValue={dataUpdate[0].description} cols="30" rows="10"></textarea>
        <div className="flex flex-col md:flex-row gap-[5px] items-center">
            <div className="w-full flex items-center text-2xl gap-[10px]">
                <label htmlFor="GitRepo"><i className="fa-brands fa-github-alt"></i></label>
                <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="GitRepo" defaultValue={dataUpdate[0].GitRepo} id="GitRepo" placeholder="Github Link" />
            </div>
            <div className="w-full flex items-center text-2xl gap-[10px]">
                <label htmlFor="LiveLink"><i className="fa-solid fa-link"></i></label>
                <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="LiveLink" defaultValue={dataUpdate[0].LiveLink} id="LiveLink" placeholder="Live Link" />
            </div>
        </div>
        <button type='submit' className='bg-[green] text-white p-[10px] w-full rounded-md mt-[15px]'>Update Project info</button>
      </form>
      :
      <h1 className='h-screen flex flex-col items-center justify-center text-5xl'>Loading ...</h1>
      }
    </div>
  )
}

export default Updatepage
