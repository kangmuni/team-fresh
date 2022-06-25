import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Main from './routes/main';
import MenuCompany from './routes/company';
import MenuService from './routes/service';
import MenuRecruit from './routes/recruit';
import MenuCustomer from './routes/customer';
import MenuPostcode from './routes/delivery';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/company" element={<MenuCompany />}></Route>
        <Route path="/service" element={<MenuService />}></Route>
        <Route path="/recruit" element={<MenuRecruit />}></Route>
        <Route path="/customer" element={<MenuCustomer />}></Route>
        <Route path="/delivery" element={<MenuPostcode />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
