import React from 'react'
import './Bonuses.css'
const Bonuses = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
        <h2 className='text-[#FFF0A5] font-extrabold text-2xl flex justify-center'>Bonuses</h2>
        <div className='flex justify-between items-center bonus-wrap mx-auto gap-8'>
          <div className="relative w-[24rem] h-[32rem]">
            <img src='/assets/bonus/bonus-bg.png' alt='joining bonus' className="absolute inset-0 w-full h-full object-contain" />
            <img src='/assets/bonus/bonus1.png' alt='bonus1' className="absolute img-two" />
            <p className=' text-[#803D00] absolute font-extrabold text-2xl top-[17rem] left-[7rem]'>Joining Bonus</p>
          </div>

          <div className="relative w-[24rem] h-[32rem]">
            <img src='/assets/bonus/bonus-bg.png' alt='joining bonus' className="absolute inset-0 w-full h-full object-contain" />
            <img src='/assets/bonus/bonus3.png' alt='bonus1' className="absolute img-two" />
            <p className=' text-[#803D00] absolute font-extrabold text-2xl top-[17rem] left-[8rem]'>Bet Bonus</p>
          </div>

          <div className="relative w-[24rem] h-[32rem]">
            <img src='/assets/bonus/bonus-bg.png' alt='joining bonus' className="absolute inset-0 w-full h-full object-contain" />
            <img src='/assets/bonus/bonus2.png' alt='bonus1' className="absolute img-two" />
            <p className=' text-[#803D00] absolute font-extrabold text-2xl top-[17rem] left-[8rem]'>Refer Bonus</p>
          </div>
        </div>

    </div>
  )
}

export default Bonuses