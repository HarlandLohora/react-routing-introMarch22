import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";      // <== IMPORT
import HomePage from "./pages/HomePage";       // <== IMPORT
import AboutPage from "./pages/AboutPage";     // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage";   // <== IMPORT
import ErrorPage from "./pages/ErrorPage";         // <== IMPORT
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import projectsData from "./projects-data.json"
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path='/' element={<HomePageWithNavigate nombredeTA="Yani" isLoggedIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projectsData={projectsData} />} />
        <Route path="/projects/:id" element={<ProjectDetail projectsData={projectsData} />} />
        <Route path="*" element={<ErrorPage />} />   {/*  <== ADD */}
      </Routes>
      <footer>
        Developed with ❤ from Ironhack
      </footer>
    </div>
  );
}

export default App;
