import React from 'react'
import './PopularGames.css'

const PopularGames = () => {
  return (
    <section className='popularGamesWrap'>
        <h2 className='text-[#FFF0A5] font-extrabold text-2xl flex justify-center pt-4'>Popular Games</h2>
        <div className='game-wrap mx-auto flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center h-full w-full m-8 gap-4'>
            <span><img src='/assets/popularGames/left.png' alt='left'/></span>
            <div className='grid grid-cols-4 grid-rows-2 absolute justify-center'>
              <img src={'/assets/popularGames/game1.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game2.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game3.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game4.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game5.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game6.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game7.png'} alt="popular-games"/>
              <img src={'/assets/popularGames/game8.png'} alt="popular-games"/>
            </div>
            <span><img src='/assets/popularGames/right.png' alt='right'/></span>
          </div>
          <button className='rounded-2xl flex justify-center'>
            Show All
          </button>
        </div>
    </section>
  )
}

export default PopularGames