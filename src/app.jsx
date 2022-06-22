/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import MainImage from './components/main_image/main_image';
import MainNav from './components/main_header/main_header';

function App() {
  return (
    <>
      <MainNav scroll={scroll} />
      <MainImage />
    </>
  );
}

export default App;
