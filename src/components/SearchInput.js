import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from "prop-types";

const API_KEY = process.env.REACT_APP_GEODB_KEY;
const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places';

function SearchInput({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const inputRef = useRef();
  const navigate = useNavigate();

  // Fetch cities from GeoDB
  const fetchCities = async (namePrefix) => {
    if (!namePrefix || namePrefix.length < 3) {
      setSuggestions([]);
      setShowDropdown(false);
      setFetchError(null);
      return;
    }
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetch(`${API_URL}?namePrefix=${namePrefix}&minPopulation=100000&limit=5&sort=population`, {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      });
      const data = await res.json();
      setSuggestions(data.data || []);
      setShowDropdown(true);
      setFetchError(null);
    } catch (e) {
      setFetchError("Failed to fetch cities.");
      setSuggestions([]);
      setShowDropdown(true);
    } finally {
      setLoading(false);
    }
  };

  // Debounced fetch
  const debouncedFetch = useRef(debounce(fetchCities, 400)).current;

  useEffect(() => {
    debouncedFetch(query);
    return () => debouncedFetch.cancel();
  }, [query, debouncedFetch]);

  // Handle city selection
  const handleSelect = (city) => {
    setQuery(`${city.name}, ${city.country}`);
    setShowDropdown(false);
    setSuggestions([]);
    setSelectedCity(city);
    setError(false);
    if (onSelect) onSelect(city);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
        setError(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

   // Handle search submission 
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (selectedCity) {
      setError(false);
      navigate(`/city/${encodeURIComponent(selectedCity.name)}/${selectedCity.wikiDataId}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <form className="w-full max-w-md" autoComplete="off" ref={inputRef} onSubmit={handleSearch}>
        <div className="relative">
          <div className="flex">
            <input 
              type="search" 
              id="search" 
              className="font-work block w-full p-3 pl-5 bg-white border border-gray-100 text-gray-900 text-lg rounded-l-2xl shadow placeholder:text-gray-500 
                focus:outline-none focus:ring-0 focus:border-gray-100 
                focus-visible:outline-none focus-visible:ring-0 focus-visible:border-gray-100 flex-1" 
              placeholder="Search for a city..." 
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setSelectedCity(null);
                setError('');
              }}
              onFocus={() => query.length >= 3 && setShowDropdown(true)}
              autoComplete="off"
            />
            <button
              type="button"
              className="font-work cursor-pointer p-3 bg-amber-500 inline-flex items-center text-black bg-brand hover:bg-amber-400 shadow-xs font-medium leading-5 rounded-r-2xl text-md
                focus:outline-none focus:ring-0 focus:border-transparent
                focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent"
              onClick={handleSearch}
            >
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
              Search
            </button>
          </div>
          {error && (
            <div className="font-work absolute top-15 bg-white border border-red-400 rounded-xl px-6 py-2 shadow-lg z-60 text-red-600 text-lg font-medium flex items-center justify-center"
                style={{ minWidth: '250px', pointerEvents: 'none' }}>
              Please enter a destination to start searching
            </div>
          )}
          {showDropdown && suggestions.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white rounded-2xl font-work border border-gray-200 rounded-b-2xl shadow-lg mt-1 max-h-60 overflow-auto">
              {loading && (
                <li className="px-4 py-2 text-gray-500 flex items-center">
                  <LoadingSpinner text="cities" />
                </li>
              )}
              {fetchError && (
                <li className="px-4 py-2 text-gray-500">Error: {fetchError}</li>
              )}
              {!loading && !fetchError && suggestions.length === 0 && (
                <li className="px-4 py-2 text-gray-500">No cities found.</li>
              )}
              {!loading && !fetchError && suggestions.map(city => (
                <li
                  key={city.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-2xl"
                  onClick={() => handleSelect(city)}
                >
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  onSelect: PropTypes.func,
};

SearchInput.defaultProps = {
  onSelect: null,
};

export default SearchInput;