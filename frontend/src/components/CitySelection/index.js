import React from 'react'
import Select from './Select'
import Title from './Title'

function parseCitiesOptions(cities = []) {
  return cities
    .map((city) => ({ value: city.name, label: city.name }));
};

function CitySelection({ cities, handleCitySelection }) {
  return (
    <div className='city-selection'>
      <Title />
      <Select options={parseCitiesOptions(cities)} handler={handleCitySelection} />
    </div>
  )
}

export default CitySelection