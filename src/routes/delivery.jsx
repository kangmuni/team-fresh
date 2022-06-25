import { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import DeliveryPopup from '../components/delivery/delievery_popup';

const Postcode = styled.section`
  padding-top: 80px;
`;

const Delivery = () => {
  const [zoneCode, setZoneCode] = useState(null);
  const [roadAddress, setRoadAddress] = useState(null);
  const [selectedAdress, setSelectedAdress] = useState(false);

  const handleComplete = (data) => {
    setZoneCode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setSelectedAdress(true);
  };

  const handleClose = (data) => {
    console.log(data);
  };

  return (
    <Postcode>
      <DaumPostcode onComplete={handleComplete} onClose={handleClose} />
      {selectedAdress && (
        <DeliveryPopup zoneCode={zoneCode} roadAddress={roadAddress} />
      )}
    </Postcode>
  );
};

export default Delivery;
