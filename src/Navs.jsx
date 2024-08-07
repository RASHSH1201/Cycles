import React from 'react';
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <nav className="Nav">
      <ul>
        <li><Link to="/" className = "c">Home</Link></li>
        <li><Link to="/bikes" className = "c">Bikes</Link></li>
        <li><Link to="/ebikes"className = "c">E-Bikes</Link></li>
        <li><Link to="/escooter" className = "c">E-Scooter</Link></li>
      </ul>
    </nav>
  );
}

export default Navs;