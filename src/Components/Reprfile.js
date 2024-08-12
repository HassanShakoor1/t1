import React from 'react';
import './../App.css';
import imge from './../images/imge.png';

import QRCode from 'qrcode.react';
import bag from './../images/bag.png';
import aircard from './../images/aircard.png';

function Reprfile(handleSlideToRoll,settings) {

  const qrValue = 'https://www.example.com';
  return (
    <>
     
      <div className="Profile-Container">

        <div className="profile-h">
          <h3>Profile</h3>
        </div>

        <div className="profile">
          <img className='img-n' src={imge} alt="imge" />

          <div className="field-2">
            <input className='input-field' type="text" placeholder='First name' />
            <input className='input-field' type="text" placeholder='Last name' />
          </div>

          <div className="field3">
            <input className='input-field3' type="text" placeholder='Job Position' />
            <input className='input-field3' type="text" placeholder='Company' />
          </div>


          <h4 className='bi-h' style={{ marginLeft: "2rem",fontWeight:'0' }}>Bio</h4>

          <textarea className='txt-area' name="Company" id="Company" cols="30" rows="6" placeholder='Company'></textarea>

        </div>
<br /><br />
        <div className="chng-pass">
            Change your Password
          </div>

        <div className="url">
          <h2> Your Short URL</h2>
        </div>
        {/* real url  */}
        <div className="url-Container">
          <div className="http"><br />
            <p>https://www.nomdius.com/muhammad</p>
            <div className="horizontal-line"></div>
          </div><br />
          <QRCode style={{ width: '150px', height: '150px' }} className='code' value={qrValue} />
          <div className="li-green">
            <p className='li-h'>Use the QR code to share your Sherr.it profile.</p>


          </div>

        </div>

        <h2 >Redirect</h2>

{/* ios style buttons */}
        <div className="url-Container">
          <div className="p-b">
            <p >Redirect to an External URL</p>

            <div className="toggle-switch">

      <input type="checkbox" id="toggle" className="toggle-checkbox" />
      <label htmlFor="toggle" className="toggle-label"></label>

    </div>

          </div>
          <br />
          <input className='place-link' type="text" placeholder='place your Links Here' />
          <br />

          <div className="p-b">
            <p>Redirect to Contact Card</p>

            <div className="toggle-switch">

      <input type="checkbox" id="toggle2" className="toggle-checkbox" />
      <label htmlFor="toggle2" className="toggle-label"></label>

    </div>

          </div>


        </div>



{/* Item card */}
<h3>Your Items</h3>
        <div className="url-Container">
          <div className="http"><br />
            <p style={{fontSize:'16px',fontWeight:'600'}}>Muhammad's TAU 2</p>
            <div className="horizontal-line"></div>
          </div><br />
          <img className='bag-img' src={bag} alt="bag" /><br />
<br /><br />
          <p style={{textAlign:"center",fontSize:'16px',color:'#999999',fontWeight:'600'}}>Linked to your account 64 days ago</p>
<br />
<button className='save-btn'>Save Contact</button><br /><br />


        </div>
        <br />
       
        
{/* Aircard card */}
        <div className="url-Container">
          <div className="http"><br />
            <p style={{fontSize:'16px',fontWeight:'600'}}>Muhammad's AirCard</p>
            <div className="horizontal-line"></div>
          </div><br />
          <img className='bag-img' src={aircard} alt="aircard" /><br />

          <p style={{textAlign:"center",fontSize:'16px',color:'#999999',fontWeight:'600'}}>Linked to your account 64 days ago</p>
<br /><br />
<button className='save-btn'>Save Contact</button><br /><br />


        </div>

<br />

  <div className="url-Container">
          <div className="p-b">
          <button className='login-btn'>LOGOUT</button><br /><br />

          <button className='done-btn'>DONE</button><br /><br />

    </div>
          </div>

          <h4 style={{textAlign:'center',fontSize:'19.3px',color:'#506160'}}>Delete  Account</h4>
          <br />
          <br />



      </div>
      <br />
      <br />


     
    </>
  );
}

export default Reprfile;
