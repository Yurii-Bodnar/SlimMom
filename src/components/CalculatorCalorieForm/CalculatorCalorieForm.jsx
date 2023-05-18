import { useFormik } from 'formik';
import {
  Box,
  BoxForTabletAndDesc,
  BoxForTabletAndDescSecond,
  BoxForTabletAndDescThird,
  BoxTitle,
  Btn,
  Container,
  DivRadio,
  Form,
  Input,
  Title,
  WrapperRadio,
  WrapperRadioBtn,
  WrapperRadioLabel,
  WrapperSubmit,
} from './CalculatorCalorieForm.styled';
import { useDispatch } from 'react-redux';
import { calculateDailyRate } from 'redux/userData/userDataOperation';
import { modalOpen } from 'redux/userData/userDataSlice';

const validate = values => {
  const errors = {};
  if (!values.height) {
    errors.height = 'Required';
  } else if (values.height > 300) {
    errors.height = 'Height must be less than 300';
  } else if (values.height < 100) {
    errors.height = 'Height must be more than 100';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (values.age > 99) {
    errors.age = 'Invalid age. Age must be less than 100 years ';
  } else if (values.age < 15) {
    errors.age = 'Invalid age. Age must be more than 15 years ';
  }
  if (!values.weight) {
    errors.weight = 'Required';
  } else if (values.weight > 250) {
    errors.weight = 'Invalid wight. Wight must be less than 250 kilogram ';
  } else if (values.weight < 20) {
    errors.weight = 'Invalid wight. Wight must be more than 20 kilogram ';
  }
  if (!values.desiredWeight) {
    errors.desiredWeight = 'Required';
  } else if (values.desiredWeight > 100) {
    errors.desiredWeight =
      'Invalid wight. Wight must be less than 100 kilogram ';
  } else if (values.desiredWeight < 20) {
    errors.desiredWeight =
      'Invalid wight. Wight must be more than 20 kilogram ';
  }
  if (!values.bloodType) {
    errors.bloodType = 'Required';
  }
  return errors;
};

const CalculatorCalorieForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      weight: '',
      desiredWeight: '',
      bloodType: '',
    },
    validate,
    onSubmit: values => {
      const dataUser = {
        height: values.height,
        age: values.age,
        weight: values.weight,
        desiredWeight: values.desiredWeight,
        bloodType: values.bloodType,
      };
      console.log(dataUser);
      dispatch(calculateDailyRate(dataUser));
      dispatch(modalOpen());
    },
  });
  return (
    <Container>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={formik.handleSubmit}>
        <BoxForTabletAndDesc>
          <BoxForTabletAndDescSecond>
            <label>
              <Input
                type="text"
                id="height"
                placeholder="Height"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
              />
              {formik.errors.height && formik.touched.height ? (
                <div>{formik.errors.height}</div>
              ) : null}
            </label>
            <label>
              <Input
                type="text"
                placeholder="Age"
                id="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              {formik.errors.age && formik.touched.age ? (
                <div>{formik.errors.age}</div>
              ) : null}
            </label>
            <label>
              <Input
                type="text"
                placeholder="Current weight"
                id="weight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
              />
              {formik.errors.weight && formik.touched.weight ? (
                <div>{formik.errors.weight}</div>
              ) : null}
            </label>
          </BoxForTabletAndDescSecond>
          <BoxForTabletAndDescThird>
            <label>
              <Input
                type="text"
                placeholder="Desired weight"
                id="desiredWeight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desiredWeight}
              />
              {formik.errors.desiredWeight && formik.touched.desiredWeight ? (
                <div>{formik.errors.desiredWeight}</div>
              ) : null}
            </label>
            <Box>
              <BoxTitle>Blood type {formik.values.bloodType}</BoxTitle>
              {formik.errors.bloodType && formik.touched.bloodType ? (
                <div>{formik.errors.bloodType}</div>
              ) : null}
            </Box>
            <WrapperRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type="radio"
                  value="1"
                  id="bloodType"
                  name="bloodType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <WrapperRadioLabel htmlFor="1">1</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type="radio"
                  value="2"
                  name="bloodType"
                  id="bloodType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor="2">2</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type="radio"
                  value="3"
                  name="bloodType"
                  id="bloodType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor="3">3</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type="radio"
                  value="4"
                  name="bloodType"
                  id="bloodType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor="4">4</WrapperRadioLabel>
              </DivRadio>
            </WrapperRadio>
          </BoxForTabletAndDescThird>
        </BoxForTabletAndDesc>
        <WrapperSubmit>
          <Btn type="submit">Start losing weight</Btn>
        </WrapperSubmit>
      </Form>
    </Container>
  );
};

export default CalculatorCalorieForm;
