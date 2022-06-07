import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  console.log("init useform")
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    condition1: '',
    condition2: '',
    condition3: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
console.log("handlesubmit called on useform")
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
