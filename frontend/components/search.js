import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const search = ({data}) => {
  return (
 <div className="flex items-center justify-center">
    <input
      className="mt-16 w-72 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      type="text"
      placeholder="Search..."
    />
    <button className="ml-2 bg-lgreen mt-16 px-4 py-2 text-black bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      <AiOutlineSearch/>
    </button>
  </div>
  )
}

export default search