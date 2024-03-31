import React from 'react';
import internship from '../images/internship.png';
import vercelwebsite from '../images/vercelWebsite.png';
import pong from '../images/pong.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
        <p className='text-gray-400'>Check out some of my projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* from this comment to the next, is the whole projects div, more projects just copy -> past -> adjust */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'
        >
          <img src={vercelwebsite} alt='' />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'
          >
            <span className='text-2xl font-bold text-white tracking-wider'>Personal Portfolio 2</span>
            <div className='pt-8 text-center'>
              <a href='/https://portfolio-website-gules-six.vercel.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                   font-bold text-lg'
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* copy all between this comment and one above */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'
        >
          <img src={internship} alt='' />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'
          >
            <div className='pt-8 text-center'>
              <a href='/https://www.ouredge.com/'>
            <span className='text-2xl font-bold text-white tracking-wider'>I do not have anything I can show besides the main page but, this is where I am currently interning at where I develop internal features for the company</span>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                   font-bold text-lg'
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'
        >
          <img src={pong} alt='' />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'
          >
            <span className='text-2xl font-bold text-white tracking-wider'>One of the first projects I developed as I was learning how to code. It is a basic game of pong that I developed with Java.</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;