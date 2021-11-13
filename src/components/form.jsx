import validateForm from '../validation/validate_info';
import { useForm } from './useForm';

function Form() {
  const { errors, values, handleChange, handleSubmit } = useForm(validateForm);
  return (
    <form>
      <label htmlFor='name'>Name: </label>
      <input
        id='name'
        name='name'
        type='text'
        value={values.name}
        onChange={handleChange}
      />
      <p>{errors.name}</p>
      <label htmlFor='email'>Email: </label>
      <input
        id='email'
        name='email'
        type='email'
        value={values.email}
        onChange={handleChange}
      />
      <p>{errors.email}</p>
      <label htmlFor='password'>Password: </label>
      <input
        id='password'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
      />
      <p>{errors.password}</p>
      <label htmlFor='password2'>Confirm Password: </label>
      <input
        id='password2'
        name='password2'
        type='password'
        value={values.password2}
        onChange={handleChange}
      />
      <p>{errors.password2}</p>
      <button onClick={handleSubmit} type='submit'>
        Submit
      </button>
    </form>
  );
}

export default Form;
