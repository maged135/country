import { useState } from "react";
import CountryInfoPage from "./components/CountryInfoPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MapPage from "./components/MapPage";
import ContactForm from "./components/ContactForm";
import CityNews from "./components/CityNews";
import CountryDetailsPage from "./components/CountryDetailsPage";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div>
      <Navbar />
      <Home setSelectedCountry={setSelectedCountry} />
      {selectedCountry && <CountryInfoPage country={selectedCountry} />}
      {selectedCountry && <CountryDetailsPage country={selectedCountry} />}
      {selectedCountry && <MapPage country={selectedCountry} />}
      {selectedCountry && <CityNews country={selectedCountry} />}
      {selectedCountry && <ContactForm country={selectedCountry} />}

    </div>
  );
}

export default App;

