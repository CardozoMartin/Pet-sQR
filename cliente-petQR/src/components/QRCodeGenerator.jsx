import React from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom'; // Importa Link de React Router

function QRCodeGenerator({ petId }) {
  const baseUrl = 'https://petsqr.netlify.app/pet-details';

  if (!petId) {
    return <div>El ID de la mascota es inválido.</div>;
  }

  const generateUrlWithId = () => {
    return `${baseUrl}/${petId}`;
  };

  return (
    <div>
      <h1>Generador de Código QR</h1>
      <div style={{ marginTop: '20px' }}>
        {/* Agrega un enlace que redirija al componente de detalles de la mascota */}
        <Link to={`/pet-details/${petId}`}>
          <QRCode value={generateUrlWithId()} size={256} />
        </Link>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
