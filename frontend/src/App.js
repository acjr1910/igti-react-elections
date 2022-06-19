import { useState, useEffect } from 'react';
import Elections from './pages/Elections';
import { getElectionData } from './api/index';

export default function App() {
  const [cities, setCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    (async () => setCities(await getElectionData()))();
  }, []);

  const handleCitySelection = (event) => {
    setSelectedCity(cities.find((c) => event.target.value === c.name));
  };

  return cities && <Elections cities={cities} selectedCity={selectedCity || cities[0]} handleCitySelection={handleCitySelection} />;
}
