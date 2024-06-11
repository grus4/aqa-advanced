const url = "https://swapi.dev/api/";

const getPilotName = async (id) => {
	const response = await fetch(`${url}/people/${id}`);
	const json = response.json();
	return json;
};

const getStarshipName = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data.name;
};

const getPilotStarships = async () => {
	try {
		const pilot = await getPilotName(14);
		const starshipPromises = pilot.starships.map((starshipUrl) => getStarshipName(starshipUrl));

		const starshipNames = await Promise.all(starshipPromises);
		console.log(`Starships where pilot was Han Solo:`, starshipNames);
	} catch (reject) {
		console.error(reject);
	}
};

getPilotStarships();
