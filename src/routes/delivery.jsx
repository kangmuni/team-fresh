import { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import DeliveryPopup from '../components/delivery/delievery_popup';

const Layer = styled.section`
  display: flex;
  padding-top: 77px;
  height: 100vh;
`;

const Delivery = () => {
  // async function postData() {
  //   const reponse = await fetch(
  //     'https://localhost:17481/tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     }
  //   );
  //   console.log(reponse.json);
  // }

  const [zoneCode, setZoneCode] = useState(null);
  const [roadAddress, setRoadAddress] = useState(null);
  const [jibunAddress, setJibunAddress] = useState(null);
  const [selectedAdress, setSelectedAdress] = useState(false);

  // const isOpen = () => {
  //   if (!selectedAdress) {
  //     setSelectedAdress(true);
  //   } else {
  //     setSelectedAdress(false);
  //   }
  // };

  const handleComplete = (data) => {
    if (data.userSelectedType === 'R') {
      setRoadAddress(data.roadAddress);
    } else {
      setJibunAddress(data.jibunAddress);
    }
    setZoneCode(data.zonecode);
    setSelectedAdress(true);
  };

  return (
    <Layer>
      {selectedAdress ? (
        <DeliveryPopup
          zoneCode={zoneCode}
          roadAddress={roadAddress}
          jibunAddress={jibunAddress}
          setSelectedAdress={setSelectedAdress}
        />
      ) : (
        <DaumPostcode onComplete={handleComplete} style={{ height: '100vh' }} />
      )}
    </Layer>
  );
};

export default Delivery;
