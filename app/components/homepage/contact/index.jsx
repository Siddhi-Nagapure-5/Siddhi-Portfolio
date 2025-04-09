"use client"
import { personalData } from "@/utils/data/personal-data"
import {BiLogoLinkedin} from 'react-icons/bi';
import { FaFacebook,FaStackOverflow } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import {IoLogoGithub, IoMdCall} from 'react-icons/io';
import {TbMailForward} from 'react-icons/tb';
import Image from "next/image";
import Link from "next/link";

import {Fade} from "react-awesome-reveal";

function ContactSection() {
  return (
      <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
                    src="/section.svg"
                    alt="Hero"
                    width={1572}
                    height={795}
                    className='absolute top-0 -z-10'
                  />
            
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4"></div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full">
      
                    </div>
                  </div>
          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <div className="flex justify-center my-5 lg:py-8">
                  <div className="flex items-center">
                  <span className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
                  [Contact]
                  </span>
              </div>
          </div></Fade>
          <div className="flex flex-col justify-center gap-8 lg:gap-16 items-center">
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <p className="font-medium text-[#16f2b3] text-xl uppercase">Contact with me</p>
               </Fade>
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className="max-w-2xl text-white rounded-lg border border-[#464c6a] p-24">
                      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <p className="text-sm text-[#d3d8e8]">
                        {"If you have any queries and questions then feel free to reach out me. I am open to any work and opportunities."}
                    </p>
                    </Fade>

                    {/* Forms */}
                    <div className="mt-6 flex flex-col gap-4">
                          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <div className="flex flex-col gap-2">
                            <label className="text-base">Your Name: </label>
                            <input 
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength="100"
                            required={true}
                            />
                        </div>
                        </Fade>

                          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                      <div className="flex flex-col gap-2">
                          <label className="text-base">Your Email: </label>
                          <input
                              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                              type="text"
                              maxLength="100"
                              required={true}
                          />
                      </div>
                      </Fade>
                          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                      <div className="flex flex-col gap-2">
                          <label className="text-base">Your Message: </label>
                          <textarea
                              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                              type="text"
                              maxLength="100"
                              required={true}
                              rows="4"
                          />
                      </div>
                      </Fade>
                          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                      <div className="flex flex-col items-center gap-2 mt-6">
                        <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                                <span>Contact me</span>
                                <TbMailForward size={16}/>
                            </button>
                        </Link>
                      </div>
                      </Fade>
                    </div>
                </div>
</Fade>
             
                <div className="flex items-center gap-5 lg:gap-10">
                  <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <Link target="_blank" href={personalData.github}>
                        <IoLogoGithub 
                        className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                        />
                    </Link></Fade>
                  <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <Link target="_blank" href={personalData.linkedin}>
                      <BiLogoLinkedin
                          className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                          size={48}
                      />
                  </Link></Fade>

                  <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <Link target="_blank" href={personalData.twitter}>
                      <FaXTwitter
                          className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                          size={48}
                      />
                  </Link>
                  </Fade>

                  <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <Link target="_blank" href={personalData.github}>
                      <FaStackOverflow
                          className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                          size={48}
                      />
                  </Link>
                  </Fade>

                  <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <Link target="_blank" href={personalData.facebook}>
                      <FaFacebook
                          className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                          size={48}
                      />
                  </Link>
                  </Fade>
                </div>
          </div>
    </div>
  )
}

export default ContactSection
