import React from 'react';
import MainImage from './components/main_home/main_home';
import MainIntroduce from './components/main_introduce/main_introduce';
import MainHeader from './components/main_header/main_header';
import MainBusiness from './components/main_business/main_business';
import MainService from './components/main_service/main_service';
import MainPoint from './components/main_point/main_point';
import MainLink from './components/main_link/main_link';

function App() {
  return (
    <>
      <MainHeader />
      <MainImage />
      <MainIntroduce />
      <MainBusiness />
      <MainService />
      <MainPoint />
      <MainLink />
    </>
  );
}

export default App;
