import './App.css';
import CitySuggestions from './components/CitySuggestions';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CitySuggestions />
      <Footer />
    </div>
  );
}

export default App;