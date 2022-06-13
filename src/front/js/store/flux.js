import FormSignup from "../pages/FormSignup";
import login from "../pages/Login";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: process.env.BACKEND_URL,
      token: [],
      message: null,
      issues: [],
      quote: [],
      name: "",
    },
    actions: {
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

            return true;
          } else {
            throw "password not correct";
          }
        } catch (error) {
          throw Error("Please check your credentials");
        }
      },
      formSignup: async (
        name,
        email,
        password,
        password2,
        issue1,
        issue2,
        issue3
      ) => {
        try {
          console.log("post /formsignup");
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
              issue1,
              issue2,
              issue3,
            }),
          });
          return response.json();
        } catch (error) {
          throw error;
        }
      },
      getIssues: async () => {
        try {
          const response = await fetch(
            getStore().apiURL + `/api/user`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                // REMOVED AUTHORIZATION CAUSING 422 ERROR
                Authorization: `Bearer ${localStorage.getItem(
                  "token.access_token"
                  // CHANGED TO email BECAUSE EMAIL IS IN TOKEN, NOT ID, WHICH CAUSED THIS ERROR (TypeError: __str__ returned non-string (type int))
                  // "email"
                )}`,
              },
            }
            // .then((response) => response.json())
            // .then((data) => console.log(data))
          );
          const data = await response.json();
          let issues = {
            issue1: data.issue1,
            issue2: data.issue2,
            issue3: data.issue3,
          };
          let name = data.name;
          setStore({ issues: issues });
          setStore({ name: name });
        } catch (error) {
          throw error;
        }
      },
      getQuote: async () => {
        const response = await fetch("https://type.fit/api/quotes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        let x = Math.floor(Math.random() * data.length);
        setStore({ quote: data[x] });
      },
    },
  };
};

export default getState;
