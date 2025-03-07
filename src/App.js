import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react'
import TextForm from './Components/TextForm'; 
import Alert from './Components/Alert';
  import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // let removeall=()=>{
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
    
  // }

  // let toggleMode=(cls)=>{
  let toggleMode=()=>{
    // removeall();
    // document.body.classList.add("bg-"+cls);
    if(mode==="light")
      {
        setMode("dark");
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
        showAlert("Dark mode has been enabled","success");
        //   // document.title='TextUtils - Dark Mode';
        //   // setInterval(() => {
          //   //   document.title='TextUtils is amazing';
          //   // }, 2000);
          //   // setInterval(() => {
            //   //   document.title='Install TextUtils now';
            //   // }, 1500);
          }
          // else if(cls==="dark){
            else{
              showAlert("Light mode has been enabled","success"); 
              setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      // document.title='TextUtils - Light Mode';
     
    }
   }
  const [mode,setMode]=useState("light")
  return (
    <>


<BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <div className="container my-3 mx-7">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm  mode={mode} showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Copy Text, Remove Extra Spaces"/>
                // <TextForm mode= {mode} showAlert={showAlert} heading="Enter the text to analyze"/>
              }
            />
             <Route exact path="/about" element={<About mode={mode}/> } />
          </Routes>
        </div>
      </BrowserRouter>

    </> 
  );
}
export default App;