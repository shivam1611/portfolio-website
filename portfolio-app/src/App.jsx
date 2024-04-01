import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '*' element = {<PageNotFound/>}/>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/about' element = {<AboutPage/>}/>
          <Route path = '/projects' element = {<Projects/>}/>
          <Route path = '/skills' element = {<Skill/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
