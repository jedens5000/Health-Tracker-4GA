import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Questionnaire = () => {
  const { store, actions } = useContext(Context);
  const [issues, setIssues] = useState([
    store.issues.issue1,
    store.issues.issue2,
    store.issues.issue3,
  ]);
  const [answers, setAnswers] = useState([]);
  console.log(answers);
  console.log(store.issues);

  return (
    <div>
      {/* START ISSSUE QUESTIONS & ICONS --------------------> */}
      {issues.map((item, index) => {
        if (item === null) return;
        // const [value, setValue] = useState(null);
        // console.log(value);
        const [isSelected, setSelected] = useState(false);
        const clickHandler = (num, val) => {
          setSelected(num);
          let issueName = answers.find((item) => item.issue === val.issue);
          if (issueName) {
            let newArray = answers.filter((item) => item.issue != val.issue);
            setAnswers([...newArray, val]);
          } else {
            setAnswers([...answers, val]);
          }
        };
        return (
          <div key={index}>
            <p className="mt-3">How is your {item} today?</p>
            <div className="form-check">
              <button
                // className={isSelected ? "fs-4 emoji-selected" : "fs-4 emoji"}
                className={
                  isSelected == 5 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                // className="fs-4 emoji"
                onClick={() => {
                  // setValue({ issue: item, value: 5 });

                  clickHandler(5, { issue: item, value: 5 });
                }}
              >
                ☹️
              </button>
              <button
                className={
                  isSelected == 4 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                onClick={() => {
                  // setValue({ issue: item, value: 4 });

                  clickHandler(4, { issue: item, value: 4 });
                }}
              >
                🙁
              </button>
              <button
                className={
                  isSelected == 3 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                onClick={() => {
                  // setValue({ issue: item, value: 3 });

                  clickHandler(3, { issue: item, value: 3 });
                }}
              >
                😐
              </button>
              <button
                className={
                  isSelected == 2 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                onClick={() => {
                  // setValue({ issue: item, value: 2 });

                  clickHandler(2, { issue: item, value: 2 });
                }}
              >
                🙂
              </button>
              <button
                className={
                  isSelected == 1 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                onClick={() => {
                  // setValue({ issue: item, value: 1 });

                  clickHandler(1, { issue: item, value: 1 });
                }}
              >
                😊
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/main">
        <button
          className="btn btn-primary mt-3"
          onClick={() => actions.postAnswer(answers)}
        >
          Submit Status
        </button>
      </Link>
      {/* END ICONS ------------------------------------>   */}
      {/* BOOTSTRAP RADIO TEST-------------------------->   */}
      {/* {issues.map((item, index) => {
        if (item === null) return;
        const [value, setValue] = useState(null);
        console.log(value);
        return (
          <div>
            <p className="mt-3">
              How would you rate your {item} today? (radio)
            </p>
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option1"
              autocomplete="off"
            />
            <label
              // className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
              className="fs-4 emoji"
              onClick={() => {
                setValue({ issue: item, value: 5 });

                clickHandler();
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
              className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
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
              className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
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
              className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
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
              className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
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
            <div>
              
            </div>
          </div>
        );
      })} */}
    </div>
  );
};
