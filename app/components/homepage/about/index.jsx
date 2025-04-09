import React from 'react'
import { personalData } from '@/utils/data/personal-data';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";


//Animation

import {Fade} from "react-awesome-reveal";

function AboutSection() {
  return (
    <div id="about" className="relative z-50 border-t my-12 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className='absolute top-0 -z-10'
      />

    <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4"></div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
      </div>
      <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
        <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
          [About Me]
        </div>
      </Fade>
     

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
        
      <div className='order-2 lg:order-1'>
          <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <div className='font-medium mb-5 text-[#16f2b3] text-3xl mt-5 uppercase'>
              Who I am ?
            </div>
          </Fade>
          <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <p className='text-gray-200 text-sm lg:text-lg !leading-10'>
              {personalData.description}
            </p>
          </Fade>
         
          <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <div className='my-6 flex items-center gap-5'>
              <Link href={personalData.github}
                target='_blank'
                className='transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300'>
                <BsGithub size={24} />
              </Link>
              <Link href={personalData.linkedin}
                target='_blank'
                className='transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300'>
                <BsLinkedin size={24} />
              </Link>
              <Link href={personalData.facebook}
                target='_blank'
                className='transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300'>
                <BsFacebook size={24} />
              </Link>

              <Link href={personalData.leetcode}
                target='_blank'
                className='transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300'>
                <SiLeetcode size={24} />
              </Link>

              <Link href={personalData.twitter}
                target='_blank'
                className='transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300'>
                <FaTwitterSquare size={24} />
              </Link>
            </div>
          </Fade>
         
      </div>
       
       <div className='flex justify-center order-1 lg:order-2'>
          <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <Image
              src={personalData.profile}
              width={470}
              height={630}
              alt='Profile'
              className='rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer'
            />
          </Fade>
        
       </div>



    </div>
</div>
  )
}

export default AboutSection;
