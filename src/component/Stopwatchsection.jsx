import React, { createElement, useEffect, useState } from 'react';
import {AiOutlineReload} from 'react-icons/ai'
import {PiStop} from 'react-icons/pi'
import {BsPlay} from 'react-icons/bs';
import {PiFlagPennantLight} from 'react-icons/pi'

function Stopwatchsection(props) {


    const [hours, setHours] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false)
    const [startstopbtn, setStartStopbtn]  = useState(false)
    const [createlap,setCreateLap] = useState("hello");
    const [addlap,setAddlap] = useState([]);
    const [laphour,setLaphour] = useState("");
    const [lapminute, setLapminute] = useState("")
    const [lapsecond, setLapsecond] = useState("")
    

    useEffect(() => {
        if (stop) {
            setId(setInterval(() => {
                setSecond((second) => second + 1)
            }, 10))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (second >= 60) {
            setMinute(minute + 1)

            setSecond(0)
        }
    }, [second])

    useEffect(() => {
        if (minute == 59 && second == 60) {
            setMinute(0)
            setSecond(0)
            setHours(hours + 1)
        }
    }, [minute, second])


    const handleStart = () => {
        setStop(true)
        
    }
    const handleStop = () => {
        setStop(false)
        
    }
    const handleReset = () => {
        setHours(0)
        setMinute(0)
        setSecond(0)
        setStop(false)

        laps.splice(0,laps.length);
    }
    const [laps,setLaparr] = useState([])
  
    const HandleLap = ()=>{
               setAddlap(
                [...addlap,{}]
                )
                laps.push(`${hours}:${minute}:${second}`)
    }

    return (
        <>
        <div className="stopwatch_container flex justify-center items-center p-4">
            <div className="stopwatch_content  h-[80vh] w-[70vw]  flex flex-col items-center justify-center">
            <div className="stopwatch_display h-[40vh] w-[100%]  flex flex-col items-center justify-center gap-2">
               <div className="stopwatch_main_display flex justify-center gap-5 items-center  w-full h-[80px]">
               <div className="hour_display ">
                            <h1 className='text-[2.8rem]'>{hours<10?"0"+hours:hours}</h1>
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
               <div className="lap_section h-[200px]  overflow-scroll w-full">
                    <ol className='text-white  list-decimal pl-10' >
                    
               {
                    laps.map((e)=>(
                    <li  >
                        {e}
                    </li>

                    ))
               }
                    </ol>
               </div>
            </div>
                <div className="btns h-[20vh] w-full flex justify-center items-center gap-10">
                <div className="start_btn h-[50px] w-[50px] text-[2rem] flex justify-center items-center bg-red-500 rounded-[50%]" onClick={stop==false?handleStart:handleStop}>
                        {stop==false?<BsPlay/>:<PiStop/>} 
                    </div>
                    <div className="reload_btn text-[1.8rem] h-[50px] w-[50px]  flex justify-center items-center bg-red-500 rounded-[50%]" onClick={stop==false?handleReset:HandleLap}>
                        {stop==false?<AiOutlineReload/>:<PiFlagPennantLight/>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Stopwatchsection;