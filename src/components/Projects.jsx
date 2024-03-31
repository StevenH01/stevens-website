import React from 'react';
import internship from '../images/internship.png';
import vercelwebsite from '../images/vercelWebsite.png';
import pong from '../images/pong.png'
import { AiOutlineGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
      <div className='pb-8'>
        <p className='text-4xl mb-6 font-bold primary-color pb-1'>Projects</p>
        <p className='text-gray-400'>Check out some of my projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Project 1 */}
        <div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
            <img src={vercelwebsite} alt='' />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Personal Portfolio 2</span>
              <div className='pt-4 text-center'>
                <a href='https://portfolio-website-gules-six.vercel.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/StevenH01/portfolio-website' target='_blank' rel='noopener noreferrer'>
                  <AiOutlineGithub size={24} className='text-gray-400 hover:text-gray-600 cursor-pointer' />
                </a>
              </div>
            </div>
          </div>
          <span className='text-lg mt-2'>Description of Personal Portfolio 2</span>
        </div>

        {/* Project 2 */}
        <div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
            <img src={internship} alt='' />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Internship Project</span>
              <div className='pt-4 text-center'>
                <a href='https://www.ouredge.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <span className='text-lg mt-2'>Description of Internship Project</span>
        </div>

        {/* Project 3 */}
        <div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
            <img src={pong} alt='' />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Basic Pong Game</span>
              <div className='pt-4 text-center'>
                <a href='https://github.com/StevenH01/JavaGames/tree/main/Pong' target='_blank' rel='noopener noreferrer'>
                  <AiOutlineGithub size={24} className='text-gray-400 hover:text-gray-600 cursor-pointer' />
                </a>
              </div>
            </div>
          </div>
          <span className='text-lg mt-2'>Description of Basic Pong Game</span>
        </div>
      </div>
    </div>
  );

}

export default Projects;