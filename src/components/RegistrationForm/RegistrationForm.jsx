import { useFormik } from 'formik';
import {
  Box,
  Btn,
  Container,
  Form,
  Input,
  LinkLogin,
  Title,
} from './RegistrationForm.styled';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
    },
  });
  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={formik.handleSubmit}>
        <label>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <Box>
          <Btn type="submit">Register</Btn>
          <LinkLogin to="login">Login</LinkLogin>
        </Box>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
