import React from 'react'

const LiveCasino = () => {
  return (
    <div className='mx-auto grid grid-cols-3 gap-8 w-4/5'>
      <div>
        <h2 className='text-[#FFF0A5] font-extrabold text-2xl'>Live Casino</h2>
        <div className='grid grid-cols-3 grid-rows-2 gap-4 absolute justify-center'>
              <img src={'/assets/liveCasino/game1.png'} alt="live-games" />
              <img src={'/assets/liveCasino/game2.png'} alt="live-games"/>
              <img src={'/assets/liveCasino/game3.png'} alt="live-games"/>
              <img src={'/assets/liveCasino/game4.png'} alt="live-games"/>
              <img src={'/assets/liveCasino/game5.png'} alt="live-games"/>
              <img src={'/assets/liveCasino/game6.png'} alt="live-games"/>
        </div>
        <button className='rounded-2xl flex justify-center'>
            Show All
          </button>
      </div>
      <div></div>
      <div>
        <img src='/assets/pirate2.png' alt='LiveCasino' height='450px' width='300px'/>
      </div>
    </div>
  )
}

export default LiveCasino