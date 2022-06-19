import axios from 'axios';

export async function getElectionData() {
  const [citiesData, candidatesData, electionData] = await Promise.all([getCities(), getCandidates(), getElections()]);

  const cities = citiesData.data;
  const candidates = candidatesData.data;
  const election = electionData.data;

  return parseElectionData(cities, candidates, election);
}

function parseElectionData(cities, candidates, election) {
  const parsedData = [];

  for (let city of cities) {
    let cityCandidates = election
      .reduce((acc, curr) => {
        if (curr.cityId === city.id) return [...acc, curr];
        return acc;
      }, [])
      .map((candidate) => {
        const { name, username } = candidates.find((c) => {
          return candidate.candidateId === c.id;
        });
        return {
          ...candidate,
          name,
          username,
          votesPercentage: ((candidate.votes / city.presence) * 100).toFixed(2)
        };
      })
      .sort((a, b) => b.votes - a.votes);
    parsedData.push({ ...city, candidates: cityCandidates })
  }

  return parsedData;
}

function getCities() {
  return axios.get('http://localhost:3001/cities');
}

function getCandidates() {
  return axios.get('http://localhost:3001/candidates');
}

function getElections() {
  return axios.get('http://localhost:3001/election')
}

