import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
        <header className='w-[90%] h-[100%]  flex justify-between items-center  text-white m-auto '>
            <div className="logo text-[1.5rem]">
                <h1 className='font-bold'>Clock</h1>
            </div>
            <nav>
                <ul className='flex gap-3'>
                    <li><Link className='p-[0.4rem]  cursor-pointer text-[0.8rem] hover:bg-white rounded-md hover:text-black' to="/">Alarm</Link></li>
                    <li><Link className='p-[0.4rem] cursor-pointer text-[0.8rem] hover:bg-white rounded-md hover:text-black' to="/Worldclocksection">World&nbsp;Clock</Link></li>
                    <li><Link className='p-[0.4rem] cursor-pointer text-[0.8rem] hover:bg-white rounded-md hover:text-black' to="/Stopwatchsection">StopWatch</Link></li>
                    <li><Link className='p-[0.4rem] cursor-pointer text-[0.8rem] hover:bg-white rounded-md hover:text-black' to="/Timersection">Timer</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;