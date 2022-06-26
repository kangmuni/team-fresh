import React from 'react';
import styled from 'styled-components';

const Point = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 85vh;
  background: linear-gradient(white 55%, #f4f4f4 45%);
  margin-top: 50px;
`;

const Title = styled.div`
  color: #000000;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
  height: 550px;
  margin-top: 50px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding-left: 4px;
  transition: all 300ms ease-in-out;
  &:hover {
    flex: 2;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 45px 40px 25px;
  width: 100%;
`;

const Top = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  width: 100%;
`;

const Bottom = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding-top: 10px;
`;

const MainPoint = () => {
  return (
    <Point>
      <Title fontSize="23px" fontWeight="400">
        팀프레시를 이끄는 힘
      </Title>
      <Title fontSize="62px" fontWeight="900">
        핵심역량
      </Title>
      <Wrapper>
        <Container>
          <Img src="/images/main_service_img01.jpeg"></Img>
          <Description>
            <Top>특허 보유 TMS</Top>
            <Bottom>
              새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
            </Bottom>
          </Description>
        </Container>
        <Container>
          <Img src="/images/main_service_img02.jpeg"></Img>
          <Description>
            <Top>국내 1위 새벽배송</Top>
            <Bottom>대한민국 1위 안정된 새벽배송망 구축</Bottom>
          </Description>
        </Container>
        <Container>
          <Img src="/images/main_service_img03.jpeg"></Img>
          <Description>
            <Top>24시간 관제</Top>
            <Bottom>24시간 현장 관제를 통해 상품을 안전하게 배송 완료</Bottom>
          </Description>
        </Container>
        <Container>
          <Img src="/images/main_service_img04.jpeg"></Img>
          <Description>
            <Top>라이선스 보유 차량망</Top>
            <Bottom>합법적으로 허가 받은 차량만을 섭외해 운영</Bottom>
          </Description>
        </Container>
      </Wrapper>
    </Point>
  );
};

export default MainPoint;
