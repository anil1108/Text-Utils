
// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, Switch, Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textutils - Light Mode";


    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#0a074d';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className='container my-3'>
          {/* <Switch> */}

          {/* <Route    path='/about' >
              <About />
            </Route> */}


            {/* <Route  exact path='/'> */}
              <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route> */}

            

          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
