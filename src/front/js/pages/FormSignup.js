import React, { useContext, useState } from "react";
import {validateSignUp} from "../component/validations";

import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/Form.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"

export const FormSignup = ({ submitForm }) => {
  const { store, actions } = useContext(Context); 
  const history = useHistory()
  const [values, setValues]=useState({})
  const [errors, setErrors] = useState({})
  return (
    <div className="top">
      <img className="logo" src={mindsetLogo} />
      <h1>
        Start tracking your mental health today!
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
          <form onSubmit={(e)=>{
            e.preventDefault();
            const _errors = validateSignUp(values)
            if(Object.keys(_errors).length > 0) {
              setErrors(_errors)
              return false
            }else {
              setErrors({})
            }
            actions.formSignup(
                    values.name,
                    values.email,
                    values.password,
                    values.password2,
                    values.condition1
                  )
                  .then(() =>history.push("/main"))
                  .catch(error=>alert(error))
                  console.log("form submitted") 
                }
           } 
          
                  className="form" noValidate>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="name"
                name="name"
                placeholder="Enter your first name"
                value={values.name}
                onChange={(e)=>setValues({...values, name:e.target.value})}
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
                onChange={(e)=>setValues({...values, email:e.target.value})}
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
                onChange={(e)=>setValues({...values, password:e.target.value})}
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
                onChange={(e)=>setValues({...values, password2:e.target.value})}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Condition</label>
              <input
                className="form-input"
                type="condition1"
                name="condition1"
                placeholder="Enter your first condition"
                value={values.condition1}
                onChange={(e)=>setValues({...values, condition1:e.target.value})}
              />
              {errors.condition1 && <p>{errors.condition1}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Condition</label>
              <input
                className="form-input"
                type="condition2"
                name="condition2"
                placeholder="Enter your second condition"
                value={values.condition2}
                onChange={(e)=>setValues({...values, condition2:e.target.value})}
              />
              {errors.condition2 && <p>{errors.condition2}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Condition</label>
              <input
                className="form-input"
                type="condition3"
                name="condition3"
                placeholder="Enter your third condition"
                value={values.condition3}
                onChange={(e)=>setValues({...values, condition3:e.target.value})}
              />
              {errors.condition3 && <p>{errors.condition3}</p>}
            </div>
            
              <button
                type="submit"
                className="btn btn-primary mb-3"
                
              >
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
