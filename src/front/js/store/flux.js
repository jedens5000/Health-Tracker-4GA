import FormSignup from "../pages/FormSignup";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: process.env.BACKEND_URL,
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

      formSignup: async (name, email, password, password2, condition1) => {
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
         return response.json();
        } catch (error) {
          throw error;
        }
      },
      //NEED TO UPDATE THE userID params below
      getIssues: async (userId = 2) => {
        try {
          const response = await fetch(
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
