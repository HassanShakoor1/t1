
import './../App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPencilAlt,faCheck } from '@fortawesome/free-solid-svg-icons';

import imge from './../images/imge.png';
import Footer from './../Components/Footer';
import React from 'react';
import Slide from '@mui/material/Slide';

import CloseIcon from '@mui/icons-material/Close';

import Reprfile from './Reprfile';

function Form() {
 
  
  const [setting, setSetting] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [buttons, setButtons] = useState([]);

  
  const handleSlide = () => {

    setSetting(!setting)

  }

  const handleClick = () => {
    if (showInputs) {
      setButtons([]);
    } else {
      setButtons([...buttons, `Button ${buttons.length + 1}`]);
    }
    setShowInputs(!showInputs);
  };
 
  const [isEditing, setIsEditing] = useState(false);

  const handleClick2 = () => {
    setIsEditing(!isEditing);
  };
 
  return (
    <>
      <div className="Form">
        <div className="Container">
          <img className='logo' src={imge} alt="imge" />
          <div className="Container2">
            <div className="form-data">
              <div className="img">
                <h1 className='icon-1'>
                  <FontAwesomeIcon icon={faCog} onClick={handleSlide} />

                </h1>
                <div onClick={handleClick}>
                  <h1 className='icon-2'>
                  <FontAwesomeIcon
      icon={isEditing ? faCheck : faPencilAlt}
      onClick={handleClick2}
    />
  
                  </h1>
                </div>
              </div>
              <h1 className='main-h'>Muhammad Abdullah</h1>
              <h3 className='ceo'>Ceo - Avicenna</h3>

              <div className="horizontal-line"></div>
              <div className="bio">
                <p>
                  This is my bio, This is my bio,
                  This is my bio, This is my bio, this is bio
                </p>
              </div>

              <div className="btns">
                <button className='save-btn'>Save Contact</button>
                <button className='simple-btns'> </button>
                <button className='simple-btns'> </button>
                <button className='simple-btns'> </button>
                <button className='simple-btns'> </button>
                <button className='simple-btns'> </button>
                {showInputs && (
                  <>
                    <button className='fancy-btns'>+ Add More</button>
                    <h2 className='ed-theme'>Edit Theme</h2>

                    <div className="divs">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

        </div>
        <Footer />
      </div>



      <Slide

      in={setting}
      direction="up"
      timeout={{ appear: 500, enter: 500, exit: 500 }}
      >
      <div className="slide_main_div relative">
        <div className="main-nav">
          <div className='nav-wrap' >
          
         
               <h2 className='setting'>Settings</h2>
          <CloseIcon className='cross-btn'  style={{fontSize:"35px",color:"black"}} onClick={handleSlide}/>
         
         
          </div>
            </div>
         <Reprfile/>
       

            </div>
         
          </Slide>


    </>
  );
}

export default Form;




<Reprfile/>



