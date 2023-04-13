import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [ShowColor, setShowColor] = useState('');
  const [Showcolor1, setShowcolor1] = useState('');
  console.log(ShowColor);
  console.log(Showcolor1);
  useEffect(() => {
    setShowColor('blue');
  }, [!ShowColor]);

  useEffect(() => {
    setShowcolor1('red');
  });

  return (
    <div>
      <button onClick={() => setShowColor('red')} >click</button>
      {ShowColor}
    </div>
  );
}
