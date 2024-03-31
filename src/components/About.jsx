import React from 'react';
import aboutimg from '../images/aboutimg.png';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
              Hello! I&#39;m Steven Ho, an ambitious and driven aspiring software engineer from Sacramento, California, currently in my senior year at 
              California State University, Sacramento, pursuing a BS in Computer Science. Actively seeking entry-level or internship opportunities, 
              I&#39;m passionate about embracing challenges and continuously learning in the dynamic tech industry. Beyond coding, I enjoy a diverse 
              range of hobbies, from outdoor activities like tennis and football to gaming and coffee making. Excited to contribute to the tech 
              community, I&#39;m eager for the growth and knowledge that lie ahead in my career journey.
              </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg} width={300} height={300} alt='' />
      </div>
    </div>
  );
}

export default About;