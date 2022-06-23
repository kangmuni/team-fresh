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
        {/* <Img src="/images/main_image2.jpeg"></Img> */}
        <Background>
          <Img></Img>
        </Background>
        <Content>
          <Text>
            대한민국 No.1
            <br />
            Cold-chain platform
          </Text>
          <Text subtitle>
            팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
          </Text>
        </Content>
      </Home>
    </>
  );
};

export default MainHome;
