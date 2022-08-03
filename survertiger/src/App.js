//import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState} from "react";
import Capture from "./Capture.PNG";
import CreateSurvey from "./CreateSurvey"
import TakeSurvey from "./TakeSurvey"

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

const App=()=>{
const [isVisible, setIsVisible] = useState(true);
const [isVisible2, setIsVisible2] = useState(true);
const [flag, setFlag] = useState(false);
const [flag2, setFlag2] = useState(false);

const handlechange1=()=>{
setIsVisible2(false)
setIsVisible(false)
setFlag(true)
setFlag2(false)
}
const handlechange2=()=>{
setIsVisible(false)
setIsVisible2(false)
setFlag2(true)
setFlag(false)
}

return(
    <div>
    <img src={Capture} className="surverTigerLogo" alt="logo" />
    <br />

       <button onClick={() => handlechange1()} style={{visibility: isVisible ? 'visible' : 'hidden'}}>Create Survey</button>
<br />
<br />
       <button onClick={() => handlechange2()} style={{visibility: isVisible2 ? 'visible' : 'hidden'}}>Take Survey</button>
        {flag && <CreateSurvey />}
        {flag2 && <TakeSurvey />}

    </div>
)
}
export default App;


//       <button data-testid="createSurvey" onClick={handleclick}>Create Survey</button>
//       <button data-testid="takeSurvey" onClick={handleclick2}>Take Survey</button>
