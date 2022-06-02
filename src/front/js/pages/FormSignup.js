import React from 'react';
import validate from '../component/validateInfo';
import useForm from '../component/useForm';
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/Form.css";

export const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='top'>
      <img className="logo" src={mindsetLogo} /> 
        <h1>
          Start tracking your mental health today!<br/> 
          Create your account by filling out the
          information below.
        </h1>
    
    <div className='form-container'>    
    
      <div style={{ backgroundImage: "url(/mainPageBackground.png)", width: '100%', id: 'background', }}>
  
      <form onSubmit={handleSubmit} className='form' noValidate>
     
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        {/* <Link to="/main"> */}
        <button type="submit" className="btn btn-primary mb-3">
          Sign up
        </button>
        {/* </Link> */}
        <span className='form-input-login'>
          Already have an account? Login <a href='Login'>here</a>
        </span>
        
      </form>
    </div>
    </div>
    </div>
    
  );
};


export default FormSignup;