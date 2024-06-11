const url = "https://swapi.dev/api/";

const getPilotName = (id) =>
	fetch(`${url}/people/${id}`)
		.then((response) => response.json())
		.catch((reject) => console.error(reject));

const getStarshipName = (url) =>
	fetch(url)
		.then((response) => response.json())
		.then((json) => json.name)
		.catch((reject) => console.error(reject));

getPilotName(14)
	.then((pilot) => {
		const starshipPromises = pilot.starships.map((starshipUrl) => getStarshipName(starshipUrl));
		return Promise.all(starshipPromises);
	})
	.then((starshipNames) => {
		console.log(`Starships where pilot was Han Solo:`, starshipNames);
	})
	.catch((reject) => console.error(reject));
