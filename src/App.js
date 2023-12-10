import './App.css';
import Home from './Home/Home';
import {Routes, Route } from "react-router-dom"
import DynamicProjectPage from './Components/DynamicProjectPage/DynamicProjectPage';
import ScrollToTop from './Components/ScrollToTop';
import AllProjects from './Components/AllProjects/AllProjects';
import AddProject from './Components/Addproject/AddProject';
import ProjectList from './Components/ProjectsList/ProjectList';
import Updatepage from './Components/Updatepage/Updatepage';

function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:ProjectName' element={<DynamicProjectPage/>} />
      <Route path='/all_Projects' element={<AllProjects/>} />
      <Route path='/all_Projects/:ProjectName' element={<DynamicProjectPage/>} />
      <Route path='/admin' element={<AddProject/>} />
      <Route path='/admin/projectList' element={<ProjectList/>} />
      <Route path='/admin/projectList/:id' element={<Updatepage/>} />
    </Routes>
    </>
  );
}

export default App;
