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

const ServiceFourth = (props) => {
  return (
    <>
      <Left>
        <Description>
          <Text fontSize="40px" fontWeight="900" color="#02204b">
            기업 대상 전문 보험,
            <br />
            상해보험부터 재산종합보험까지
            <br />
            똑똑하게
          </Text>
          <Text fontSize="20px" color="#6d6e70">
            기업 전문 보험 GA와 만나
            <br />
            팀프인슈어런스가 탄생했습니다. <br />
            기업 맞춤형, 최적의 보험 상품을 추천받아보세요.
          </Text>
        </Description>
      </Left>
      <Right>
        <Img pic src="/images/main_service_img04.jpeg" />
      </Right>
    </>
  );
};

export default ServiceFourth;
