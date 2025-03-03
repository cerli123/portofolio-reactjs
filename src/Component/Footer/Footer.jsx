import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='Footer' className='bg-[#465697] flex justify-around text-white md:p-12 items-center'>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold'>Contack Me</h1>
                <h3 className='text-sm md:text-2xl font-mono'>Fel Free to reach Out!</h3>
            </div>
            <ul className=' p-4 text-sm md:text-xl mt-3'>
                <li className='flex gap-2 items-center'>
                    <MdOutlineEmail size={40} className='mt-2' />
                    Spriupri@gmail.com
                </li>
                <li className='flex gap-2 items-center'>
                    <CiLinkedin size={40} className='mt-2' />
                    linkedin.com/ussername
                </li>
                <li className='flex gap-2 items-center'>
                    <FaGithub size={40} className='mt-2' />
                    github.com/cerli123
                </li>
            </ul>
        </div>
    );
};

export default Footer
