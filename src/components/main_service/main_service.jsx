import React from 'react';
import styled, { css } from 'styled-components';

const Service = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
`;

const Title = styled.div`
  color: #000000;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const Wrapper = styled.div`
  position: relative;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const Left = styled.div`
  display: flex;
`;

const Buttons = styled.ul`
  position: absolute;
  top: 8%;
  left: 20px;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  text-align: center;
  font-size: 22px;
`;

const Button = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #f5f5f5;
  ${(props) =>
    props.active &&
    css`
      background-color: #02204b;
      color: white;
    `}
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

const MainService = () => {
  return (
    <Service>
      <Title fontSize="23px" fontWeight="400">
        Serivce Introduction
      </Title>
      <Title fontSize="62px" fontWeight="900">
        서비스소개
      </Title>
      <Wrapper>
        <Left>
          <Buttons>
            <Button active>
              <Img src="/images/icon03.png"></Img>
              <div>물류</div>
            </Button>
            <Button>
              <Img src="/images/icon04.png"></Img>
              <div>유통</div>
            </Button>
            <Button>
              <Img src="/images/icon06.png"></Img>
              <div>프랜차이즈</div>
            </Button>
            <Button>
              <Img src="/images/icon07.png"></Img>
              <div>보험</div>
            </Button>
          </Buttons>
          <Description>
            <Text fontSize="40px" fontWeight="900" color="#02204b">
              상품의 관리,
              <br />
              보관부터 배송까지
              <br />
              완벽하게
            </Text>
            <Text fontSize="20px" color="#6d6e70">
              이커머스 운영에 최적화된 풀필먼트 센터와 <br />
              새벽배송망을 보유한 팀프레시의 <br />
              이커머스 전문 물류 서비스를 제공받으세요.
            </Text>
          </Description>
        </Left>
        <Right>
          <Img pic src="/images/main_service_img01.jpeg" />
        </Right>
      </Wrapper>
    </Service>
  );
};

export default MainService;
