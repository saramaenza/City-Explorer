# 🧭 City Explorer 

City Explorer is a React-based web application that allows users to search for cities and explore weather conditions, geographical data, and main attractions, all enriched by a dynamic, city-related background image.

The project focuses on data consistency, user experience, and clean integration of multiple external APIs, combining REST services and SPARQL queries into a single, cohesive interface.

🔗 Live Demo: https://city-explorer-ten.vercel.app/

## Features

#### Assisted City Search (Autocomplete)
- API-based assisted search
- Users can select only valid and available cities
- Prevents invalid input and reduces edge cases

#### Weather information
- Real-time weather data
- Weather forecast
- Clear and readable presentation

#### City details
Displays detailed geographic and contextual information:
- Name
- Region & Country
- Population
- Elevation
- Timezone
- Geographic coordinates
  
#### Dynamic background image
- Automatically loads a background image related to the selected city
- Images are fetched dynamically from Unsplash
- Enhances immersion without distracting from content

#### List of main attractions
- Retrieves notable attractions via Wikidata SPARQL queries
- Uses the city’s unique Wikidata ID
- Displays attraction names with direct links to Wikidata pages


## Design Choices

City selection is handled exclusively through an API-based autocomplete system.
This decision:
- Guarantees data consistency between APIs
- Reduces incorrect or incomplete API requests
- Improves error handling and state management
- Enhances overall user experience

Since weather and attractions depend on precise geographic data, forcing users to select a valid city avoids unexpected behaviors.

## Technologies Used

- React
  - Hooks
  - Component-based architecture
- Tailwind CSS
  - Utility-first styling
  - Responsive design
- JavaScript (ES6+)
- REST APIs (Fetch)
- SPARQL queries (Wikidata)

## Integrated APIs

GeoDB Cities API
- City search
- City details data

OpenWeather API
- Current weather
- Weather forecast

Unsplash API
- Dynamic city-related images

Wikidata
- Main attractions
- Attraction metadata and links

## UI State Management

The application explicitly handles:
- Loading states during API requests
- Empty states when no city is selected
- Error states in case of network or API failures

This results in a more reliable and user-friendly experience.

## Application Structure 

Main components include:
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


## Installation & Local Development

Tu run the project locally:

#### Clone the repository
- git clone https://github.com/saramaenza/City-Explorer.git

#### Install dependencies
- npm install

#### Start the development server
- npm start

The application will be available at http://localhost:3000.

⚠️ Remember to configure your API keys in an .env file:
- GeoDB Cities API
- OpenWeather API
- Unsplash API

## Deployment

The portfolio is deployed using Vercel with automatic builds and deployments on every push to the main branch.

## Contributing

Contributions, suggestions, and improvements are welcome!

1- Fork the repository

2- Create a new branch (feature/your-feature-name)

3- Commit your changes

4- Open a Pull Request


## Future Improvements
- Save favorite cities using localStorage
- Temperature unit toggle (°C / °F)
- Performance optimizations (advanced debounce)
- Improved error reporting and fallback UI


## Why this project matters

City Explorer showcases:
- Integration of multiple heterogeneous data sources
- Use of both REST APIs and SPARQL queries
- Careful UI/UX design decisions
- Ability to transform complex data into a clear, intuitive interface

It reflects a strong focus on real-world frontend challenges, including data reliability, state management, and scalability.


## Contact
If you’d like to get in touch with me:

💼 LinkedIn: www.linkedin.com/in/sara-maenza

📧 Email: sara.maenza98@gmail.com

Thank you for visiting my City Explorer repository! I’m always open to feedback, collaboration, and new opportunities 😊
