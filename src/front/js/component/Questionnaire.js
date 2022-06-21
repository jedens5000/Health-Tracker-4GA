import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Questionnaire = () => {
  const { store, actions } = useContext(Context);
  const [isSelected, setSelected] = useState(false);
  const [issues, setIssues] = useState([
    store.issues.issue1,
    store.issues.issue2,
    store.issues.issue3,
  ]);
  console.log(store.issues);

  const clickHandler = (e) => {
    setSelected(!isSelected);
  };

  return (
    <div>
      <div
        id="questionnaire"
        className="container-fluid position-relative top-0 start-50 translate-middle-x"
      >
        {/* START ISSSUE QUESTIONS & ICONS --------------------> */}

        {issues.map((item, index) => {
          const [value, setValue] = useState(null);
          console.log(value);
          return (
            <div key={index}>
              <p className="mt-3">How is your {item} today?</p>
              <div className="form-check">
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  // TWO FUNCTIONS ONCLICK
                  onClick={() => {
                    setValue({ issue: item, value: 5 });
                    {
                      clickHandler;
                    }
                  }}
                >
                  ☹️
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 4 })}
                >
                  🙁
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 3 })}
                >
                  😐
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 2 })}
                >
                  🙂
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 1 })}
                >
                  😊
                </button>
              </div>
            </div>
          );
        })}
        {/* END ICONS ------------------------------------>   */}
        {/* BOOTSTRAP RADIO TEST-------------------------->   */}
        {issues.map((item, index) => {
          const [value, setValue] = useState(null);
          console.log(value);
          return (
            <div>
              <p className="mt-3">How is your {item} today? (radio)</p>
              {/* <p className="mt-3">Bootstrap radio button test:</p> */}
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autocomplete="off"
              />
              <label
                className={`btn fs-4 emoji ${
                  isSelected ? "emoji-selected" : ""
                }`}
                onClick={() => {
                  setValue({ issue: item, value: 5 });
                  {
                    clickHandler;
                  }
                }}
                for="option1"
              >
                ☹️
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                autocomplete="off"
              />
              <label
                className={`btn fs-4 emoji ${
                  isSelected ? "emoji-selected" : ""
                }`}
                onClick={() => {
                  setValue({ issue: item, value: 4 });
                  {
                    clickHandler;
                  }
                }}
                for="option2"
              >
                🙁
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option3"
                autocomplete="off"
              />
              <label
                className={`btn fs-4 emoji ${
                  isSelected ? "emoji-selected" : ""
                }`}
                onClick={() => {
                  setValue({ issue: item, value: 3 });
                  {
                    clickHandler;
                  }
                }}
                for="option3"
              >
                😐
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option4"
                autocomplete="off"
              />
              <label
                className={`btn fs-4 emoji ${
                  isSelected ? "emoji-selected" : ""
                }`}
                onClick={() => {
                  setValue({ issue: item, value: 2 });
                  {
                    clickHandler;
                  }
                }}
                for="option4"
              >
                🙂
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option5"
                autocomplete="off"
              />
              <label
                className={`btn fs-4 emoji ${
                  isSelected ? "emoji-selected" : ""
                }`}
                onClick={() => {
                  setValue({ issue: item, value: 1 });
                  {
                    clickHandler;
                  }
                }}
                for="option5"
              >
                😊
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
