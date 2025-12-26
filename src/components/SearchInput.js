import React from 'react'

function SearchInput() {
  return (
    <form className="max-w-md mx-auto mt-5">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 peer-focus:text-yellow-800 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input
                type="search"
                id="search"
                className="font-work block w-md p-3 pl-9 bg-white border border-gray-100 text-gray-900 text-md rounded-2xl shadow placeholder:text-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
                placeholder="Cerca città..."
                required
            />
        </div>
    </form>
  )
}

export default SearchInput