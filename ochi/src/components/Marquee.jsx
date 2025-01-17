/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full   py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden  whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity ,ease: "linear", duration: 10}}  className='text-[16vw] leading-none relative -top-10 font-["FoundersGrotesk-Boldltalic"] uppercase pt-10 pr-20  -mb-[4vw] font-semibold'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity ,ease: "linear", duration: 10}}  className='text-[16vw] leading-none relative -top-10 font-["FoundersGrotesk-Boldltalic"] uppercase pt-10  -mb-[4vw] pr-20 font-semibold'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee