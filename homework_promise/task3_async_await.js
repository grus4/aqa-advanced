const url = "https://swapi.dev/api/";

const getFilm = async (id) => {
	const response = await fetch(`${url}/films/${id}/`);
	const data = await response.json();
	return data;
};

const getPlanetName = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getResident = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getPlanetsAndResidents = async () => {
	try {
		const film = await getFilm(3);
		const planetPromises = film.planets.map((planetUrl) => getPlanetName(planetUrl));
		const planets = await Promise.all(planetPromises);

		const results = await Promise.all(
			planets.map(async (planet) => {
				const residentPromises = planet.residents.map((residentUrl) => getResident(residentUrl));
				const residents = await Promise.all(residentPromises);
				const residentNames = residents.map((resident) => resident.name);

				return {
					planetName: planet.name,
					residents: residentNames,
				};
			}),
		);

		console.log(results);
	} catch (error) {
		console.error(error);
	}
};

getPlanetsAndResidents();
