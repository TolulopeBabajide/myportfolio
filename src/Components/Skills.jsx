import React from 'react';
import Mainpage from './Mainpage';
import Nav from './Nav';
import { FaHtml5, FaCss3, FaNodeJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongoose, SiMongodb, SiTailwindcss, SiRedux } from 'react-icons/si';
import 'animate.css';
import Nabar from './Nabar';

const Skills = () => {
  return (
    <div className='h-screen  md:overflow-hidden bg-slate-950 text-white'>
      <div className='hidden md:block' >
        <Nav />
      </div>
      
      <div className='flex p-3 md:p-12 justify-between '>
        <div className="md:w-1/2 ">
          <div className='my-5'>
            <h1 className=' text-3xl md:text-5xl'>I'm specialized in</h1>
            <p className='text-3xl p-3'>
                &gt; Backend Software Development 
                <span className='animate__animated animate__flash animate__infinite animate__slowtext-3xl'> _</span>
            </p>
          </div>

          <div className='m-7'>
            <h2 className="p-1 border-s-2 text-xl text-left border-s-indigo-500">Frontend Development</h2>
            <div className='flex flex-wrap justify-between'>
              {[
                { icon: <FaHtml5 className='text-slate-400' />, text: 'HTML5' },
                { icon: <FaCss3 className='text-slate-400' />, text: 'CSS3' },
                { icon: <BiLogoJavascript className='text-slate-400' />, text: 'Javascript' },
                { icon: <FaReact className='text-slate-400' />, text: 'React' },
                { icon: <SiRedux className='text-slate-400' />, text: 'Redux' },
                { icon: <SiTailwindcss className='text-slate-400' />, text: 'Tailwind' },
                { icon: <FaBootstrap className='text-slate-400' />, text: 'Bootstrap' },
              ].map((item, index) => (
                <div key={index} className='flex items-center mt-4 w-1/3'>
                  {item.icon}
                  <p className='ms-1'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className='' />
          <div className='m-7'>
            <h2 className=" p-1 border-s-2 text-left text-xl border-s-indigo-500">Backend Development</h2>
            <div className='flex flex-wrap justify-between '>
              {[
                { icon: <FaNodeJs className='text-slate-400' />, text: 'Node.js' },
                { icon: <SiMongodb className='text-slate-400' />, text: 'MongoDB' },
                { icon: <SiMongoose className='text-slate-400' />, text: 'Mongoose' },
                { icon: <SiExpress className='text-slate-400' />, text: 'Express' },
              ].map((item, index) => (
                <div key={index} className='flex items-center mt-4 w-1/3'>
                  {item.icon}
                  <p className='ms-1'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div >
        <div className='hidden md:block' >
          <Mainpage />
        </div>
        
      </div>
      <div className="md:hidden " >
        <Nabar/>
      </div>
    </div>
  );
}

export default Skills;
