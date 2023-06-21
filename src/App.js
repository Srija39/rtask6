import './Main.css';
import './Home.css';
import './Projects.css';
import './Contact.css';
import './About.css';
import './Components/Hello.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Main from './Components/Main';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Hello from './Components/Hello';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
function App()
{
  return(
    <div className='background'>
      <div className='blur'>
      <div class="card">
  <div class="card-body">
    <b>My Portfolio</b>
  </div>
</div>
      
  <div className='app'>
    <div><Nav /></div>
      <BrowserRouter>
    <Routes>
      <Route path='/main-page' element={<Main />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/my-projects" element={<Projects />}/>
        <Route path="/about-me" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Hello />}/>
        </Routes></BrowserRouter>
        
        </div></div>
    </div>
)
}
export default App;