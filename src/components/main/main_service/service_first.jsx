import React from 'react';

const serviceFirst = (props) => {
  return (
    <>
      <Left>
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
    </>
  );
};

export default serviceFirst;
