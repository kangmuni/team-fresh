import React from 'react';
import styled, { css } from 'styled-components';

const Home = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  /* white-space: nowrap; */
  font-size: 0;
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  width: 100%;
  height: 100%;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0e2138;
`;

const Content = styled.div`
  position: absolute;
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  position: absolute;
  bottom: 35%;
`;

const Link = styled.li`
  margin-left: 5px;
  width: 48px;
  height: 8px;
  background-color: ${(props) => (props.checked ? '#005cdf' : '#e5e8ef')};
  border-radius: 10px;
  cursor: pointer;
`;

const Texts = styled.div``;

const Text = styled.div`
  color: white;
  font-size: 63px;
  font-weight: bold;
  ${(props) =>
    props.subtitle &&
    css`
      margin: 35px 0;
      font-size: 23px;
      font-weight: 500;
    `}
`;

const MainHome = () => {
  return (
    <>
      <Home>
        <Background>
          <Ul>
            <Li>
              <Img />
            </Li>
            <Li>
              <Img />
            </Li>
            <Li>
              <Img />
            </Li>
          </Ul>
        </Background>
        <Content>
          <Links>
            <Link checked></Link>
            <Link></Link>
            <Link></Link>
          </Links>
          <Texts>
            <Text>
              대한민국 No.1
              <br />
              Cold-chain platform
            </Text>
            <Text subtitle>
              팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
            </Text>
          </Texts>
        </Content>
      </Home>
    </>
  );
};

export default MainHome;
