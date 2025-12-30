# 🧭 City Explorer 

A web application built with React that allows users to search for a city and view weather data, geographical information, list of main attractions, and a dynamic background image related to the selected city, integrating data from multiple external APIs into a single, smooth user experience.

## Main Features
City search with autocomplete
- API-based assisted search
- Users can select only valid and available cities
- Prevents invalid input and reduces edge cases

Current weather and forecast
- Real-time weather data
- Clear and readable presentation

City details
- Name
- Region
- Country
- Population
- Elevation
- Timezone
- Geographic coordinates
  
Dynamic background image
- A city-related background image dynamically loaded based on the selected city
- Enhances visual context without distracting from core information

List of main attractions
- Retrieves notable attractions from Wikidata using the city’s unique ID
- Displays attraction names with links to their Wikidata pages


## Design Decisions
### Assisted search instead of free text input
City search is handled exclusively through an API-driven autocomplete.

This approach:
- ensures data consistency across different APIs
- reduces input errors
- improves the overall user experience
- simplifies error and state management

Weather and content APIs rely on precise geographic coordinates; forcing the selection of a valid city prevents incorrect requests and unexpected behaviors.

## Technologies Used
- React
  - Hooks
  - Component-based architecture
- Tailwind CSS
  - Utility-first styling
  - Responsive design
- JavaScript (ES6+)
- REST APIs
  - Fetch
- SPARQL queries to Wikidata for retrieving city attractions

## Integrated APIs
GeoDB Cities API
- City search
- City details data
- Main attractions

OpenWeather API
- Current weather
- Weather forecast

Unsplash API
- City-related background images

Wikidata
- Main attractions for the selected city
- Attraction names and links

## UI State Management

The application explicitly handles:
- Loading states during API requests
- Empty states when no city is selected
- Error states in case of network or API failures

This approach improves perceived reliability and overall usability.

## Application Structure 
- AttractionsList: displays a list of attractions for the selected city.
- BackgroundHero: handles the background image and visual appearance of the hero section.
- CityDetail: detail page with in-depth information about the selected city.
- CityHero: city-specific hero section, including background image and title.
- CityInfoCard: displays additional information or statistics about a city.
- CitySuggestions: shows suggested cities to explore, with images and links.
- Explore: page dedicated to exploring new cities and destinations.
- Footer: application footer with credits and author information.
- HeroHomepage: homepage hero section, including title and search input.
- HeroSection: reusable hero component used across multiple pages.
- LoadingSpinner: loading spinner displayed during asynchronous requests.
- Navbar: main application navigation bar with menu and page links.
- PhotoCredit: displays photo credits for images used in the application.
- ScrollToTop: handles automatic scroll-to-top behavior during navigation.
- SearchInput: search input used to find and select cities via autocomplete.
- WeatherPanel: displays weather information for the selected city.

## Future Improvements
- Save favorite cities using localStorage
- Unit toggle (°C / °F)
- Performance optimizations (advanced debounce)

## Author

Developed by Sara Maenza

Front-end developer

## Why this project matters

This project demonstrates the ability to integrate multiple data sources, including REST APIs and SPARQL queries, design robust user flows, and transform complex information into a clear and usable interface.
