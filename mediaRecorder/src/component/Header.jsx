import React from 'react'
import { SlCamrecorder } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <header className='flex items-center text-[42px] bg-slate-600 h-20 w-full '>
            <div className='w-4/5 ml-12'><SlCamrecorder /></div>
            <div className='flex justify-evenly w-1/5'>
                <a href='https://www.linkedin.com/in/aryan5084102/' target='_blank' className='w-4/5 ml-12'><FaLinkedinIn /></a>
                <a href='https://github.com/Aryan5084102' target='_blank' className='w-4/5 ml-12'><FaGithub /></a>
            </div>
        </header>
    )
}

export default Header