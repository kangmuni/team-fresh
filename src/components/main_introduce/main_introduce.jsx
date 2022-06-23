import React from 'react';
import styled from 'styled-components';

const Introduce = styled.section`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  text-align: center;
  padding: 185px;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const MainIntroduce = () => {
  return (
    <Introduce>
      <Wrapper>
        <Text>
          안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
          <br />
          국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
        </Text>
      </Wrapper>
    </Introduce>
  );
};

export default MainIntroduce;
