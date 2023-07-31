import React, { useEffect, useRef, useState } from 'react';


function Worldclocksection(props) {
const time = new Date();    
const [second,setSec] = useState(time.getSeconds());
const [minute,setMin] = useState(time.getMinutes());
const [hour,setHour] = useState(time.getHours());

let ts = setInterval(() => {
const time = new Date();
const sec = time.getSeconds();
const min = time.getMinutes();
const hours = time.getHours();
    setHour(30 * hours + min / 2)
    setMin(6*min)
    setSec(6*sec)
    console.log(second);
}, 1000);


    return (
       <>
       <div >
        <div className="analog_clock_container  h-[90vh] w-full">
            <div className="analog_clock_content h-[100%] w-[100%] flex flex-col  items-center">
                <div className="analog_clock_img h-[200px] w-[200px] mt-10  ">

                    <div className="hour_pin hh " style={{transform:`rotate(${hour}deg)`}}>

                    </div>
                    <div className="minute_pin hh "style={{transform:`rotate(${minute}deg)`}}>

                    </div>
                    <div className="second_pin hh" style={{transform:`rotate(${second}deg)`}}>
                        
                    </div>
                    <div className="circle h-1.5 w-1.5 bg-black opacity-95 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]"></div>
                </div>
                <div className="world_time    w-[80%] flex flex-col items-center p-2">
                    <h1>India Standard Timezone</h1>
                </div>
            </div>
        </div>
       </div>
       </>
    );
}

export default Worldclocksection;