import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full h-[70vh] bg-gray-100' >
        <div className='max-w-5xl mx-auto flex flex-col items-center justify-center h-full gap-10' >
            <h1 className='text-6xl font-bold text-center' >Find Your Business Credibility</h1>
            <p className='text-center text-gray-500 text-xl font-bold' >Find reviews by real people</p>


            <div className="w-full flex items-center justify-center px-4">
  <div className="relative w-full max-w-xl">
    <input 
      type="text" 
      placeholder="Search for a business" 
      className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
</div>
        </div>

    </div>
  )
}

export default Hero