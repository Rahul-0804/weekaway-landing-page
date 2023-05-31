import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center font-bold text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover'  src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover'  src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover'  src="https://images.unsplash.com/photo-1580876206701-30de22e5326c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJlc29ydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
            
        </div>
    </div>
  )
}

export default Gallery