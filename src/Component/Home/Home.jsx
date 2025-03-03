import React from 'react';
import avatarImg from "../../assets/About.png";
// import TextChange from '../../TextChange';
import TextChange2 from '../TextChange/TextChange2';


const Home = () => {
    return (
        <div id='Home' className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10">
                <h1 className="text-3xl md:mt-10 md:text-6xl  font-bold flex leading-normal tracking-tighter  pl-0">
                    Hello Im yusuf
                </h1>
                <p className="text-sm md:mt-4 md:text-xl tracking-tighter  pt-2 pl-0 ">   Im <TextChange2/> 
                </p>
                <button className="mt-5 md:mt-20 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"><a href="#Footer">Contack Me</a></button>
            </div>
            <div className="md:w-3/4 flex justify-center mt-20 md:mt-0">
                <img className="rounded-full shadow-2xl bg-white w-3/4 md:w-2/3 md:p-5  md:pb-4" src={avatarImg} alt="Avatar" />
            </div>
        </div>
    );
}

export default Home;