import HeroSection from './HeroSection';
import LoadingSpinner from './LoadingSpinner';
import WeatherPanel from './WeatherPanel';
import PhotoCredit from "./PhotoCredit";

function CityHero({ photo, labelCityName, weather, forecast, loadingWeather, loadingImage, errorWeather }) {
  const UNSPLASH_IMAGE_URL = photo ? photo.urls.regular : undefined;
  return (
    <>
      <HeroSection
        image={UNSPLASH_IMAGE_URL}
        title={labelCityName}
        homepage={false}
      >
        <div className="bg-white/75 rounded-xl w-2/3 mt-15">
          <WeatherPanel weather={weather} forecast={forecast} loading={loadingWeather} error={errorWeather}/>
        </div>
        {loadingImage && <LoadingSpinner text="image" />}
      </HeroSection>
      <PhotoCredit 
        author={photo?.user?.name}  
        url={`${photo?.user?.links?.html}?utm_source=city_explorer&utm_medium=referral`}
        downloadUrl={photo?.links?.download} />
    </>
  );
}

export default CityHero;