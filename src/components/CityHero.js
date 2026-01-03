import HeroSection from './HeroSection';
import LoadingSpinner from './LoadingSpinner';
import WeatherPanel from './WeatherPanel';
import PhotoCredit from "./PhotoCredit";
import PropTypes from "prop-types";

function CityHero({ photo, labelCityName, weather, forecast, loadingWeather, loadingImage, errorWeather }) {
  const UNSPLASH_IMAGE_URL = photo ? photo.urls.regular : undefined;
  return (
    <>
      <HeroSection
        image={UNSPLASH_IMAGE_URL}
        title={labelCityName}
        homepage={false}
        isCityHero={true}
      >
        <div className="bg-white/75 rounded-xl w-2/3 mt-5 p-3">
          <WeatherPanel weather={weather} forecast={forecast} loading={loadingWeather} error={errorWeather}/>
        </div>
        {loadingImage && <LoadingSpinner text="image" />}
      </HeroSection>
      <PhotoCredit 
        author={photo?.user?.name}  
        url={`${photo?.user?.links?.html}?utm_source=city_explorer&utm_medium=referral`}
        downloadUrl={photo?.links?.download} 
        isHero={true} />
    </>
  );
}

CityHero.propTypes = {
  photo: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    user: PropTypes.shape({
      name: PropTypes.string,
      links: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    links: PropTypes.shape({
      download: PropTypes.string,
    }),
  }),
  labelCityName: PropTypes.string,
  weather: PropTypes.object,
  forecast: PropTypes.array,
  loadingWeather: PropTypes.bool,
  loadingImage: PropTypes.bool,
  errorWeather: PropTypes.any,
};

CityHero.defaultProps = {
  photo: null,
  labelCityName: "",
  weather: null,
  forecast: [],
  loadingWeather: false,
  loadingImage: false,
  errorWeather: null,
};

export default CityHero;