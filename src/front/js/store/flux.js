import FormSignup from "../pages/FormSignup";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: [],
      message: null,
      issues: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login: async (email, password) => {
        try {
          const response = await fetch(
            "https://3001-jedens5000-healthtracke-kpqy3xy7o4t.ws-us46.gitpod.io/api/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );
          if (response.ok) {
            const token = await response.json();
            localStorage.setItem("token", JSON.stringify(token));
            console.log(response);
            return true;
          } else {
            throw "password not correct";
          }
        } catch (error) {
          throw Error("email incorrect");
        }
      },

      FormSignup: async (name, email, password, password2, condition1) => {
        try {
          const response = await fetch(
            "https://3001-jedens5000-healthtracke-1uoaqj0mckj.ws-us46.gitpod.io/api/FormSignup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                password,
                password2,
                condition1,
              }),
            }
          );
          // if (response.ok) {
          // 	const token = await response.json()
          // 	localStorage.setItem("token", JSON.stringify(token))
          // 	console.log(response)
          // 	return true
          // } else {throw "password does not match"}
        } catch (error) {
          throw Error("Invalid email");
        }
      },
      getIssues: async (userId = 2) => {
        try {
          const response = await fetch(
            `https://3001-jedens5000-healthtracke-kpqy3xy7o4t.ws-us46.gitpod.io/api/issues/${userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          setStore({ issues: data });
        } catch (error) {
          throw Error("Invalid email");
        }
      },
    },
  };
};

export default getState;
