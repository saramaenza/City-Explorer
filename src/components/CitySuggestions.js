import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoCredit from "./PhotoCredit";
import { fetchCityUnsplashPhoto } from "../utils/unsplash";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";

function CitySuggestions({ suggestedCities, text }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch images for suggested cities from Unsplash
    const fetchCityImages = async () => {
      try {
        const results = await Promise.all(
          suggestedCities.map(async (city) => {
            const photo = await fetchCityUnsplashPhoto(city.name, process.env.REACT_APP_UNSPLASH_KEY);
            return { ...city, photo };
          })
        );
        setCities(results);
      } catch (e) {
        setError("Failed to load city images.");
      } finally {
        setLoading(false);
      }
    };
    fetchCityImages();
  }, [suggestedCities]);

  return (
    <div className="mx-4 md:mx-6 2xl:mx-10">
        <h2 className="font-bebas text-3xl 2xl:text-5xl">{text}</h2>
        {loading && (
          <div className="flex items-center justify-center mt-6">
            <LoadingSpinner text="cities" />
          </div>
        )}
        {error && (
          <div className="font-work text-base mt-6">Error: {error}</div>
        )}
        {!loading && !error && cities.length === 0 && (
          <div className="font-work text-base mt-6">No suggestions found.</div>
        )}
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-8 mt-4 2xl:mt-8">
        {cities.map((city) => (
          <div
            key={city.name}
            className="relative flex-1 min-w-0 flex overflow-hidden rounded-xl px-2 sm:px-4 md:px-6 pb-6 pt-24 sm:pt-28 md:pt-32 shadow-md group transition-all duration-300 hover:cursor-pointer"
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
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <PhotoCredit 
                  author={city.photo.user.name} 
                  url={`${city.photo.user.links.html}?utm_source=city_explorer&utm_medium=referral`} 
                  downloadUrl={city.photo.links.download}
                  isHero={false} />
              </>
            )}

            <div className="absolute inset-0 bg-black opacity-35 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute top-0 left-0 z-10 p-3 sm:p-4 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-3xl lg:text-4xl 2xl:text-5xl tracking-wide 2xl:tracking-wider font-bebas font-medium text-white drop-shadow group-hover:text-amber-500 transition-colors duration-300">
                {city.name}
              </h3>
              <div className="text-xs sm:text-sm 2xl:text-xl font-work leading-5 text-white group-hover:text-amber-500 transition-colors duration-300">
                {city.country}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

CitySuggestions.propTypes = {
  suggestedCities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string,
      wikiCode: PropTypes.string,
    })
  ).isRequired,
  text: PropTypes.string.isRequired,
};

export default CitySuggestions;