import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardYoutube from './ProjectsCardYoutube';
import ProjectCardBlog from './ProjectsCardBlog';


const Projects = () => {
    return (
        <div id='Project' className='p-10 md:p-24  text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-20'>
                <ProjectCard 
                title="Facebook Clone"
                main="I will Create a website Facebook Clone With reactjs , Tailwindcss , Treejs and used component a library"
                />
                <ProjectCardYoutube
                title="Youtube Clone"
                main="I will Create a website Youtube Clone With reactjs , Tailwindcss , Treejs and used component a library"
                />
                <ProjectCardBlog 
                title="Blogind"
                main="I will Create a website Bloging With reactjs , Tailwindcss , Treejs and used component a library"
                />
            </div>
        </div>
    );
}; 

export default Projects