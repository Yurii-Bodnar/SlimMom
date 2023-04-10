import Header from 'components/Header/Header';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useState } from 'react';

const MainPage = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      {!isSideBarOpen && (
        <Header
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      )}
      {isSideBarOpen && (
        <RightSideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      )}
    </>
  );
};

export default MainPage;
