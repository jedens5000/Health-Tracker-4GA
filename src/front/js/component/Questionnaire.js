import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
                className={
                  isSelected == 5 ? "fs-4 emoji-selected" : "fs-4 emoji"
                }
                onClick={() => {
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
                  clickHandler(1, { issue: item, value: 1 });
                }}
              >
                😊
              </button>
            </div>
          </div>
        );
      })}
      {/* END ICONS ------------------------------------>   */}
      {/* Modal start */}
      <div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={() => actions.postAnswer(answers)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit Status
        </button>

        {/* <!-- Modal --> */}
        <div
          data-bs-backdrop="false"
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <h5 className="modal-body">Status Update Complete!</h5>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Revise
                </button>
                <Link to="/main">
                  <button type="button" className="btn btn-primary">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
