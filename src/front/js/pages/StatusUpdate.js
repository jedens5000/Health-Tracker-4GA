import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StatusUpdate = () => {
  const { store, actions } = useContext(Context);
  const [isSelected, setSelected] = useState(false);
  console.log(store.issues);
  const clickHandler = (e) => {
    setSelected(!isSelected);
  };
  // EXAMPLE OF USER'S ISSUES///////////////////
  // const issue1 = "anxiety";
  // const issue2 = "depression";
  // const issue3 = "insomnia";

  // DOES NOT WORK - START//////////////////////////////////////////
  // const mindSetScore = ()
  function OnRadioStateChange() {
    var ele = document.getElementsByName("inlineRadioOptions");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        return "Rating : " + ele[i].value;
      }
    }
  }
  // DOES NOT WORK - END////////////////////////////////////////////

  // window.onload = function loadfn() {
  //   document.getElementById("issue1").innerHTML =
  //     "How is your " + issue1 + " today?";
  //   document.getElementById("issue2").innerHTML =
  //     "How is your " + issue2 + " today?";
  //   document.getElementById("issue3").innerHTML =
  //     "How is your " + issue3 + " today?";
  //   document.getElementById("totalValue").innerHTML =
  //     "Your MindSet score is: " + OnRadioStateChange;
  // };
  // console.log((document.getElementById(totalValue).innerHTML = totalValue));

  return (
    <div
      id="questionnaire"
      className="container position-absolute top-0 start-50 translate-middle-x"
    >
      {/* START QUESTION --> */}
      {/* <p className="mt-3">How is your overall MindSet today?</p> */}
      {/* <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" for="inlineRadio1">
          1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" for="inlineRadio3">
          3
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="option4"
        />
        <label className="form-check-label" for="inlineRadio4">
          4
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio5"
          value="option5"
        />
        <label className="form-check-label" for="inlineRadio5">
          5
        </label>
      </div>
      {/* END QUESTION --> */}
      {/* START QUESTION --> */}
      {/* <p id="issue1" className="mt-3">
        How is your {issue1} today?
      </p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" for="inlineRadio1">
          1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" for="inlineRadio3">
          3
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="option4"
        />
        <label className="form-check-label" for="inlineRadio4">
          4
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio5"
          value="option5"
        />
        <label className="form-check-label" for="inlineRadio5">
          5
        </label>
      </div> */}
      {/* END QUESTION --> */}
      {/* START QUESTION --> */}
      {/* <p id="issue2" className="mt-3">
        How is your {issue2} today?
      </p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" for="inlineRadio1">
          1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" for="inlineRadio3">
          3
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="option4"
        />
        <label className="form-check-label" for="inlineRadio4">
          4
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio5"
          value="option5"
        />
        <label className="form-check-label" for="inlineRadio5">
          5
        </label>
      </div> */}
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

      {store.issues.map((item) => {
        const [value, setValue] = useState(null);
        console.log(value);
        return (
          <div key={item.id}>
            <p className="mt-3">How is your {item.name} today?</p>
            <div className="form-check">
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item.name, value: 1 })}
              >
                ☹️
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item.name, value: 2 })}
              >
                🙁
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item.name, value: 3 })}
              >
                😐
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item.name, value: 4 })}
              >
                🙂
              </button>
              <button
                className="fs-4"
                onClick={() => setValue({ issue: item.name, value: 5 })}
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
