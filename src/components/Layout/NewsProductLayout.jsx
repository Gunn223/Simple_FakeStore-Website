import React from 'react'

const NewsProductLayout = () => {
  return (
    <>
    <div className='flex justify-between mx-20 items-center'>
      <h1 className="text-4xl mt-10 bitter leading-normal font-bold">
        News Feed That 
        <span className='block '>
          You Need To Know
        </span>
      </h1>
    </div> 
    <div className="flex mx-10 mt-10 gap-5">
        <div className="flex-1  uppercase">
          <img src="https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model_foto" className='w-full  object-cover rounded-md'/>
          <h1 className='text-xl font-bold my-2'>
            Trending Fashion of new world
            </h1>
          <p className='text-lg font-semibold'>jan 09,2024</p>
        </div>
     <div class="flex-initial w-[40%]">
      <img src="https://images.pexels.com/photos/1535051/pexels-photo-1535051.jpeg?auto=compress&cs=tinysrgb&w=600" alt="model_foto" className='w-full h-[465px] object-cover rounded-md'/>
      <h1 className='text-xl font-bold my-2'>
           Last Fashion on this new years
            </h1>
          <p className='text-lg font-semibold'>dec 09,2024</p>
     </div>
    </div>
    </>
  )
}

export default NewsProductLayout

