import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] mx-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold'>Resorts</h3>
        <img className='w-full h-full max-w-[500px] max-h-[500px] object-cover relative border-4 border-white shadow-2xl' src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold'>Cruises</h3>
        <img className='w-full h-full max-w-[500px] max-h-[500px] object-cover relative border-4 border-white shadow-2xl' src="https://images.unsplash.com/photo-1559599746-8823b38544c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold'>Excursions</h3>
        <img className='w-full h-full max-w-[500px] max-h-[500px] object-cover relative border-4 border-white shadow-2xl' src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmElMjBkaXZpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Activities