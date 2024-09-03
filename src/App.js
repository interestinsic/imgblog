import './App.css';
import Body from './components/Body.js';
import ImgPrev from './components/ImgPrev';
import ImgShow from './components/ImgShow';
import IndexHeader from './components/IndexHeader';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom"
import Viewer from './components/Viewer';


function App() {
  return (
    <div> 
      <Body>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/view/:imgId" element={ <Viewer /> } />
          
        </Routes>
      </Body>
    </div>
    
  );
}

export default App;
