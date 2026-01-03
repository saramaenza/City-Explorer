import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCityUnsplashPhoto } from "../utils/unsplash";
import AttractionsList from './AttractionsList';
import CityInfoCard from './CityInfoCard';
import CityHero from './CityHero';

function CityDetail() {
  const { cityName, wikiCode } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingAttractions, setLoadingAttractions] = useState(true);
  const [loadingInfoCard, setLoadingInfoCard] = useState(true);
  const [labelCityName, setLabelCityName] = useState(cityName);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [cityDetails, setCityDetails] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [errorWeather, setErrorWeather] = useState(null);
  const [errorInfoCard, setErrorInfoCard] = useState(null);
  const [isFetchingCityDetail, setIsFetchingCityDetail] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setPhoto(null);
    setLoadingImage(true);

    //Get city image from Unsplash
    const fetchCityImage = async () => {
      const photoResult = await fetchCityUnsplashPhoto(cityName, process.env.REACT_APP_UNSPLASH_KEY);
      setPhoto(photoResult);
      setLoadingImage(false);
    };

    //Get city weather from OpenWeather
    const fetchCityWeather = async () => {
      setErrorWeather(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=en&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch weather data.");
        }
        const data = await res.json();
        if (!data.city || !data.list || data.list.length === 0) {
          throw new Error("No weather data found.");
        }
        setLabelCityName(data.city.name);
        setWeather(data.list[0]);
        setForecast(data.list.slice(1, 6)); // salva le prossime 5 previsioni
      } catch (e) {
        setErrorWeather(e.message || "Failed to fetch weather data.");
        setWeather(null);
        setForecast([]);
      } finally {
        setLoadingWeather(false);
      }
    };

    //Get city details from GeoDB
    const fetchCityDetail = async (retryCount = 0) => {
      if (isFetchingCityDetail) return; // Prevent multiple simultaneous fetches
      setIsFetchingCityDetail(true);
      setLoadingInfoCard(true);
      setErrorInfoCard(null);
      try {
        const res = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/places/${wikiCode}`, {
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_GEODB_KEY,
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
          }
        );
        if (res.status === 429 && retryCount < 5) {
          // Wait 2 seconds and retry
          setTimeout(() => fetchCityDetail(retryCount + 1), 2000);
          return;
        }
        if (res.status === 429) {
          setErrorInfoCard("you have exceeded the API request limit. Please try again later.");
          setLoadingInfoCard(false);
          fetchAttractions(wikiCode);
          return;
        }
        const data = await res.json();
        const cityDetailsData = data.data;
        if (!cityDetailsData) {
          setErrorInfoCard("city not found.");
          setLoadingInfoCard(false);
          fetchAttractions(wikiCode);
          return;
        }
        if (isMounted) {
          setCityDetails(cityDetailsData);
          setLoadingInfoCard(false);
          fetchAttractions(wikiCode);
        }
      } finally {
        setIsFetchingCityDetail(false);
      }
    };

    //Get city attractions from Wikidata
    const fetchAttractions = async (wikiDataId) => {
      const query = `
        SELECT DISTINCT ?attraction ?attractionLabel ?gps WHERE {
          ?attraction (wdt:P31/wdt:P279*) wd:Q570116;
            wdt:P625 ?gps;
            rdfs:label ?attractionLabel.
          ?attraction wdt:P131 wd:${wikiDataId}
          FILTER(LANG(?attractionLabel) = "en")
        }
      `;
      const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      const data = await res.json();
      const results = data.results.bindings.map(item => ({
        name: item.attractionLabel.value,
        link: item.attraction.value
      }));
      setAttractions(results);
      setLoadingAttractions(false);
    };

    fetchCityImage();
    fetchCityWeather();
    fetchCityDetail();

    return () => { isMounted = false; };

  }, [cityName, wikiCode]);

  return (
    <>
      <CityHero
        photo={photo}
        labelCityName={labelCityName}
        weather={weather}
        forecast={forecast}
        loadingWeather={loadingWeather}
        loadingImage={loadingImage}
        errorWeather={errorWeather}
      />
      
      <div className="py-10 mx-6 md:mx-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0 px-10">
            <CityInfoCard 
              cityDetails={cityDetails} 
              loading={loadingInfoCard} 
              error={errorInfoCard}
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <AttractionsList 
              attractions={attractions} 
              loading={loadingAttractions} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CityDetail;