export default function validateForm(values, user) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Email is invalid';
  }

  if (user.email !== values.email) {
    errors.email = 'Email not found';
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

  if (user.password !== values.password) {
    errors.password = 'Incorrect Password';
  }

  return errors;
}
