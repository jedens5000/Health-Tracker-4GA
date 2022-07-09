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
      medications: [],
    },
    actions: {
      logOut: function () {
        localStorage.clear();
        window.location.href = "/";
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
            throw new Error("Password is not correct");
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
      reminders: (phone, message, time) => {
        // fetch("https://3001-jedens5000-healthtracke-l5xsbmsob88.ws-us51.gitpod.io/api/MedTextReminders", {
        fetch(getStore().apURL + "/api/MedTextReminders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, message, time }),
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      },

      // medications: async (medication) => {
      //   try {
      //     const response = await fetch(getStore().apURL + "/api/medications", {
      //       method: "GET",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //     const medications = await response.json();
      //     let meds = {
      //       medication: medications.medication,
      //     };
      //     let med_info = medications.med_info;
      //     setStore({ meds: meds });
      //     setStore({ med_info: med_info });
      //   } catch (error) {
      //     throw error;
      //   }
      // },
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
      getAnswers: async () => {
        try {
          const response = await fetch(getStore().apiURL + `/api/answer`, {
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
      postAnswer: async (array) => {
        try {
          const response = await fetch(getStore().apiURL + "/api/answer", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`,
              // UNCOMMENT IF GETTING CORS ERROR DURING ANSWER POST
              // "Access-Control-Allow-Origin":
              //   "https://3000-jedens5000-healthtracke-x6ymtcibbnn.ws-us47.gitpod.io",
            },
            body: JSON.stringify(array),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          throw Error("Status did not post");
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
