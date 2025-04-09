"use client"
import Image from 'next/image';

import {Fade} from "react-awesome-reveal";

function Blog() {
  return (
      <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}><div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
        [Blogs]
      </div></Fade>
                  
    </div>
  )
}

export default Blog
