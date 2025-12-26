import React from 'react'
import SearchInput from './SearchInput'

function Hero() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative "
      style={{
        backgroundImage: 'url(../img/home_img.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
    >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-bebas text-6xl text-white drop-shadow-lg text-center tracking-wide">
            Esplora le città del mondo
            </h1>
            <h4 className="font-work text-xl font-medium text-white mt-3 drop-shadow-lg text-center">
            Scopri le meraviglie nascoste
            </h4>
            <SearchInput />
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-xs text-white opacity-50 pointer-events-auto">
            Foto di{" "}
            <a
            href="https://unsplash.com/it/@robinnoguier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            >
            Robin Noguier
            </a>{" "}
            su{" "}
            <a
            href="https://unsplash.com/it/foto/barca-bianca-tra-le-montagne-rocciose-sydwCr54rf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            >
            Unsplash
            </a>
        </div>
    </div>

    
  )
}

export default Hero