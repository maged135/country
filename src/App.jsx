import { useState } from "react";
import CountryInfoPage from "./components/CountryInfoPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./CountryDetailsPage";
import MapPage from "./components/MapPage";
import ContactForm from "./components/ContactForm";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div>
      <Navbar />
      <Home setSelectedCountry={setSelectedCountry} />
      {selectedCountry && <CountryInfoPage country={selectedCountry} />}
      {selectedCountry && <CountryDetailsPage country={selectedCountry} />}
      {selectedCountry && <MapPage country={selectedCountry} />}
      {selectedCountry && <ContactForm country={selectedCountry} />}

    </div>
  );
}

export default App;

