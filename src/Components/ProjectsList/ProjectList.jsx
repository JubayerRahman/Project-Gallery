import React, { useEffect, useState } from 'react'
import useAxios from '../Hook/useAxios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const ProjectList = () => {
  const Axios = useAxios()
  const [deleteStaurs, setDelete] = useState(false)
  const [projects,setProjects] = useState([])


  useEffect(()=>{
    Axios('/projects')
    .then(res=>setProjects(res.data))
  },[deleteStaurs])

  const deleteFunction =  id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        Axios.delete(`/projects/${id}`)
        .then(res=>{
          setDelete(!deleteStaurs)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
      }
    });
  }


  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='text-center text-2xl my-[50px]'>Projects List:</h1>
        <div className='flex justify-evenly items-center'>
          <h1 className='text-xl font-bold'>Target: 100</h1>
          <h1 className='text-xl font-bold'>Completed: {projects.length}</h1>
          <h1 className='text-xl font-bold'>Remaining: {100 - projects.length}</h1>
        </div>
      </div>
      <table className='container mx-auto my-[25px] w-screen border-2 rounded-md shadow-md'>
        <tr className='border-b-2'>
          <th className='p-[10px] text-xl border-r-2' ></th>
          <th className='p-[10px] text-xl border-r-2' >Projects</th>
          <th className='p-[10px] text-xl'>Options</th>
        </tr>
        {
          projects.map((project, index)=>
            <tr key={project._id} className='border-b-2'>
              <td className='border-r-2 p-[10px] text-xl text-center'>{index + 1}</td>
              <td className='border-r-2 p-[10px] flex flex-col md:flex-row items-center gap-[5px]'>
                <img className='w-[150px] h-[100px] object-cover object-top ease-out duration-300 cursor-pointer hover:object-bottom rounded-md' src={project.img} alt={project.name} />
                <span className='text-xl font-[500]'>{project.name}</span>
              </td>
              <td>
                <div className='flex flex-col md:flex-row justify-center'>
                <Link to={`/admin/projectList/${project._id}`}>
                  <button className='bg-[green] text-white border-2 text-xl rounded-md p-[5px]'>Edit</button>
                </Link>
                <button onClick={()=>deleteFunction(project._id)} className='bg-[red] text-white border-2 text-xl rounded-md p-[5px]'>Delete</button>
                </div>
              </td>
            </tr>
            )
        }
      </table>
    </div>
  )
}

export default ProjectList
