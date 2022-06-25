import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) =>
    props.scroll ? 'rgb(1, 22, 48, 0.9)' : 'rgb(0, 0, 0, 0.5)'};
  color: white;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 25px;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  /* &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  } */
`;

const List = styled.li`
  position: relative;
  margin: 5px 0 5px 40px;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
  &:after {
    content: '';
    position: absolute;
    background-color: white;
    height: 2px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: all 0.15s ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <Head scroll={scroll}>
      <Wrapper>
        <StyledLink to="/">
          <Logo src="/images/logo.png" alt="logo"></Logo>
        </StyledLink>
        <Menu>
          <StyledLink to="/company">
            <List>회사소개</List>
          </StyledLink>
          <StyledLink to="/service">
            <List>서비스소개</List>
          </StyledLink>
          <StyledLink to="/recruit">
            <List>인재채용</List>
          </StyledLink>
          <StyledLink to="/customer">
            <List>고객지원</List>
          </StyledLink>
          <StyledLink to="/delivery">
            <List>배송가능지역</List>
          </StyledLink>
        </Menu>
      </Wrapper>
    </Head>
  );
};

export default Header;
