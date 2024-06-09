const url = 'https://swapi.dev/api/planets';

const getPlanetName = (id) =>
  fetch(`${url}/${id}/`)
    .then((response) => response.json())
    .then((json) => json.name)
    .catch((reject) => console.error(reject));

const planetsNameArray = [];
for (let i = 1; i <= 10; i++) {
  planetsNameArray.push(getPlanetName(i));
}

Promise.all(planetsNameArray)
  .then((planetNames) => console.log(planetNames))
  .catch((reject) => console.error(reject));
