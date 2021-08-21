import logo from './logo.svg';
import './App.css';
import Introduce from "./components/Introduce";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <div>개발자 박애린입니다. 하이루</div>
            <Introduce/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
