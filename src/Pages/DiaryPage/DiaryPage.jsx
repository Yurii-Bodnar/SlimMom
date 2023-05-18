import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';

const DiaryPage = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  return <>{isModalOpen ? <RightSideBar /> : <div>DiaryPage</div>} </>;
};

export default DiaryPage;
