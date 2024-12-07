/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations",].map((item, index)=>{
                    return <div className='masker  h-[120px] '>
                        <div className='w-fit flex items-end '>
                            {index === 1 && (
                                <motion.div 
                            initial={{width: 0}} 
                            animate={{width: "9vw"}} 
                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                            className='mr-5 w-[9vw]  h-[5.7vw] relative  -top-[3.4vw] b'>
                                <img className='w-full h-full bg-cover' src="https://plus.unsplash.com/premium_photo-1728135850536-fd8c8a0eff59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </motion.div>)}
                    <h1  className='uppercase text-[9vw]   leading-[9.2vw]  font-["Founders_Grotesk"]  tracking-tighter font-bold'>{item}</h1>
                </div>
                </div>
                }) }
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-33 mb-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to the last pitch to IPO",].map((item, index) =>
            <p className='text-md font-light tracking-tight leading-[2vw]'>{item}</p> )}
            <div className="start flex items-center gap-5">
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
)
}

export default LandingPage