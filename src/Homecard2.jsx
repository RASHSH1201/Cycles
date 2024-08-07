import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from "./assets/ebike.jpg"


function Homecard2(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Ebikes');
  };

  return (
    <button className="d" onClick={handleButtonClick}>
      <div className="Homecard">
        <img className="card-image" src={pic} alt="E-Bike" />
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.add}</p>
      </div>
    </button>
  );
}

export default Homecard2;