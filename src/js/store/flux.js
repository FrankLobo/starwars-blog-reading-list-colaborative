const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// apiUrl: 'https://www.swapi.tech/api',
			apiUrl: 'https://swapi.dev/api',
			characters: null,
			planets: null,
			starships: null,
			// charactersDetails: [],
			// planetsDetails: [],
			// starshipsDetails: [],
			favorites: []
		},
		actions: {
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA CHARACTERS", data)
						setStore({
							characters: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA PLANETS", data)
						setStore({
							planets: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromStarships: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/starships`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA STARSHIPS", data)
						setStore({
							starships: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataDetailsCharacters: (uid) => {
				const { apiUrl } = getStore()
				fetch(`${apiUrl}/people/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA DETAILS CHARACTER", data)
						setStore({
							charactersDetails: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataDetailsPlanets: (uid) => {
				const { apiUrl } = getStore()
				fetch(`${apiUrl}/planets/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA DETAILS PLANET", data)
						setStore({
							planetsDetails: data
						})
					})
					.catch(error => console.log("error", error));
			},loadDataDetailsStarchips: (uid) => {
				const { apiUrl } = getStore()
				fetch(`${apiUrl}/starships/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA DETAILS STARSHIP", data)
						setStore({
							starshipsDetails: data
						})
					})
					.catch(error => console.log("error", error));
			},
		}
	};
}

export default getState;
