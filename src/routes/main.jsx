import React from 'react';
import MainBusiness from '../components/main/main_business';
import MainHome from '../components/main/main_home';
import MainIntroduce from '../components/main/main_introduce';
import MainLink from '../components/main/main_link';
import MainPoint from '../components/main/main_point';
import MainService from '../components/main/main_service';

const Main = () => {
  return (
    <>
      <MainHome />
      <MainIntroduce />
      <MainBusiness />
      <MainService />
      <MainPoint />
      <MainLink />
    </>
  );
};

export default Main;
