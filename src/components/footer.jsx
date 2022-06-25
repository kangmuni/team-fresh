import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background-color: #191919;
  padding: 50px;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 100px;
  padding-bottom: 40px;
`;

const Info = styled.div`
  color: #cccccc;
  font-size: 18px;
`;

const Link = styled.div``;

const Footer = () => {
  return (
    <Foot>
      <Wrapper>
        <Logo src="/images/logo.png"></Logo>
        <Info>
          (주)팀프레시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업자번호
          561-88-01138&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대표
          이성일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울특별시
          송파구 위례성대로 12길
          15-1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전화
          02-423-0525&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팩스
          02-3432-0525&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          메일
          info@timf.co.kr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;영업 및
          제휴 문의 sales@timf.co.kr
          <br />
          <br />
          Copyrightⓒ TeamFresh Co.,Ltd. All Rights Reserved.
        </Info>
        <Link></Link>
      </Wrapper>
    </Foot>
  );
};

export default Footer;
