import React from 'react';
import styled, { css } from 'styled-components';

const Business = styled.section`
  position: relative;
  display: flex;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Text = styled.div`
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop};
  ${(props) =>
    props.middle &&
    css`
      padding: 70px 280px;
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    `}
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  ${(props) =>
    props.reverse &&
    css`
      transform: rotate(180deg);
    `}
`;

const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 50px;
  ${(props) =>
    props.reverse &&
    css`
      transform: rotate(-180deg);
    `}
`;

const IconImg = styled.img`
  width: 90px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(317deg)
    brightness(102%) contrast(101%);
`;

const Line = styled.span`
  width: 130px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  ${(props) =>
    props.column &&
    css`
      transform: rotate(90deg);
      width: 70px;
    `}
`;

const MainBusiness = () => {
  return (
    <Business>
      <Background>
        <Video src="https://player.vimeo.com/video/700346662?quality=1080p&autopause=0&playsinline=1&autoplay=1&loop=1&background=1"></Video>
      </Background>
      <Content>
        <Text fontSize="23px">???????????? ????????? ??????????????? ?????????</Text>
        <Text fontSize="65px" fontWeight="bold">
          ??????????????? ????????????
        </Text>
        <Process>
          <Icons>
            <Icon>
              <IconImg src="/images/icon01.png"></IconImg>
              <Text>????????????</Text>
            </Icon>
            <Line></Line>
            <Icon>
              <IconImg src="/images/icon02.png"></IconImg>
              <Text>??????</Text>
            </Icon>
            <Line></Line>
            <Icon>
              <IconImg src="/images/icon03.png"></IconImg>
              <Text>??????</Text>
            </Icon>
            <Line></Line>
            <Icon>
              <IconImg src="/images/icon04.png"></IconImg>
              <Text>????????????</Text>
            </Icon>
          </Icons>
          <Text middle fontSize="42px" fontWeight="bold">
            ???????????? ????????? ?????????
          </Text>
          <Icons reverse>
            <Icon reverse>
              <IconImg src="/images/icon05.png"></IconImg>
              <Text>???????????????</Text>
            </Icon>
            <Line></Line>
            <Icon reverse>
              <IconImg src="/images/icon06.png"></IconImg>
              <Text>???????????????</Text>
            </Icon>
            <Line></Line>
            <Icon reverse>
              <IconImg src="/images/icon07.png"></IconImg>
              <Text>??????</Text>
            </Icon>
            <Line></Line>
            <Icon reverse>
              <IconImg src="/images/icon08.png"></IconImg>
              <Text>??????</Text>
            </Icon>
          </Icons>
          <Line column></Line>
          <Text fontSize="22px" marginTop="70px">
            ????????? ????????? ?????? ????????? ??????
          </Text>
        </Process>
      </Content>
    </Business>
  );
};

export default MainBusiness;
