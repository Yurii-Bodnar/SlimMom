import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';

const CalculatorPage = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  return <>{isModalOpen ? <RightSideBar /> : <><CalculatorCalorieForm/></>}</>;
};

export default CalculatorPage;
