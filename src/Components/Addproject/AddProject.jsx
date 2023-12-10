import Swal from "sweetalert2"
import "./AddProject.css"
import useAxios from "../Hook/useAxios"
import { Link } from "react-router-dom"

const AddProject = () => {
  const ImageURL = `https://api.imgbb.com/1/upload?key=4f76c18e33ad9cd249d69804ea663a74`
  const Axois    = useAxios()
    const AddingProject = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.files[0]
        const description = e.target.description.value
        const GitRepo = e.target.gitLink.value
        const LiveLink = e.target.liveLink.value
        if (name==""|| image == undefined || description=="" || GitRepo =="" || LiveLink =="") {
            return Swal.fire({
                title:"fill all the fileds",
                icon:"warning"
            })
        }
        const Alldata = {name,image, description, GitRepo, LiveLink}
        const form = new FormData()
        form.append("image" , image)
        Axois.post(ImageURL,  form, {
          headers: {
            "content-type": "multipart/form-data",
          }
        })
        .then(res=>
         { if(res?.data?.data?.display_url){
            const img = res.data.data.display_url
            console.log(image);
            const Alldata = {name,img, description, GitRepo, LiveLink}
            Axois.post('/projects', Alldata)
            .then(res=> {
              console.log(res.data)
              if(res.data?.insertedId){
                return Swal.fire({
                  title:"Project added successfully",
                  icon:"success"
                })
              }
            })
          }})
    }
  return (
    <div className="addingform container mx-auto flex-col my-[50px]">

      <h1 className="text-2xl mb-[20px] text-center ">Add Project:</h1>
      <form className="flex flex-col gap-[10px]" onSubmit={AddingProject}>

        <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="name" placeholder='Project Name' id="" />
        <div className="flex gap-[5px] items-center">
            <lable htmlFor="img">Image:</lable>
            <input id="img" className="p-[10px] w-full border-2 rounded-md border-black" type="file" name="image" />
        </div>
        <textarea className="p-[10px] w-full border-2 rounded-md border-black" name="description" placeholder="Project description" id="" cols="30" rows="10"></textarea>
        <div className="flex flex-col md:flex-row gap-[5px] items-center">
            <div className="w-full flex items-center text-2xl gap-[10px]">
                <label htmlFor="gitLink"><i className="fa-brands fa-github-alt"></i></label>
                <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="gitLink" id="gitLink" placeholder="Github Link" />
            </div>
            <div className="w-full flex items-center text-2xl gap-[10px]">
                <label htmlFor="liveLink"><i className="fa-solid fa-link"></i></label>
                <input className="p-[10px] w-full border-2 rounded-md border-black" type="text" name="liveLink" id="liveLink" placeholder="Live Link" />
            </div>
        </div>
        <button className="curson-pointer bg-green-700 text-white p-[10px] w-[100%] rounded" type="submit">Add Project</button>
      </form>
      <Link className="w-[100%] md:w-[55%]" to="projectList">
        <button className="curson-pointer bg-green-700 text-white p-[10px] w-[100%]  mt-[10px] rounded" type="submit">Projects List</button>
      </Link>
    </div>
  )
}

export default AddProject
