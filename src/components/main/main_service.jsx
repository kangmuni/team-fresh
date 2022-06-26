import { useState } from 'react';
import styled, { css } from 'styled-components';
import ServiceFirst from './main_service/service_first';
import ServiceSecond from './main_service/service_second';
import ServiceThird from './main_service/service_third';
import ServiceFourth from './main_service/service_fourth';

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
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: #02204b;
      color: white;
    `}
`;

const Img = styled.img`
  width: 80px;
`;

const MainService = () => {
  const data = [
    { id: 1, name: 'first', value: '물류', src: '/images/icon03.png' },
    { id: 2, name: 'second', value: '유통', src: '/images/icon04.png' },
    { id: 3, name: 'third', value: '프랜차이즈', src: '/images/icon06.png' },
    { id: 4, name: 'fourth', value: '보험', src: '/images/icon07.png' },
  ];

  const [component, setComponent] = useState('first');

  const handleComponent = (event) => {
    setComponent(event.target.dataset.name);
  };

  const selectComponent = {
    first: <ServiceFirst />,
    second: <ServiceSecond />,
    third: <ServiceThird />,
    fourth: <ServiceFourth />,
  };

  return (
    <Service>
      <Title fontSize="23px" fontWeight="400">
        Serivce Introduction
      </Title>
      <Title fontSize="62px" fontWeight="900">
        서비스소개
      </Title>
      <Wrapper>
        <Buttons>
          {data.map((data) => {
            return (
              <Button
                key={data.id}
                data-name={data.name}
                onClick={handleComponent}
              >
                <Img data-name={data.name} src={data.src}></Img>
                <div data-name={data.name}>{data.value}</div>
              </Button>
            );
          })}
        </Buttons>
        {component && <>{selectComponent[component]} </>}
      </Wrapper>
    </Service>
  );
};

export default MainService;
