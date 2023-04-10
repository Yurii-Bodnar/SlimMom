import Logo from 'components/Logo/Logo';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import {
  Box,
  ButtonMenu,
  ButtonMenuIcon,
  Container,
  HeaderWrap,
  Link,
  LinkRegister,
  Wrapper,
} from './Header.styled';
import burgerMenu from '../../assets/sprite.svg';

import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import Navigation from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import UserInfo from 'components/UserInfo/UserInfo';

const Header = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const isAuth = useSelector(selectToken);
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  console.log(setIsSideBarOpen);
  // useEffect(() => {
  //   if (isDesktop) {
  //     setIsSideBarOpen(false);
  //   }
  // }, [isDesktop, setIsSideBarOpen]);
  const menuOpen = () => {
    setIsSideBarOpen(true);
  };
  const menuClose = () => {
    setIsSideBarOpen(false);
  };
  return (
    <HeaderWrap>
      <Wrapper>
        <Logo />
        {!isAuth && (
          <Container>
            <Link to="login">SIGN IN</Link>
            <LinkRegister to="registration">REGISTRATION</LinkRegister>
          </Container>
        )}
        {isAuth && isDesktop && (
          <Container>
            {/* <Logo /> */}
            <Navigation />
          </Container>
        )}
        {(isAuth && !isDesktop && !isSideBarOpen && isTablet && (
          <Box>
            <UserInfo />
            <ButtonMenu type="button" onClick={menuOpen}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-burger-menu'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          </Box>
        )) ||
          (isAuth && !isDesktop && !isSideBarOpen && isMobile && (
            <ButtonMenu type="button" onClick={menuOpen}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-burger-menu'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          )) ||
          (isSideBarOpen && isAuth && !isDesktop && (
            <ButtonMenu type="button" onClick={menuClose}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-btnClose'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          ))}
      </Wrapper>
      {isAuth && isMobile && !isSideBarOpen && <UserInfo />}
      {isAuth && isDesktop && <UserInfo />}
    </HeaderWrap>
  );
};

export default Header;
