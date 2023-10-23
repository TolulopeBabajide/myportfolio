import React from 'react';
import Nav from './Nav';
import About from './About';
import myPic from '../Subject2.png';
import Mainpage from './Mainpage';

const Home = () => {
  return (
    <div className="md:h-screen md:overflow-hidden bg-slate-950">
      {/* Display the navigation bar on medium screens and larger */}
      <div className="hidden md:block">
        <Nav />
      </div>

      {/* For small screens (e.g., mobile devices) */}
      <div className="md:hidden  pt-10  flex justify-center items-center ">
        <img
          className="h-40 w-40 pt-3 bg-slate-700"
          src={myPic}
          alt="my picture"
        />
      </div>

      <div className="md:flex p-12 justify-between">
        {/* For medium screens and larger (e.g., tablets and desktops) */}
        <div className="">
          <About />
        </div>
        {/* For medium screens and larger, display the second Mainpage */}
        <div className="hidden md:block md:w-1/2">
          <Mainpage />
        </div>
      </div>
    </div>
  );
};

export default Home;
