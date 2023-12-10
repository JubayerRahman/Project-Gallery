import axios from 'axios'

const AxiosUrl = axios.create({
    // baseURL:"http://localhost:5000"
    baseURL:"https://final-poejects-gannery-server.vercel.app"
})

const useAxios = () => {
  return AxiosUrl
}

export default useAxios
