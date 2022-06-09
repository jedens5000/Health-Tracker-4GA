export function validateSignUp(values) {
    let errors = {};
  console.log("validate info was called")
    if (!values.name.trim()) {
      errors.name = 'Name required';
    }
   
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    console.log("values",values)
    if (!values.condition1) {
      errors.condition1 = 'condition is required';
    } 

    if (!values.condition2) {
      errors.condition2 = 'condition is required';
    } 

    if (!values.condition3) {
      errors.condition3 = 'condition is required';
    } 
    
    return errors;
  }
  