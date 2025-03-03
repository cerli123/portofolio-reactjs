import React from 'react';
import About_img from "../../assets/About2.png";
import { IoArrowForward } from 'react-icons/io5';
import { FcWiFiLogo } from "react-icons/fc";

const About = () => {
    return (
        <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold md:text-start text-center flex  '>About<FcWiFiLogo size={80} className='m-auto' /></h1>
                <div className='md:flex md:gap-20 flex-nowrap flex-col md:flex-row  items-center'>
                    <img className='md:h-80 mt-20 h-64 m-auto' src={About_img} alt="About" />
                    <ul className='ml-20'>

                    <div className='flex gap-6 py-4'>
                            <IoArrowForward size={80} className="mt-10" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal md:mt-10'>Back End Developer</h1>
                                <p className='text-sm md:text-md leading-tight md:mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic dolorum aut possimus cum veniam iste quam quas suscipit, ducimus, mollitia omnis porro magni distinctio cumque, similique earum animi! Maxime, necessitatibus facilis perferendis ad vel voluptate repellat libero sequi ab!
                                </p>
                            </span>
                        </div>

                        <div className='flex gap-6 py-4'>
                            <IoArrowForward size={80} className="mt-1" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Back End Developer</h1>
                                <p className='text-sm md:text-md leading-tight md:mb-10'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea repellendus placeat pariatur laboriosam reiciendis dolor odit, consectetur vel ad impedit consequatur nulla veniam modi rerum ratione consequuntur earum dignissimos, praesentium quis blanditiis! Saepe, officiis.
                                </p>
                            </span>
                        </div>

                        <div className='flex gap-6 py-4'>
                            <IoArrowForward size={80} className="mt-1" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Back End Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam maiores amet, reiciendis molestias animi cumque repellendus aspernatur blanditiis hic rerum impedit voluptatum possimus nam expedita earum est dolore voluptates.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;