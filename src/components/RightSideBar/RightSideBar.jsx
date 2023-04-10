import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { useState } from 'react';
import { Container, Link } from './RightSideBar.styled';

const RightSideBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  console.log('setIsSideBarOpen', setIsSideBarOpen);
  return (
    <>
      {isSideBarOpen && (
        <>
          {' '}
          <Header
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          <Container>
            <Navigation />
          </Container>
        </>
      )}
    </>
  );
};

export default RightSideBar;