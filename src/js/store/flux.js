const getState = ({ getStore, setStore }) => {
	return {
		store: {
			Agenda: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			getAllContacts() {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/ARedondoVilla";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							agenda: json.results
						});
						console.log(json.results);
					});
			},

			createContact(data) {},

			deleteContact(id) {},

			editContact(id, data) {}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
