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
  width: 380px;
  height: 500px;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
`;

const Description = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 50px;
  color: white;
  background-color: black;
  opacity: 0.2;
  border-radius: 20px;
  text-align: center;
  &:hover {
    background-color: none;
    opacity: 1;
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
