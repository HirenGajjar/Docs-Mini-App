import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] flex justify-center w-full py-10 text-zinc-500 font-semibold text-xl'>Document</div>
        <h1 className='absolute text-[13vw] leading-none tracking-tighter  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-300 uppercase'>Docs</h1>
        </div>
    </>
  )
}

export default Background