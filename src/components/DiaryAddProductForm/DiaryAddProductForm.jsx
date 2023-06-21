import { useFormik } from 'formik';
import btnPlus from '../../assets/sprite.svg';
import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMobileFromAddProduct,
  selectProductSearch,
} from 'redux/products/productsSelectors';
import {
  Btn,
  BtnAdd,
  BtnAddWrapper,
  Form,
  FormBox,
  Input,
  InputGrams,
  Svg,
} from './DiaryAddProductForm.styled';
import { searchByQueryProduct } from 'redux/products/productsOperation';
import {
  selectDataCalendar,
  selectDateNow,
} from 'redux/userData/userDataSelectors';
import { addProduct, getInfoDay } from 'redux/userData/userDataOperation';
import { correctDateForAddOperation } from 'utility/auxiliaryFunctions';

const DiaryAddProductForm = () => {
  const isMobile = useIsMobile();
  const isTabletOrDesktop = useIsTabletOrDesktop();
  const dispatch = useDispatch();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);
  const productsSearch = useSelector(selectProductSearch);
  const date = useSelector(selectDataCalendar);
  const dateForGetInfo = useSelector(selectDateNow);

  const formik = useFormik({
    initialValues: {
      name: '',
      grams: '',
    },
    onSubmit: values => {
      const product = {
        date: correctDateForAddOperation(date),
        productId: productsSearch.filter(el =>
          el.title.ua === values.name ? el._id : ''
        )[0]._id,
        weight: values.grams,
      };

      dispatch(addProduct(product));
      dispatch(getInfoDay({ date: dateForGetInfo }));
      formik.resetForm();
    },
  });
  return (
    <>
      {isMobile && isMobileFormOpen ? (
        <Form onSubmit={formik.handleSubmit}>
          <FormBox>
            <Input
              id="name"
              type="text"
              placeholder="Enter product name"
              list="productsList"
              onChange={e => {
                formik.handleChange(e);
                dispatch(searchByQueryProduct({ search: e.target.value }));
              }}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <datalist id="productsList">
              {productsSearch.map(el => (
                <option value={el.title.ua} id={el._id}></option>
              ))}
            </datalist>
            <Input
              id="grams"
              type="number"
              placeholder="Grams"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grams}
            />
          </FormBox>
          {/* </FormBox> */}
          <BtnAddWrapper>
            <BtnAdd type="submit">Add</BtnAdd>
          </BtnAddWrapper>
        </Form>
      ) : null}
      {isTabletOrDesktop && (
        <Form onSubmit={formik.handleSubmit}>
          <FormBox>
            <Input
              id="name"
              type="text"
              placeholder="Enter product name"
              list="productsList"
              onChange={e => {
                formik.handleChange(e);
                dispatch(searchByQueryProduct({ search: e.target.value }));
              }}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <datalist id="productsList">
              {productsSearch.map(el => (
                <option value={el.title.ua} id={el._id}></option>
              ))}
            </datalist>
            <InputGrams
              id="grams"
              type="number"
              placeholder="Grams"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grams}
            />
          </FormBox>
          <div>
            <Btn type="submit">
              <Svg>
                <use href={btnPlus + '#icon-plus'}></use>
              </Svg>
            </Btn>
          </div>
        </Form>
      )}
    </>
  );
};

export default DiaryAddProductForm;
