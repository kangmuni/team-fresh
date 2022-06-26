import React from 'react';
import styled from 'styled-components';

const Link = styled.section`
  padding: 130px;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 530px;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
  transition: all 0.2s linear;
`;

const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 45px;
  font-weight: 600;
  color: white;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 15px;
  text-align: center;
  padding-top: 70px;
  &:hover {
    background-color: transparent;
  }
  &:after {
    display: block;
    text-align: center;
    content: '';
    width: 1px;
    height: 80px;
    background-color: white;
    margin: 20px;
    opacity: 0;
    transform: translateY(50%);
    transition: all 0.15s linear;
  }
  &:hover:after {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const MainLink = () => {
  return (
    <Link>
      <Wrapper>
        <Contents>
          <Img src="/images/main_service_img01.jpeg"></Img>
          <Description>News</Description>
        </Contents>
        <Contents>
          <Img src="/images/main_service_img02.jpeg"></Img>
          <Description>Recruit</Description>
        </Contents>
        <Contents>
          <Img src="/images/main_service_img04.jpeg"></Img>
          <Description>Timf Story</Description>
        </Contents>
      </Wrapper>
    </Link>
  );
};

export default MainLink;
