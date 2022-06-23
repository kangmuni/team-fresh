import React from 'react';
import MainImage from './components/main_home/main_home';
import MainIntroduce from './components/main_introduce/main_introduce';
import MainNav from './components/main_header/main_header';

function App() {
  return (
    <>
      <MainNav />
      <MainImage />
      <MainIntroduce />
    </>
  );
}

export default App;
