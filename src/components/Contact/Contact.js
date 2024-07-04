/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const templateParams = {
        name,
        email,
        contactNo,
        message,
      };

    // Send formData to a method or an API
    console.log(templateParams);
    // Example: sendFormData(formData);
    emailjs.send('servicsse_oj2drs7h', 'template_e47jsu3ts', templateParams, 'sazsP7rl-r_FXRlyTL')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Request sent successfully!');
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send request.');
    });
  };

  return (
    <div className="background">
      <div className="containers">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>Me</span>
              </div>
              <div className="app-contact">CONTACT INFO : +91 9179783646</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CONTACT NO"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button" onClick={handleSend}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          gehlotakul09@gmail.com
          <svg className="dribbble" viewBox="0 0 200 200">
            <g stroke="#ffffff" fill="none">
              <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
              <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
              <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
              <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
            </g>
          </svg>
          Akul
        </div>
      </div>
    </div>
  );
}

export default Contact;
