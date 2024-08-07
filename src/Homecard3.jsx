import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from "./assets/es.jpg"


function Homecard3(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Escooter');
  };

  return (
    <button className="d" onClick={handleButtonClick}>
      <div className="Homecard">
        <img className="card-image" src={pic} alt="E-Scooter" />
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.add}</p>
      </div>
    </button>
  );
}

export default Homecard3;