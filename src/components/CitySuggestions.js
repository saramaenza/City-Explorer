import React from 'react';

const suggestedCities = [
  { name: 'Roma', country: 'Italia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWyq_eKnfHFkKRUUDfUE5AVSS-kYfHAg1Tg&s' },
  { name: 'Parigi', country: 'Francia', image: 'https://images.unsplash.com/photo-paris' },
  { name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-nyc' },
  { name: 'Budapest', country: 'Ungheria', image: 'https://images.unsplash.com/photo-budapest' },
];

function CitySuggestions() {
  return (
    <div className="flex flex-row gap-6 justify-center pt-10 pb-10">
      {suggestedCities.map((city) => (
        <div className="relative flex overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-80 shadow-lg group transition-all duration-300 hover:cursor-pointer" key={city.name}>
          <img src={city.image} alt={city.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 z-10 p-6 transition-all duration-300 group-hover:-translate-y-2">
            <h3 className="text-5xl tracking-wide font-bebas font-medium text-white drop-shadow group-hover:text-yellow-300 transition-colors duration-300">{city.name}</h3>
            <div className="text-md font-work leading-6 text-white group-hover:text-yellow-100 transition-colors duration-300">{city.country}</div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default CitySuggestions;