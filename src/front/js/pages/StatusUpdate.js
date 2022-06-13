import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

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
    <div>
      <Navbar />
      <div
        id="questionnaire"
        className="container-fluid position-relative top-0 start-50 translate-middle-x"
      >
        {/* START QUESTION --> */}
        <p className="mt-3">How is your overall MindSet today?</p>
        <div className="form-check">
          <button
            type="radio"
            className="fs-4 emoji"
            onClick={() => setValue({ issue: "MindSet", value: 1 })}
          >
            ☹️
          </button>
          <button
            type="radio"
            className="fs-4 emoji"
            onClick={() => setValue({ issue: "MindSet", value: 2 })}
          >
            🙁
          </button>
          <button
            type="radio"
            className="fs-4 emoji"
            onClick={() => setValue({ issue: "MindSet", value: 3 })}
          >
            😐
          </button>
          <button
            type="radio"
            className="fs-4 emoji"
            onClick={() => setValue({ issue: "MindSet", value: 4 })}
          >
            🙂
          </button>
          <button
            type="radio"
            className="fs-4 emoji"
            onClick={() => setValue({ issue: "MindSet", value: 5 })}
          >
            😊
          </button>
        </div>
        {/* START ISSSUE QUESTIONS & ICONS --------------------> */}

        {issues.map((item, index) => {
          const [value, setValue] = useState(null);
          console.log(value);
          return (
            <div key={index}>
              <p className="mt-3">
                How is your (NEED TO FIX THIS) {item} today?
              </p>
              <div className="form-check">
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  // TWO FUNCTIONS ONCLICK
                  onClick={() => {
                    setValue({ issue: item, value: 1 });
                    {
                      clickHandler;
                    }
                  }}
                >
                  ☹️
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 2 })}
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
                  onClick={() => setValue({ issue: item, value: 4 })}
                >
                  🙂
                </button>
                <button
                  className={`fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
                  onClick={() => setValue({ issue: item, value: 5 })}
                >
                  😊
                </button>
              </div>
            </div>
          );
        })}
        {/* END ICONS ------------------------------------>   */}
        {/* BOOTSTRAP RADIO TEST-------------------------->   */}
        <p className="mt-3">Bootstrap radio button test:</p>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
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
          for="option1"
        >
          ☹️
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label
          className={`btn fs-4 emoji-selected ${
            isSelected ? "emoji-selected" : ""
          }`}
          onClick={() => {
            setValue({ issue: item, value: 2 });
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
          class="btn-check"
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
          class="btn-check"
          name="options"
          id="option4"
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
          for="option4"
        >
          🙂
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option5"
          autocomplete="off"
        />
        <label
          className={`btn fs-4 emoji ${isSelected ? "emoji-selected" : ""}`}
          onClick={() => {
            setValue({ issue: item, value: 5 });
            {
              clickHandler;
            }
          }}
          for="option5"
        >
          😊
        </label>
        <br />
        <Link to="/main">
          <button className="btn btn-primary mt-3" onClick={() => setValue({})}>
            Submit Status
          </button>
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
    </div>
  );
};
