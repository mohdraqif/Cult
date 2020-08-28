import React from 'react';
import './CloseButton.css'

const CloseButton = () => {
  const colorChange = () => {
    alert('Clicked')
  }

  return (
    <div className="close-button">
      <img src={require('../../../assets/min.png')} onClick={colorChange} />
    </div>
  );
}

export default CloseButton;
