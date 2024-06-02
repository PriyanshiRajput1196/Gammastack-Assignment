import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-wrap'> 
      <div className='overlay'/>
      <div className='banner-inner'>
        <div className='inner-left'>
          <h2>Amazing</h2><h2> casino</h2>
          <p>just a click away</p>
          <button className='rounded-2xl '>
            Play Now
          </button>
        </div>
        <div className='right'>
          <div className="relative w-[24rem] h-[32rem] top-8 right-[8rem]">
            <img src='/assets/wheel.png' alt='wheel' className="absolute inset-0 w-full h-full object-cover" />
            <img src='/assets/pirate1.png' alt='pirate' className="absolute inset-0 w-full h-full object-cover mt-[3rem] ml-[-2rem] top-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner