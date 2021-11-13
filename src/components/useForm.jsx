import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addUser } from '../features/user';

export const useForm = (initialValues, validateForm, setIsLoggedIn = false) => {
  const user = useSelector((state) => state.users.value[0]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked !== undefined && e.target.name === 'remember') {
      const { name, checked } = e.target;
      setValues({
        ...values,
        [name]: checked,
      });
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (values.page === 'signIn') {
        if (user.email === values.email && user.password === values.password) {
          setIsLoggedIn(true);
          history.push('/');
        }
      } else {
        dispatch(addUser({ email: values.email, password: values.password }));
        history.push('/sign-in');
      }
    }
    setIsSubmitting(false);
  }, [errors, isSubmitting, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (values.page === 'signIn') {
      setErrors(validateForm(values, user));
    } else {
      setErrors(validateForm(values));
    }
  };

  return { errors, values, handleChange, handleSubmit };
};
