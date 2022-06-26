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

const ServiceSecond = (props) => {
  return (
    <>
      <Left>
        <Description>
          <Text fontSize="40px" fontWeight="900" color="#02204b">
            식자재 제안,
            <br />
            업장 운영 형태에 맞는
            <br />
            최적의 형태로
          </Text>
          <Text fontSize="20px" color="#6d6e70">
            주기적인 단가 관리 시스템을 통해 <br />
            합리적인 가격의 상품을 제공하고, <br />
            자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.
          </Text>
        </Description>
      </Left>
      <Right>
        <Img pic src="/images/main_service_img02.jpeg" />
      </Right>
    </>
  );
};

export default ServiceSecond;
