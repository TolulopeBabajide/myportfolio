import React, { useState } from 'react';
import Nav from './Nav';
import Nabar from './Nabar';

const Projects =(props)=>{
    return (
        <div >
            <Nav />
            <h1 className="text-center">Projects</h1>
            <p>I have transformed ideas into remarkable digital products</p>
            <div className='space-y-10'>
                {props.projectLink.map((data)=>(
                        <div className='flex bg-slate-800 '>
                            <div className='w-1/2'>
                                <img src={data.image} alt="" />
                            </div>
                            <div className='w-1/2'>
                                <img src="" alt="" />
                                <h1>{data.name}</h1>
                                <p>description</p>
                                <h2>Technologies</h2>
                                <button> <a href={data.link}> visit website</a> </button>
                                
                            </div>
                        </div>
                    ))};
            </div>


            <div className="md:hidden " >
                <Nabar/>
            </div>
            
        
        
        
        </div>
    );
}
export default Projects;
