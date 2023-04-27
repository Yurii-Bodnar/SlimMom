import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from 'redux/auth/authOperation';
import {
  Box,
  Btn,
  Container,
  Form,
  Input,
  Title,
  Link,
} from './LoginForm.styled';

const validate = values => {
  const errors = {};
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(authLogin(user));
      navigate('/');
    },
  });
  return (
    <Container>
      <Title>Sign in</Title>
      <Form onSubmit={formik.handleSubmit}>
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
          <Btn type="submit">Sign in</Btn>
          <Link to="/registration">Register</Link>
        </Box>
      </Form>
    </Container>
  );
};

export default LoginForm;
