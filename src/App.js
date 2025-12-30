import './App.css';
import CitySuggestions from './components/CitySuggestions';
import HeroHomepage from './components/HeroHomepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CityDetail from './components/CityDetail';
import Explore from './components/Explore';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const suggestedCities = [
  { name: "Rome", country: "Italy", wikiCode: "Q220" },
  { name: "Paris", country: "France", wikiCode: "Q90" },
  { name: "New York", country: "USA", wikiCode: "Q60" },
  { name: "London", country: "United Kingdom", wikiCode: "Q84" },
];

const text = "Let us inspire you";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroHomepage />
                <div className="py-10">
                  <CitySuggestions suggestedCities={suggestedCities} text={text} />
                </div>
              </>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/city/:cityName/:wikiCode" element={<CityDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;