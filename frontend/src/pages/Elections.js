import React from 'react'
import CitySelection from '../components/CitySelection'
import ElectionResume from '../components/ElectionResume'
import CandidateCard from '../components/CandidateCard'

function Elections({ cities, selectedCity, handleCitySelection }) {
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Elections
          </h1>
        </div>
      </header>
      <main>
        <div className="container mx-auto p-4">
          <CitySelection cities={cities} handleCitySelection={handleCitySelection} />
          <div>
            <ElectionResume city={selectedCity} />
            <div className='flex justify-between my-10 flex-wrap'>
              {selectedCity.candidates.map((candidate, index) => <CandidateCard candidate={candidate} isElected={index === 0} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Elections