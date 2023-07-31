import React, { useRef, useState } from 'react';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Midsection from './component/Midsection';
import Alarmsection from './component/Alarmsection';
import Worldclocksection from './component/Worldclocksection';
import Stopwatchsection from './component/Stopwatchsection';
import Timersection from './component/Timersection';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(props) {
  const [alarmlist,setAlarmList] = useState([]);


  const alarmsection  = useRef();

  const handleAlarmsection = ()=>{
   alarmsection.current.style.display = "block"
  }



  return (
    
    <>
    <Router>
    <div className="h-[100vh] overflow-hidden relative flex flex-col bg-[#01161F]">
      
      <div className="header_top h-[10%] w-full shadow-xl ">
        <Header />
      </div>
     
      <div className="main_container h-[86%] w-full text-white ">
      <Routes>
          <Route exact path="/Alarmsection" element={<Alarmsection alarmlist={alarmlist}/>}/>
       
          <Route exact path="/Stopwatchsection" element={<Stopwatchsection/>}/>
      
          <Route exact path="/Timersection" element={<Timersection/>}/>

          <Route exact path="/Worldclocksection" element={ <Worldclocksection/>}/>
          <Route exact path="/" element={<Midsection alarmlist={alarmlist} setAlarmList={setAlarmList}/>}/>
        </Routes>
      </div>
    <div className="footer_bottom h-[6%] w-full bg-[#102C2C]">
        <Footer  handleAlarmsection={handleAlarmsection} />
      </div>

    </div>
    </Router>
    </>
  );
}

export default App;