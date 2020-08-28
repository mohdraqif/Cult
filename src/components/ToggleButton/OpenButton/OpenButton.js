import React from 'react';
import './OpenButton.css'

const OpenButton = () => {
  const colorChange = () => {
    alert('Clicked')
  }

  return (
    <div className="open-button">
      <img src={require('../../../assets/max.png')} onClick={colorChange} />
    </div>
  );
}

export default OpenButton;
