import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FacebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const YoutubeIcon = <FontAwesomeIcon icon={faYoutube} />;

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

const Link = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Icon = styled.div`
  font-size: 40px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  ${(props) =>
    props.brunch &&
    css`
      width: 40px;
      height: 40px;
      font-family: cursive;
      font-style: italic;
      font-weight: 700;
      font-size: 30px;
      background-color: black;
      color: #282828;
      text-align: center;
      font-size: 30px;
      border-radius: 50%;
      padding-right: 5px;
    `}
`;

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
        <Link>
          <Icon>{FacebookIcon}</Icon>
          <Icon brunch>b</Icon>
          <Icon>{YoutubeIcon}</Icon>
        </Link>
      </Wrapper>
    </Foot>
  );
};

export default Footer;
