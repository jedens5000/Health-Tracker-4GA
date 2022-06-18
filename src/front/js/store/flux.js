import FormSignup from "../pages/FormSignup";
import login from "../pages/Login";

const getToken = () => {
  const tokenObject = localStorage.getItem("token");
  if (
    (!tokenObject || typeof tokenObject === "undefined") &&
    !window.location.href.includes("/login")
  ) {
    window.location.href = "/login";
  }
  return JSON.parse(tokenObject)?.access_token || null;
};

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: process.env.BACKEND_URL,
      token: [],
      message: null,
      issues: [],
      quote: [],
      name: "",
      answers: [],
    },
    actions: {
      logOut: function () {
        localStorage.clear();
        window.location.href = "/login";
      },
      login: async (email, password) => {
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
            throw new Error("password not correct");
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
          const response = await fetch(getStore().apiURL + `/api/user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`,
            },
          });
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
      //////////////////////////////////////////////////
      // NEED TO UPDATE WITH USER ID /api/answer/user_id
      getAnswers: async () => {
        try {
          const response = await fetch(getStore().apiURL + `/api/answer/2`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`,
            },
          });
          const data = await response.json();
          setStore({ data: data });
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
