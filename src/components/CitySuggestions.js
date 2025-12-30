import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoCredit from "./PhotoCredit";
import { fetchCityUnsplashPhoto } from "../utils/unsplash";

function CitySuggestions({ suggestedCities, text }) {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCityImages = async () => {
      const results = await Promise.all(
        suggestedCities.map(async (city) => {
          const photo = await fetchCityUnsplashPhoto(city.name, process.env.REACT_APP_UNSPLASH_KEY);
          return { ...city, photo };
        })
      );
      setCities(results);
    };
    fetchCityImages();
  }, [suggestedCities]);

  return (
    <div className="mx-10">
        <h2 className="font-bebas text-4xl">{text}</h2>
        <div className="flex flex-row justify-center gap-12 mt-6">
        {cities.map((city) => (
            <div
            key={city.name}
            className="relative flex-1 min-w-0 flex overflow-hidden rounded-2xl px-8 pb-8 pt-40 shadow-lg group transition-all duration-300 hover:cursor-pointer"
            onClick={() =>
              navigate(
                `/city/${encodeURIComponent(city.name)}/${encodeURIComponent(city.wikiCode || "")}`
              )
            }
            >
            {city.photo && (
                <>
                <img
                    src={city.photo.urls.regular}
                    alt={city.photo.alt_description || city.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <PhotoCredit author={city.photo.user.name} url={`${city.photo.user.links.html}?utm_source=city_explorer&utm_medium=referral`} downloadUrl={city.photo.links.download} />
                </>
            )}

            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

            <div className="absolute top-0 left-0 z-10 p-6 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-5xl tracking-wide font-bebas font-medium text-white drop-shadow group-hover:text-yellow-500 transition-colors duration-300">
                {city.name}
                </h3>
                <div className="text-md font-work leading-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                {city.country}
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default CitySuggestions;