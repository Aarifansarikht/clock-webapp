import React, { useEffect, useRef, useState } from 'react';
import {BsPlay} from 'react-icons/bs';
import {AiOutlineReload} from 'react-icons/ai'
import {PiStop} from 'react-icons/pi'
function Timersection(props) {
    const [hour,setHour] = useState(0)
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    const inputfocus = useRef(0)
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false)
    const [startstate, setStartState] = useState(false);
    const [startstopbtn, setStartStopbtn]  = useState(false)
    useEffect(() => {
        if (stop) {
         
            setId(setInterval(() => {
  
                setSecond((second) =>{if (hour!=0 || minute!=0 ||second>0) {
                    if (second>0) {
                        return second-1
                    }
                    else{
                           setSecond(1)
                            return minute-1                 
                    }
                }else{
                    return second=0;
                }})    
                console.log(second);
            }, 100))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (second == 0) {
            if (hour==0&& minute==0) {
                setSecond(0)
                setStop(false)
                clearInterval(id)
            }
            else{
                setSecond(59)
            }
            if (minute>0) {
                setMinute(minute - 1) 
            }
        }
    }, [second])

    useEffect(() => {
        if (minute == 0 && second == 0) {
           if (hour>0) {
               setHour(hour - 1)
               setMinute(59)
              
           }
        }
    }, [minute, second])


    const handleStart = () => {
        setStop(true)
        setStartState(true)
        setStartStopbtn(true)
 
    }
    const handleStop = () => {
            setStop(false)
            setStartState(true)
            setStartStopbtn(false)
    }
    const handleReset = () => {
        setStop(false)
        setStartStopbtn(false)
        setHour(0)
        setMinute(0)
        setSecond(0)
        setStartState(false)
    }




    return (
        <>
        <div className="timer_container  text-white h-full flex justify-center items-center">
            <div className="main_content bg-[#01161F] h-[75vh] w-[80vw] flex gap-4 justify-center items-center flex-col ">
                <div className="timer_display  h-[60px] w-full  flex items-center justify-center gap-10">
                         <div className="hour_display ">
                            <h1 className='text-[2.8rem]'>{hour<10?"0"+hour:hour}</h1>
                         </div>
                         <span className='text-white text-[2rem]'>:</span>
                         <div className="minute_display ">
                         <h1 className='text-[2.8rem]'>{minute<10?"0"+minute:minute}</h1>
                        
                         </div>
                         <span className='text-white text-[2rem]'>:</span>
                         <div className="second_display ">
                            <h1 className='text-[2.8rem]'>{second<10?"0"+second:second}</h1>
                               
                         </div>
                </div>

                <div className={stop==true?"hidden":"timerwheel shadow-2xl  shadow-cyan-950 h-[200px] w-full  grid  grid-cols-3 "}>
       
                <div className="hour_picker  text-white text-[4rem]  h-full  overflow-scroll scroll-smooth flex flex-col ">
                {
                    [...Array(25)].map((e,i)=>{
                        return <div>
                        <input type="number" value={i<10?"0"+i:i} onClick={(e)=>{setStartState(true)||setHour(Number(e.target.value))}} readOnly className='cursor-pointer h-[4rem] w-full text-center bg-transparent  overflow-hidden p-2'/>
                        </div>
                    })
                }
                
                </div>

            <div className="minute_picker text-white text-[4rem]  h-full scroll-smooth  overflow-scroll flex flex-col  items-center">
            {
                    [...Array(61)].map((e,i)=>{
                        return <div>
                        <input ref={inputfocus} type="number" value={i<10?"0"+i:i} onClick={(e)=>{setStartState(true)||setMinute(Number(e.target.value)) }} readOnly className='cursor-pointer h-[4rem] bg-transparent w-full text-center  overflow-hidden p-2'/>
                        </div>
                    })
                }
            </div>

            <div className="second_picker text-white text-[4rem]  h-full scroll-smooth overflow-scroll flex flex-col  items-center">
            {
                    [...Array(61)].map((e,i)=>{
                        return <div>
                        <input type="number" value={i<10?"0"+i:i} onClick={e=>{setStartState(true)||setSecond(Number(e.target.value))}} readOnly className='cursor-pointer h-[4rem] w-full text-center bg-transparent overflow-hidden p-2'/>
                        </div>
                    })
                }
            </div>

                </div>
                <div className="btns pt-[2rem] flex items-center justify-center h-[50px] w-[200px]  gap-10">
                    <div className="start_btn h-[50px] w-[50px] text-[2rem] flex justify-center items-center bg-red-500 rounded-[50%]" onClick={startstate==true&&startstopbtn==false?handleStart:handleStop}>
                        {stop==false?<BsPlay/>:<PiStop/>} 
                    </div>
                    <div className="reload_btn text-[1.8rem] h-[50px] w-[50px]  flex justify-center items-center bg-red-500 rounded-[50%]" onClick={handleReset}>
                        <AiOutlineReload/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Timersection;