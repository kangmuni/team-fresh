import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => (props.scroll ? '#0e2138' : 'none')};
  opacity: 0.95;
  color: white;
  padding: 0 440px;
  z-index: 1;
`;

const Logo = styled.img`
  width: 120px;
  height: 25px;
`;

const Menu = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const List = styled.li`
  margin: 5px 35px 5px 0;
  padding-bottom: 3px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: white;
  }
`;

const MainHeader = () => {
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
    <Header scroll={scroll}>
      <Logo src="/images/logo.png" alt="logo"></Logo>
      <Menu>
        <List>회사소개</List>
        <List>서비스소개</List>
        <List>인재채용</List>
        <List>고객지원</List>
      </Menu>
    </Header>
  );
};

export default MainHeader;
