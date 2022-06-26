import React from 'react';
import styled, { css } from 'styled-components';

const Left = styled.div`
  display: flex;
`;

const Description = styled.div`
  align-self: center;
`;

const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  padding-top: 40px;
  padding-left: 20px;
`;

const Right = styled.div``;

const Img = styled.img`
  width: 80px;
  ${(props) =>
    props.pic &&
    css`
      width: 690px;
      height: 700px;
    `}
`;

const ServiceThird = (props) => {
  return (
    <>
      <Left>
        <Description>
          <Text fontSize="40px" fontWeight="900" color="#02204b">
            외식 창업,
            <br />
            적은 자본으로
            <br />
            빠르고 간편하게
          </Text>
          <Text fontSize="20px" color="#6d6e70">
            외식 전문 브랜드 팀프에프앤비가 <br />
            소형, 소자본으로도 쉽고 편리하게
            <br />
            점포를 운영할 수 있도록
            <br />
            가맹 패키지를 제안해드리니다.
          </Text>
        </Description>
      </Left>
      <Right>
        <Img pic src="/images/main_service_img03.jpeg" />
      </Right>
    </>
  );
};

export default ServiceThird;
