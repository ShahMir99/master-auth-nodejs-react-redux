import React from 'react'
import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#accbee] to-[#e7f0fd] flex items-center justify-center">
        <div className='flex flex-col items-center gap-2'>
            < LuLoader2 className='w-10 h-10 animate-spin'/>
            <h1 className='text-2xl'>Loading...</h1>
        </div>
    </div>
  )
}

export default Loading