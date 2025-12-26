import { useEffect, useState } from "react";

const suggestedCities = [
  { name: "Rome", label: "Roma", country: "Italia" },
  { name: "Paris", label: "Parigi", country: "Francia" },
  { name: "New York", label: "New York", country: "USA" },
  { name: "London", label: "Londra", country: "Regno Unito" },
];

function CitySuggestions() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCityImages = async () => {
      const results = await Promise.all(
        suggestedCities.map(async (city) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${city.name}+city&per_page=1&orientation=landscape`,
            {
              headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
                "Accept-Version": "v1",
              },
            }
          );

          const data = await res.json();
          const photo = data.results[0];

          // Trigger download (REQUIRED by Unsplash)
          if (photo?.links?.download_location) {
            fetch(photo.links.download_location, {
              headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
              },
            });
          }

          return {
            ...city,
            photo,
          };
        })
      );

      setCities(results);
    };

    fetchCityImages();
  }, []);

  return (
    <div className="flex flex-row gap-6 justify-center pt-10 pb-10">
      {cities.map((city) => (
        <div
          key={city.name}
          className="relative flex overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-80 shadow-lg group transition-all duration-300 hover:cursor-pointer"
        >
          {city.photo && (
            <>
              <img
                src={city.photo.urls.regular}
                alt={city.photo.alt_description || city.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Crediti discreti in basso a destra */}
              <div className="absolute bottom-2 right-2 z-20 text-xs text-white opacity-50 pointer-events-auto">
                Photo by{" "}
                <a
                  href={`${city.photo.user.links.html}?utm_source=city_explorer&utm_medium=referral`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {city.photo.user.name}
                </a>{" "}
                on{" "}
                <a
                  href="https://unsplash.com/?utm_source=city_explorer&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Unsplash
                </a>
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

          <div className="absolute top-0 left-0 z-10 p-6 transition-all duration-300 group-hover:-translate-y-2">
            <h3 className="text-5xl tracking-wide font-bebas font-medium text-white drop-shadow group-hover:text-yellow-300 transition-colors duration-300">
              {city.label}
            </h3>
            <div className="text-md font-work leading-6 text-white group-hover:text-yellow-100 transition-colors duration-300">
              {city.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CitySuggestions;