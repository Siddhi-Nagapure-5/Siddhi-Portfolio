"use client"

import Image from 'next/image';
import Link from 'next/link';

//Animation

import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  return (
   <nav className='bg-transparent'>

          <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <div className="flex items-center lg:justify-between justify-center py-5">
                  <div className="flex flex-shrink-0 items-center">
                      <Link href='/'>
                          <Image
                              src="/NexusGleam.jpeg"
                              alt="logo"
                              width="56"
                              height="56"
                              className='border rounded-lg'
                          />
                      </Link>
                  </div>

                  <ul className="mt-4 lg:flex h-screen hidden max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#about' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">About</div>
                          </Link>
                      </li>

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#experience' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Achievements</div>
                          </Link>
                      </li>

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#skills' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Skills</div>
                          </Link>
                      </li>

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#education' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">education</div>
                          </Link>
                      </li>

                      {/* <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#education' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Offers</div>
                          </Link>
                      </li> */}

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#blogs' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Rankings</div>
                          </Link>
                      </li>

                      <li>
                          <Link className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase" href='/#projects' >
                              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Projects</div>
                          </Link>
                      </li>

                  </ul>

              </div>
          </Fade>
    
   </nav>
  );
}

export default Navbar;





