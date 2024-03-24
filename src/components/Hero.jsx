import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroimage from '../images/selfie.png';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img src={heroimage} alt='hero image' />
      </div>

      <div className='col-span-2 px-5'>
        Text
      </div>
    </div>
  )
}

export default Hero;