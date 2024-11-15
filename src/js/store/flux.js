const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup: async (firstName, lastName, email, password) => {
				let options = {
					method:"POST",
					headers:{
						"Content-Type": "application/json"
					},
					body:{firstName:firstName, lastName:lastName, email:email, password:password} //key/value
				}
				let response = await fetch (process.env.BACKEND_URL + "/api/signup", options)
				if (response.status !== 201)  {
                 let error = await response.json ()
				 console.log (error)
				 return false
				}
			},
		}
	};
};

export default getState;
