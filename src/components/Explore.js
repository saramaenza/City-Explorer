import React from 'react';
import CitySuggestions from './CitySuggestions';
import HeroSection from './HeroSection';
import PhotoCredit from "./PhotoCredit";

const UNSPLASH_IMAGE_URL = 'https://images.unsplash.com/photo-1604239282228-6a723984962c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const suggestedCitiesEurope = [
    { name: "Berlin", country: "Germany", wikiCode: "Q64" },
    { name: "Madrid", country: "Spain", wikiCode: "Q2807" },
    { name: "Lisbon", country: "Portugal", wikiCode: "Q270" },
    { name: "Vienna", country: "Austria", wikiCode: "Q1741" }
];

const suggestedCitiesAmerica = [
    { name: "Los Angeles", country: "USA", wikiCode: "Q65" },
    { name: "Toronto", country: "Canada", wikiCode: "Q172" },
    { name: "Mexico City", country: "Mexico", wikiCode: "Q1480" },
    { name: "Buenos Aires", country: "Argentina", wikiCode: "Q414" }
];

const suggestedCitiesAsia = [
  { name: "Tokyo", country: "Japan", wikiCode: "Q1490" },
  { name: "Seoul", country: "South Korea", wikiCode: "Q8686" },
  { name: "Bangkok", country: "Thailand", wikiCode: "Q1321" },
  { name: "Singapore", country: "Singapore", wikiCode: "Q334" }
];

const suggestedCitiesAfrica = [
  { name: "Cairo", country: "Egypt", wikiCode: "Q85" },
  { name: "Cape Town", country: "South Africa", wikiCode: "Q3086" },
  { name: "Marrakech", country: "Morocco", wikiCode: "Q1023" },
  { name: "Nairobi", country: "Kenya", wikiCode: "Q1146" }
];

const suggestedCitiesOceania = [
  { name: "Sydney", country: "Australia", wikiCode: "Q3130" },
  { name: "Melbourne", country: "Australia", wikiCode: "Q3196" },
  { name: "Auckland", country: "New Zealand", wikiCode: "Q2611" },
  { name: "Brisbane", country: "Australia", wikiCode: "Q3345" }
]; 

function Explore() {
  return (
    <>
        <HeroSection
            image={UNSPLASH_IMAGE_URL}
            title="Tips for your next trips"
            subtitle="Discover popular cities around the world"
            >
        </HeroSection>
        <PhotoCredit 
            author="Tim Garifov" 
            url="https://unsplash.com/it/@timgarifov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
            downloadUrl="https://unsplash.com/photos/PKZtpOIMRYk/download?force=true" 
        />

        <div className="py-10">
            <div className="py-7">
                <CitySuggestions suggestedCities={suggestedCitiesEurope} text={"Europe"} />
            </div>
            <div className="py-7">
                <CitySuggestions suggestedCities={suggestedCitiesAmerica} text={"America"} />
            </div>
            <div className="py-7">
                <CitySuggestions suggestedCities={suggestedCitiesAsia} text={"Asia"} />
            </div>
            <div className="py-7">
                <CitySuggestions suggestedCities={suggestedCitiesAfrica} text={"Africa"} />
            </div>
            <div className="py-7">
                <CitySuggestions suggestedCities={suggestedCitiesOceania} text={"Oceania"} />
            </div>
        </div>
    </>
  );
}

export default Explore;