import React, { useContext, useState } from "react";
import { validateSignUp } from "../component/validations";

import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/Form.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const FormSignup = ({ submitForm }) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [values, setValues] = useState({ issue2: null, issue3: null });
  const [errors, setErrors] = useState({});
  return (
    <div className="top">
      <img className="logo" src={mindsetLogo} />
      <h1>
        Start tracking your issues today!
        <br />
        Create your account by filling out the information below.
      </h1>

      <div className="form-container">
        <div
          style={{
            backgroundImage: "url(/mainPageBackground.png)",
            backgroundSize: "cover",
            id: "background",
            border: "1px solid yellowgreen",
            borderRadius: 5,
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const _errors = validateSignUp(values);
              if (Object.keys(_errors).length > 0) {
                setErrors(_errors);
                console.log("errors were found onSubmit", _errors);
                return false;
              } else {
                setErrors({});
                console.log("no errors were found call formSignUp");
              }
              actions
                .formSignup(
                  values.name,
                  values.email,
                  values.password,
                  values.password2,
                  values.issue1,
                  values.issue2,
                  values.issue3
                )
                .then(() => history.push("/main"))
                .catch((error) => alert(error));
              console.log("form submitted");
            }}
            className="form"
            noValidate
          >
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="name"
                name="name"
                placeholder="Enter your first name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={values.password2}
                onChange={(e) =>
                  setValues({ ...values, password2: e.target.value })
                }
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Issues to track:</label>
              <input
                className="form-input"
                type="issue1"
                name="issue1"
                placeholder="Enter your first issue (required)"
                value={values.issue1}
                onChange={(e) =>
                  setValues({ ...values, issue1: e.target.value })
                }
              />
              {errors.issue1 && <p>{errors.issue1}</p>}
            </div>
            <div className="mb-3">
              {/* <label className="form-label">Issue</label> */}
              <input
                className="form-input"
                type="issue2"
                name="issue2"
                placeholder="Enter your second issue (optional)"
                value={values.issue2}
                onChange={(e) =>
                  setValues({ ...values, issue2: e.target.value })
                }
              />
              {errors.issue2 && <p>{errors.issue2}</p>}
            </div>
            <div className="mb-3">
              {/* <label className="form-label">Issue</label> */}
              <input
                className="form-input"
                type="issue3"
                name="issue3"
                placeholder="Enter your third issue (optional)"
                value={values.issue3}
                onChange={(e) =>
                  setValues({ ...values, issue3: e.target.value })
                }
              />
              {errors.issue3 && <p>{errors.issue3}</p>}
            </div>

            <button type="submit" className="btn btn-primary mb-3">
              Sign up
            </button>

            <span className="form-input-login">
              Already have an account? Login <a href="Login">here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;
