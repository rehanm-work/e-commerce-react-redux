export default function validateForm(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'FirstName is required';
  }

  if (!values.lastName) {
    errors.lastName = 'LastName is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Email is invalid';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (!/^.*(?=.{8,}).*$/.test(values.password)) {
    errors.password = 'Password must have at least 8 or more characters';
  } else if (!/^.(?=.*[a-zA-Z]).*$/.test(values.password)) {
    errors.password = 'Password must have letter';
  } else if (!/^.(?=.*\d).*$/.test(values.password)) {
    errors.password = 'Password must have digit';
  } else if (!/^.(?=.*[!#$%&?@*^ "]).*$/.test(values.password)) {
    errors.password = 'Password must have special character';
  }

  if (values.password2 !== values.password) {
    errors.password2 = 'password does not match';
  }

  return errors;
}
