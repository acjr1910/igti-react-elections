import React from 'react'
import { formatDecimalNumber } from '../../helpers';

function ElectionResume({ city }) {
  return (
    <div>
      <h2>Eleição em {city.name}</h2>
      <div>
        <h5>Total de eleitores: {formatDecimalNumber(city.votingPopulation)}</h5>
        <h5>Abstenções: {formatDecimalNumber(city.absence)}</h5>
        <h5>Total de Comparecimento: {formatDecimalNumber(city.presence)}</h5>
      </div>
      <h6>{city.candidates.length} candidatos</h6>
    </div>
  )
}

export default ElectionResume