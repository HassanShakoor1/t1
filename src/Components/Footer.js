import React,{useState} from 'react';
import './../App.css';

import flogo from '../images/flogo.png';
import selogo from '../images/selogo.png';
import Rolling from './Rolling';

const Footer=()=> { 
  const [settings, setSettings] = useState(false);

  const handleSlideToRoll = () => {
    console.log("called");
    setSettings(!settings);
  }; 
  return (
    <>
    <div className="Footer">
      <div className="horizontal-line-green"></div>
      <div className="fContainer">
        <img className="logo-1" src={flogo} alt="flogo" onClick={handleSlideToRoll}/>
        <img className="logo-2" src={selogo} alt="selogo" onClick={handleSlideToRoll} />
      </div>
    </div>
{settings &&
    <Rolling settings={settings} handleSlideToRoll={handleSlideToRoll}  />
}
    </>
  );
}

export default Footer;