import FormSignup from "../pages/FormSignup";

const getState = ({ getStore, getActions, setStore }) => {
  const apiJon =
    "https://3001-jedens5000-healthtracke-kpqy3xy7o4t.ws-us46.gitpod.io";
  const apiChad =
    "https://3001-jedens5000-healthtracke-1uoaqj0mckj.ws-us46.gitpod.io";
  const apiJustin = "https://3001-jedens5000-healthtracke-r1epl1z8hxv.ws-us46.gitpod.io";
  return {
    store: {
      apiURL: apiJustin, //CHANGE THIS TO YOUR api(NAME) TO WORK FOR YOU
      token: [],
      message: null,
      issues: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login: async (email, password, history) => {
        try {
          const response = await fetch(getStore().apiURL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          if (response.ok) {
            const token = await response.json();
            localStorage.setItem("token", JSON.stringify(token));
            console.log(response);
            history.push("/main");
            return true;
          } else {
            throw "password not correct";
          }
        } catch (error) {
          throw Error("Please check your credentials");
        }
      },

      FormSignup: async (name, email, password, password2, condition1) => {
        try {
          const response = await fetch(getStore().apiURL + "/api/FormSignup/", {
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
          });
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
      //NEED TO UPDATE THE userID params below
      getIssues: async (userId = 2) => {
        try {
          const response = await fetch(
            // `https://3001-jedens5000-healthtracke-kpqy3xy7o4t.ws-us46.gitpod.io/api/issues/${userId}`,
            getStore().apiURL + `/api/issues/${userId}`,
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
