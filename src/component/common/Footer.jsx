import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <>
        <footer className=' w-[100%] h-[100%] bg-[#204454] shadow-2xl shadow-blue-900 flex'>
            <div className="left w-[20%] bg-[#204454]">
                
            </div>
            <div className="right rounded-l-[50px] w-[80%]  text-white flex items-center pl-[1rem] cursor-pointer bg-[#01161F]">
                
                <Link to="/alarmsection"><div className="addbtn shadow-md hover:shadow-blue-500 hover:scale-90 rounded-[50%]" >
                  <abbr title="Add Alarm"><AiOutlinePlus/></abbr> 
                </div></Link>
            </div>
        </footer>
        </>
    );
}

export default Footer;