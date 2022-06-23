import { useEffect, useState } from 'react';
import MainImage from './components/main_home/main_home';
import MainIntroduce from './components/main_introduce/main_introduce';
import MainHeader from './components/main_header/main_header';
import MainBusiness from './components/main_business/main_business';

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <>
      <MainHeader scroll={scroll} />
      <MainImage />
      <MainIntroduce />
      <MainBusiness />
    </>
  );
}

export default App;
