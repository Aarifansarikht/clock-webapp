import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Alarmsection(props) {
  const [hour,setHour] = useState(0)
  const [minute,setMinute] = useState(0);
  const [second,setSeocnd] = useState(1);
  const [AMPM,setAmpm] = useState("AM");
  const [alarmadd,setAlarmAdd] = useState([]);
  
  const handleAlarmAdd = ()=>{
    setAlarmAdd([...alarmadd,{}])
    props.alarmlist.push(`${hour}:${minute<10?"0"+minute:minute}:${second<10?"0"+second:second} ${AMPM}`)
  }

    return (
      <>
      <div className="alarm_container text-white justify-center items-center h-full w-[80vw] m-auto flex flex-col  gap-10" ref={props.alarmsection}>
      <div className="timer_display  h-[60px] w-full  flex items-center justify-center gap-10 pb-5">
                         <div className="hour_display ">
                         
                            <h1 className='text-[2.8rem]'>{hour<10?"0"+hour:hour}</h1>
                         </div>
                         <span className='text-white text-[2rem]'>:</span>
                         <div className="minute_display ">
                         <h1 className='text-[2.8rem]'>{minute<10?"0"+minute:minute}</h1>
                        
                         </div>
                         <span className='text-white text-[2rem]'>:</span>
                         <div className="second_display ">
                            <h1 className='text-[2.8rem]'>{AMPM}</h1>     
                         </div>
                </div>
     
      <div className="timerwheel shadow-2xl  shadow-cyan-950 h-[200px] w-full  grid  grid-cols-3 ">
       
       <div className="hour_picker  text-white text-[3rem]  h-full  overflow-scroll scroll-smooth flex flex-col ">
       {
           [...Array(25)].map((e,i)=>{
               return <div>
               <input type="number" value={i<10?"0"+i:i} readOnly onClick={(e)=>{setHour(Number(e.target.value))}}  className='cursor-pointer h-[4rem] w-full text-center bg-transparent  overflow-hidden p-2'/>
               </div>
           })
       }
       
       </div>

   <div className="minute_picker text-white text-[3rem]  h-full scroll-smooth  overflow-scroll flex flex-col  items-center">
   {
           [...Array(61)].map((e,i)=>{
               
               return <div>
               <input type="number" value={i<10?"0"+i:i} onClick={(e)=>{setMinute(Number(e.target.value)) }}  readOnly className='cursor-pointer h-[4rem] bg-transparent w-full text-center  overflow-hidden p-2'/>
               </div>
           })
       }
   </div>

   <div className="second_picker text-white text-[3rem]  h-full scroll-smooth overflow-scroll flex flex-col justify-center items-center">
   {
           [...Array("AM","PM")].map((e,i)=>{
               return <div>
               <input type="text" value={e} onClick={(e)=>{setAmpm(e.target.value)}} readOnly className='cursor-pointer text-white h-[4rem] w-full text-center bg-transparent overflow-hidden p-2'/>
               </div>
           })
       }
   </div>

       </div>

       <div className="btns flex gap-5">
        <Link to="/">
        <div className="setbtn p-4 bg-red-500 rounded-md" onClick={handleAlarmAdd}>
          <button>Set</button>
        </div>
        </Link>
        <Link to="/">    
        <div className="cancelbtn p-4 bg-red-500 rounded-md">
          <button>Cancel</button>
        </div>
        </Link>
       </div>
      </div>
      </>
    );
}

export default Alarmsection;