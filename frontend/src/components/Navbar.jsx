import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full  bg-gray-900 text-white py-6 px-4' >
        <div className='max-w-5xl mx-auto flex items-center justify-between' >
            <h3  className='text-2xl font-bold' >Finder</h3>

            <div  className='gap-10 hidden md:flex' >
                <p  className='cursor-pointer hover:text-gray-400' >Home</p>
                <p  className='cursor-pointer hover:text-gray-400' >About</p>
                <p  className='cursor-pointer hover:text-gray-400' >Contact</p>
            </div>

            <button  className='bg-white text-black px-4 py-2 rounded-md font-bold border-none outline-none hover:bg-gray-400'  >Login</button>
        </div>
    </div>
  )
}

export default Navbar