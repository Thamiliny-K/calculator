import React from 'react'
import { FaDivide} from "react-icons/fa6";
import { FaBackspace } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function Cal() {
  return (
    <>
    <div className='w-full h-screen bg-red-900 flex justify-center items-center'>
        <div className='bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>

          <div className='w-full p-8 bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>
          <input type='text'/>
          </div>

          <div className='grid p-4 grid-cols-4 gap-6'>

            <div className='bg-[#171314] p-5  inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 text-white font-bold text-xl'>C</div>
            <div className='bg-[#171314] p-5  inset-shadow-sm  rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 text-white font-bold text-xl'>-</div>
            <div className='bg-[#171314] p-5  inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 text-white font-bold text-xl'><FaDivide /></div>
            <div className='bg-[#171314] p-5 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 text-white font-bold text-xl'><FaBackspace /></div>

          <div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>7</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>8</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>9</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'><RxCross2 /></div>
            
            <div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>4</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>5</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>6</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-500 hover:-translate-1 text-white font-bold text-xl'>+</div>

<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>1</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>2</div>
<div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>3</div>
<div className='bg-[#bf0000] p-5 row-span-2 inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl flex justify items-center'>=</div>

            <div className='bg-[#bf0000] col-span-2 p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl flex justify-center'>0</div>
            <div className='bg-[#bf0000] p-5  inset-shadow-lg rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 text-white font-bold text-xl'>.</div>
            
          </div>
          </div>

       </div>
</>
     
  )
}

export default Cal
