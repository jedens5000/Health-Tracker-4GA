import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StatusUpdate = () => {
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
    <div
      id="questionnaire"
      className="container position-absolute top-0 start-50 translate-middle-x"
    >
      {/* START QUESTION --> */}

      {/* END QUESTION ------------------------------------> */}
      <p className="mt-3">How is your overall MindSet today?</p>
      <div className="form-check">
        <button
          className="fs-4"
          onClick={() => setValue({ issue: "MindSet", value: 1 })}
        >
          ☹️
        </button>
        <button
          className="fs-4"
          onClick={() => setValue({ issue: "MindSet", value: 2 })}
        >
          🙁
        </button>
        <button
          className="fs-4"
          onClick={() => setValue({ issue: "MindSet", value: 3 })}
        >
          😐
        </button>
        <button
          className="fs-4"
          onClick={() => setValue({ issue: "MindSet", value: 4 })}
        >
          🙂
        </button>
        <button
          className="fs-4"
          onClick={() => setValue({ issue: "MindSet", value: 5 })}
        >
          😊
        </button>
      </div>
      {/* START QUESTION & ICONS ------------------------------------> */}

      {issues.map((item, index) => {
        const [value, setValue] = useState(null);
        console.log(value);
        return (
          <div key={index}>
            <p className="mt-3">How is your {item} today?</p>
            <div className="form-check">
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item, value: 1 })}
              >
                ☹️
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item, value: 2 })}
              >
                🙁
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item, value: 3 })}
              >
                😐
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item, value: 4 })}
              >
                🙂
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item, value: 5 })}
              >
                😊
              </button>
            </div>
          </div>
        );
      })}
      {/* END ICONS ------------------------------------>   */}
      <Link to="/main">
        <button>Return to main</button>
      </Link>
      {/* <div
        id="radioEmojis"
        className="d-flex flex-row mb-3"
        onClick={clickHandler}
      > */}
      {/* <span
          id="icon-face face1"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon1" : ""
          }`}
          value="1"
        >
          mood_bad
        </span>
        <span
          id="icon-face face2"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon2" : ""
          }`}
          value="2"
        >
          sentiment_dissatisfied
        </span>
        <span
          id="icon-face face3"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon3" : ""
          }`}
          value="3"
        >
          sentiment_neutral
        </span>
        <span
          id="icon-face face4"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon4" : ""
          }`}
          value="4"
        >
          sentiment_satisfied
        </span>
        <span
          id="icon-face face5"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon5" : ""
          }`}
          value="5"
        >
          mood
        </span> */}

      {/* END ICONS ------------------------------------>   */}
      {/* <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="1"
        />
        <label className="form-check-label" for="inlineRadio1"></label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="2"
        />
        <label className="form-check-label" for="inlineRadio2"></label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="3"
        />
        <label className="form-check-label" for="inlineRadio3"></label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="4"
        />
        <label className="form-check-label" for="inlineRadio4"></label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio5"
          value="5"
        />
        <label className="form-check-label" for="inlineRadio5"></label>
      </div> */}
      {/* END QUESTION ------------------------------------> */}
      {/* START ICONS --> */}
      {/* <div
        id="radioEmojis"
        className="d-flex flex-row mb-3"
        onClick={clickHandler}
      > */}
      {/* <div className="form-check">
        <span
          id="icon-face face1"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon1" : ""
          }`}
          value="1"
        >
          mood_bad
        </span>
        <span
          id="icon-face face2"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon2" : ""
          }`}
          value="2"
        >
          sentiment_dissatisfied
        </span>
        <span
          id="icon-face face3"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon3" : ""
          }`}
          value="3"
        >
          sentiment_neutral
        </span>
        <span
          id="icon-face face4"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon4" : ""
          }`}
          value="4"
        >
          sentiment_satisfied
        </span>
        <span
          id="icon-face face5"
          // className="material-symbols-outlined"
          className={`material-symbols-outlined ${
            isSelected ? "selected-icon5" : ""
          }`}
          value="5"
        >
          mood
        </span>
      </div> */}
      {/* END ICONS */}
    </div>
  );
};
