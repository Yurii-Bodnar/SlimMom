import { useFormik } from 'formik';
import btnPlus from '../../assets/sprite.svg';
import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileFormAddProductsOpen } from 'redux/products/productSlice';
import {
  selectMobileFromAddProduct,
  selectProductSearch,
} from 'redux/products/productsSelectors';
import {
  BoxForMobile,
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
import { selectDataCalendar } from 'redux/userData/userDataSelectors';
import {
  addProduct,
  getCurrentUser,
  getInfoDay,
} from 'redux/userData/userDataOperation';
import {
  correctDataForAddProductOperation,
  correctDataForSummary,
  correctDateForAddOperation,
  dateToRequest,
} from 'utility/auxiliaryFunctions';

const DiaryAddProductForm = () => {
  const isMobile = useIsMobile();
  const isTabletOrDesktop = useIsTabletOrDesktop();
  const dispatch = useDispatch();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);
  const productsSearch = useSelector(selectProductSearch);
  const date = useSelector(selectDataCalendar);
  console.log(date);
  // const goToFormForMobile = () => {
  //   dispatch(setMobileFormAddProductsOpen());
  // };
  const resetForm = (name, grams) => {
    name = '';
    grams = '';
  };
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
      resetForm(formik.values.name, formik.values.grams);
    },
  });
  return (
    <>
      {isMobile && isMobileFormOpen ? (
        <Form onSubmit={formik.handleSubmit}>
          {/* <FormBox> */}
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
