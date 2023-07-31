import React, { useRef, useState } from 'react';
import Alarmring from '../Assests/ringtone/wakeup.mp3'
function Midsection(props) {
    const ringtone = new Audio(Alarmring)

    const removeHandler = (id)=>{
       const newlist = props.alarmlist.filter((l)=>l!==id);
       props.setAlarmList(newlist)
    }
    
    const alarmstopHandler = ()=>{
       console.log(ringtone);
        ringtone.pause();
    }
    setInterval(()=>{
        const time = new Date();
        const currenttime = time.toLocaleTimeString();
        for (const at of props.alarmlist) {
            console.log(currenttime);
            if (at===currenttime) {
                
                    ringtone.play();
                    ringtone.loop = true;
                    
                 
            }
        }
    },1000)
    return (
        <>
        <div className="text-white relative flex  w-[100%] h-full p-10 overflow-scroll">
      {
        props.alarmlist.length>=1?<div className='text-white h-20  flex  flex-col gap-5 w-[100%]'>
        {
          props.alarmlist.map((e)=>(
            <div key={Math.random()} className=' bg-sky-950 w-full flex items-center justify-between p-5'><h1 className='text-[1.2rem]'>{e}</h1>          
            <div className="btns flex gap-5">
                <div className="stopbtn" onClick={()=>alarmstopHandler()}>
                    <button>Stop</button>
                </div>
                <div className="deletebtn"  onClick={()=>removeHandler(e)}>

                    <button>Delete</button>
                </div>
            </div>
            </div>
          ))
        }
       
      </div>: <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>Click + To Add Alarm</h1>
      }
        
            
        </div>
        </>
    );
}

export default Midsection;