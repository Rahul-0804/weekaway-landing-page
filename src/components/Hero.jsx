import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] '>
        <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="/" 
        className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] mx-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] h-full max-w-[600px] flex flex-col text-white p-4'>
                <h1 className='text-4xl font-bold'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>with Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa sit architecto vero voluptatibus? Maiores vero hic pariatur cumque voluptatum.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero