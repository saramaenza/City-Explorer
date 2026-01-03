import HeroSection from "./HeroSection";
import SearchInput from './SearchInput';
import PhotoCredit from "./PhotoCredit";

const UNSPLASH_IMAGE_URL = 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?...';

function HeroHomepage() {
  return (
    <>
      <HeroSection
        image={UNSPLASH_IMAGE_URL}
        title="Let's explore the world"
        subtitle="Find your next destination"
        homepage={true}
      >
        <SearchInput />
      </HeroSection>
      
      <PhotoCredit 
        author="Robin Noguier" 
        url="https://unsplash.com/@robinnoguier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
        downloadUrl="https://unsplash.com/photos/sydwCr54rf0/download?force=true"
        isHero={true}/>
    </>
  );
}

export default HeroHomepage;