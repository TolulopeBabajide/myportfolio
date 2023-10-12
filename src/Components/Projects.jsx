import React from 'react'

const Projects = (props) => {
  return (
    <div>
        <h1 className="text-center">Projects</h1>
        <div className='flex justify-evenly'>
            
                {props.projectLink.map((data)=>(
                    <div className='w-44 border-gray-300 h-32 text-center border-2' key={data.id}>
                        <h3>{data.name}</h3>
                        <img src={data.image} alt="" />
                        <a className='rounded-full bg-slate-800 text-white p-1 text-xs' href={data.link} >Visit Website</a>
                    </div>
                ))}
            
        </div>
    </div>
  )
}

export default Projects