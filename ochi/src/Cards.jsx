/* eslint-disable no-unused-vars */
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' absolute left-10 px-5 py-1 rounded-full border-2 bottom-10'>&copy;2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className=' absolute left-10 px-5 py-1  rounded-full text-xs border-2 bottom-10'>RATING5.0ONCLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className=' absolute left-10 px-5 py-1 rounded-full text-xs border-2 bottom-10'>BUSINISS BOOTCAMP ALUMNI</button>
        </div>
        </div>
    </div>
  )
}

export default Cards