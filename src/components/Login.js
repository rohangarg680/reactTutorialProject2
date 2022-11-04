import React from 'react';
import '../style.css';

export default function App() {
  return (
    <div className="childPro">
      <div>
        <form className="form">
          <input placeholder="Email or Phone number" />
          <input placeholder="Password" />
          <input className="button" type="button" value="Log In" />
          <p
            style={{
              color: '#007BFF',
              fontWeight: '10px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            Forgot Password?
          </p>
          <div className="line"></div>
          {/* <hr/> */}
          <input className="button2" type="button" value="Create New Account" />
        </form>
      </div>
      <div style={{ textAlign: 'center', fontSize: '15px', marginTop: '50px' }}>
        <b>
          <a
            href="#"
            style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '5px',
            }}
          >
            Create a Page
          </a>
        </b>
        for a celebrity, band or business.
      </div>
    </div>
  );
}
