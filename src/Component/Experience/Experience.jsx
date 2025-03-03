import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, } from 'react-icons/fa';
import { SiRedis } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { RiNetflixFill } from '@remixicon/react';
import { FaAmazon } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaDeezer } from 'react-icons/fa';

const Experience = () => {
    return (
        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
            <div className='flex flex-wrap items-center justify-around gap-8'>
                <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 color='#E34F26' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJs color='#F7DF1E' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCss3 color='#1572b6' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaReact color='#61DAFB' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaFigma color='#F24E1E' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiMongodb color='#47A248' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiRedis color='#FF4438' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaPhp color='#1572b6' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaDeezer color='#E50914' size={50} />
                    </span>
                </div>
                
                <div className='flex flex-col gap-6 w-full md:w-1/2'>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center'>
                        <FaGoogle color='#4285F4' size={50}/>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Software Engineer, Google</h2>
                            <p className='text-sm leading-tight font-thin'>Feb 2025 - Present</p>
                            <ul className='text-sm p-2'>
                                <li>Full Stack Development with React and Node.js</li>
                                <li>Leading technical initiatives and mentoring junior developers</li>
                            </ul>
                        </span>
                    </div>

                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center'>
                        <RiNetflixFill color='#E50914' size={50}/>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Senior Software Engineer, Netflix</h2>
                            <p className='text-sm leading-tight font-thin'>Jan 2023 - Jan 2025</p>
                            <ul className='text-sm p-2'>
                                <li>Streaming platform optimization</li>
                                <li>Frontend performance improvements</li>
                            </ul>
                        </span>
                    </div>

                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center'>
                        <FaAmazon color='#FF9900' size={50}/>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Software Development Engineer, Amazon</h2>
                            <p className='text-sm leading-tight font-thin'>Jun 2021 - Dec 2022</p>
                            <ul className='text-sm p-2'>
                                <li>AWS cloud infrastructure development</li>
                                <li>E-commerce platform optimization</li>
                            </ul>
                        </span>
                    </div>

                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center'>
                        <FaYoutube color='#E50914' size={50}/>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Software Development Engineer, Amazon</h2>
                            <p className='text-sm leading-tight font-thin'>Jun 2024 - Dec 2025</p>
                            <ul className='text-sm p-2'>
                                <li>AWS cloud infrastructure development</li>
                                <li>E-commerce platform optimization</li>
                            </ul>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience
