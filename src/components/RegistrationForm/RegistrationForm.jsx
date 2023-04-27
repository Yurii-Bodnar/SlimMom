import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authRegister } from 'redux/auth/authOperation';
import {
  Box,
  Btn,
  Container,
  Form,
  Input,
  Link,
  Title,
} from './RegistrationForm.styled';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 3) {
    errors.username = 'Must be 3 characters or more';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 10) {
    errors.password = 'Must be 10 characters or more';
  }
  return errors;
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      const user = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(authRegister(user));
      navigate('/login');
      console.log('lalalal');
    },
  });
  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={formik.handleSubmit}>
        <label>
          <Input
            id="username"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.email ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </label>
        <label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </label>
        <label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.email ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </label>
        <Box>
          <Btn type="submit">Register</Btn>
          <Link to="/login">Login</Link>
        </Box>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
