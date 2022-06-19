import React from 'react'
import { formatDecimalNumber } from '../../helpers';

function CandidateCard({ candidate, isElected }) {
  return (
    <div className='mr-8'>
      <div>
        <img className='w-24 rounded-full' src={`/img/${candidate.username}.png`} alt='' />
      </div>
      <p>{candidate.votesPercentage}%</p>
      <p>{formatDecimalNumber(candidate.votes)}</p>
      <b>{candidate.name}</b>
      <p>{isElected ? 'Eleito' : 'Não eleito'}</p>
    </div>
  )
}

export default CandidateCard;