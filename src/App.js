import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
  })
    setTimeout(()=>{
      setalert(null)
    },1500)

  }
  const changemode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")

    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#142957';
      showalert("Dark mode has been enabled","success")
    }

  }
  return (
    <>
     <Router>
     <Navbar title="TextUtils" home="Home" about="About" mode={mode}  changemode={changemode}/>
     <Alert  alert={alert} />
     <div className="container">
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Textutils: For text modification" mode={mode} />} />
       </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
