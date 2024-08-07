import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lottie from 'lottie-react';
import AnimationData from './assets/Animation - 1721610027456.json';
import AnimationData2 from './assets/Animation - 1721623615564 (1).json';

import Homecard from './Homecard.jsx';
import Homecard2 from './Homecard2.jsx';
import Homecard3 from './Homecard3.jsx';
import Title from './Title.jsx';
import Bikes from './Bikes.jsx';
import Ebikes from './Ebikes.jsx';
import Escooter from './Escooter.jsx';

function Home() {

  return (
    <>      
      <Lottie animationData={AnimationData} className="lottie-small" />
      <Lottie animationData={AnimationData2} className="lottie-other" />
      <Homecard name="Bike" add="We will guarantee a quality 2-wheel bike" />
      <Homecard2 name="E-Bike" add="We will guarantee a quality electric bike" />
      <Homecard3 name="E-Scooter" add="We will guarantee a quality electric scooter" />
      <Title />

    </>

  );

}


function App() {
  return (
  
    <Router basename="/">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/ebikes" element={<Ebikes />} />
        <Route path="/escooter" element={<Escooter />} />
      </Routes>
    </Router>

  );
}

export default App;