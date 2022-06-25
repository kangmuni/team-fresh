import React from 'react';
import styled from 'styled-components';

const Popup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  height: 80vh;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #cccccc;
`;

const TopBar = styled.div`
  &:before {
    content: '←';
    cursor: pointer;
  }
  display: flex;
  width: 100%;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  border-bottom: 5px solid #02204b;
  margin: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const Input = styled.input`
  outline: none;
  padding: 10px;
  margin: 10px;
  width: 100%;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  width: 90%;
  background-color: #02204b;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  background-color: #e5e8ef;
  padding: 10px;
  margin: 10px;
  width: 100%;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 3px solid #02204b;
  padding: 5px 20px 20px 20px;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (props.large ? '20px' : '12.5px')};
  padding-top: 20px;
`;

const DeliveryPopup = ({ zoneCode, roadAddress }) => {
  return (
    <Popup>
      <TopBar>
        <div>&nbsp;&nbsp;다시 주소 검색하기</div>
      </TopBar>
      <Wrapper>
        <Input value={zoneCode}></Input>
        <Input value={roadAddress}></Input>
        <Input></Input>
      </Wrapper>
      <Button>주소입력</Button>
      <Bottom>
        <BottomBar>
          <Text large fontWeight="bold" color="red">
            배송 불가 장소 안내
          </Text>
          <Text>
            [하단 리스트 참고]
            <br />
            관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역
          </Text>
        </BottomBar>
        <Text>
          일부 장소가 배송 가능으로 검색될 수 있으나 <br />
          배송불가지역이므로 참고 바랍니다.
        </Text>
        <Text>
          [공공시설]
          <br />
          관공서: 국회, 우체국, 수자원공사 등<br />
          군사지역: 군부대, 군인아파트, 위병소 등<br />
          교정시설: 교도소, 구치소 등<br />
        </Text>
        <Text>
          [차량출입제한]
          <br />
          학교: 초등학교, 중학교, 고등학교
          <br />
          지하철, 공원, 유원지
          <br />
          그 외 차량 통제 지역
          <br />
        </Text>
        <Text>
          [기타]
          <br />
          대학교, 백화점, 병원(임시 지정), 시장, 마트, 공터,
          <br />
          가건물(가로판매대, 비닐하우스 등), 공사장, 산업단지, <br />
          물류단지, 고속도로 휴게소, 공공시설 무인택배함, <br />
          도서산간지역 등
        </Text>
      </Bottom>
    </Popup>
  );
};

export default DeliveryPopup;
