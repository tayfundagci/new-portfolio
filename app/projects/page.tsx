import React from 'react'

const index = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col p-5 md:p-0'>
      <h2 className="text-center text-black dark:text-white text-2xl font-bold mb-4">
        Tailwind Card Excercise
      </h2>
      <div className='card flex flex-col bg-gray-300 dark:bg-[#191919] border border-gray-800 dark:border-white shadow-md dark:shadow-white shadow-black  w-full md:w-1/3 rounded-2xl p-6'>
        <div className='bg-gray-700 h-16 w-16 flex justify-center items-center rounded-full mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" fill="#dedede" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
        </div>
        <h2 className='text-black dark:text-white text-2xl font-bold mb-4'>
          Example Card
        </h2>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti mollitia, omnis, tempora perferendis quae sed ipsam nemo libero error veritatis saepe voluptatem soluta facilis iure facere, maxime est dolorem! Maiores.
        </p>
        <div className='flex md:flex-row flex-col justify-between mt-4 px-6'>
          <button className='text-white bg-gray-700 buttons'>1</button>
          <button className='text-white bg-gray-700 buttons'>2</button>
          <button className='text-white bg-gray-700 buttons'>3</button>
          <button className='text-white bg-gray-400 buttons'>4</button>
          <button className='text-gray-500 bg-gray-100 buttons'>5</button>
        </div>
        <button className='bg-gray-800 dark:bg-gray-300 font-semibold text-lg rounded-3xl text-orange-400 w-full mt-4 p-3 hover:cursor-pointer'>SUBMIT</button>
      </div>
    </div>
  )
}

export default index