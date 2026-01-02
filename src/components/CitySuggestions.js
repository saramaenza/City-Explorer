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
    <div className="mx-6 md:mx-10">
        <h2 className="font-bebas text-4xl">{text}</h2>
        {loading && (
          <div className="flex items-center justify-center mt-8">
            <LoadingSpinner text="cities" />
          </div>
        )}
        {error && (
          <div className="font-work text-lg mt-8">Error: {error}</div>
        )}
        {!loading && !error && cities.length === 0 && (
          <div className="font-work text-lg mt-8">No suggestions found.</div>
        )}
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-12 mt-6">
        {cities.map((city) => (
          <div
            key={city.name}
            className="relative flex-1 min-w-0 flex overflow-hidden rounded-2xl px-4 sm:px-6 md:px-8 pb-8 pt-32 sm:pt-36 md:pt-40 shadow-lg group transition-all duration-300 hover:cursor-pointer"
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

            <div className="absolute top-0 left-0 z-10 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-bebas font-medium text-white drop-shadow group-hover:text-amber-500 transition-colors duration-300">
                {city.name}
              </h3>
              <div className="text-sm sm:text-md font-work leading-6 text-white group-hover:text-amber-500 transition-colors duration-300">
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