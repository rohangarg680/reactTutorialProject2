import React from 'react';
import '../style.css';

export default function App({ name }) {
  return (
    <div className="child">
      <h1 style={{ color: '#007bff' }}>{name.name}</h1>
      <p style={{ fontWeight: 'bolder' }}>
        Connect with friends and the world around you on Facebook.
      </p>
    </div>
  );
}
