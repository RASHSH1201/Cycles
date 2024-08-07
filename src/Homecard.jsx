import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from "./assets/bike2.webp"



function Homecard(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Bikes');
  };

  return (
      
    <button className="d" onClick={handleButtonClick}>
      <div className="Homecard">
        <img className="card-image" src={pic} alt="Bike" />
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.add}</p>
      </div>
    </button>

  );
}

export default Homecard;