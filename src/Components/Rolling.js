import React from 'react';
import Slide from '@mui/material/Slide';

import mini from './../images/mini.gif';

import CloseIcon from '@mui/icons-material/Close';

function Rolling({handleSlideToRoll,settings}) {
 

  return (
    <>
     <div className="roll">

    
        <Slide in={settings} direction="up" timeout={{ appear: 500, enter: 500, exit: 500 }}>
          <div className="slide_main_div relative">
            <div className="main-nav">
              <div className="nav-wrap">
                <h2 className="setting">Rolling Square Club</h2>
                <CloseIcon className="cross-btn" style={{ fontSize: '35px', color: 'black' }} onClick={handleSlideToRoll} />
              </div>
            </div>

            <h2 style={{ fontSize: '20px', margin: '10px' }}>Your Offers</h2>
            <div className="url-Container">
              <div className="http">
                <br />
                <h3 className='incharge'>incharge Mini</h3>
                <img className='mini' src={mini} alt="mini" />
                <div style={{ width: '95%' }} className="horizontal-line"></div>
              </div>
              <p className='sale'>50% Coupon Code</p>
              <button  className='fancy-btns n-btn'>jkkxsdud98jkjkjlj</button>
              <button className='save-btn'>Save Contact</button>
              <br /><br />
            </div>
          </div>
        </Slide>
      </div>
    
    </>
  );
}

export default Rolling;