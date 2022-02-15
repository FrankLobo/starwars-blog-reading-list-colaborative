const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://www.swapi.tech/api',
			characters: null,
			planets: null,
			starships: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							characters: data
						})
					})
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							planets: data
						})
					})
			},
			loadDataFromStarships: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/starships`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							starships: data
						})
					})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const details = store details.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });
				// //reset the global store
				// setStore({ details: details });
			}
		}
	};
}

export default getState;
