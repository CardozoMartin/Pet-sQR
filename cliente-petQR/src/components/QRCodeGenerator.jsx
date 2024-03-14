import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator({ petId }) {
  const baseUrl = 'http://localhost:5000/api/v1/';
  
  if (!petId) {
    return <div>El ID de la mascota es inválido.</div>;
  }

  const generateUrlWithId = () => {
    return `${baseUrl}${petId}`;
  };

  return (
    <div>
      <h1>Generador de Código QR</h1>
      <div style={{ marginTop: '20px' }}>
        <QRCode value={generateUrlWithId()} size={256} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
