import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroimage from '../images/selfie.png';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img className='rounded' src={heroimage} alt='hero image' />
      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I&#39;m a
          </span>
          <br />
          <TypeAnimation sequence={[
              "Frontend Dev",
              1000,
              "Web Desiginer",
              1000,
              "Student",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          My name is Steven Ho, I currently have a year of experience in Web Developement
        </p>
        <div className='my-8'>
          <a href='/' className='px-6 py-3 w-full rounded-xl mr-4
            bg-gradient-to-br from-green-600 to-teal-400 text-white'>
            Download CV
          </a>
          <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 border
             border-gray-400 hover:bg-gradient-to-br from-green-600 to-teal-400 text-white hover:border-none'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;