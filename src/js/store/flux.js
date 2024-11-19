const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      // Use getActions to call a function within a fuction
      signup: async (firstName, lastName, email, password) => {
		console.log(firstName, lastName, email, password)
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          }), //key/value
        };
        let response = await fetch(
          process.env.BACKEND_URL + "/api/signup",
          options
        );
        if (response.status !== 201) {
          let error = await response.json();
          console.log(error);
          return false;
        } else {
          let data = await response.json();
          console.log(data);
          return true;
        }
      },

      login: async (email, password) => {
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( { email: email, password: password }), //key/value
        };
        let response = await fetch(
          process.env.BACKEND_URL + "/api/login",
          options
        );
        if (response.status !== 200) {
          let error = await response.json();
          console.log(error);
          return false;
        } else {
          let data = await response.json();
          console.log(data);
		  sessionStorage.setItem("token", data.token)
          return true;
        }
      },
    },
  };
};

export default getState;
