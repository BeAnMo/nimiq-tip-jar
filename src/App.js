import React, { useState } from 'react';

import Button from './components/Button';
import Modal from './components/Modal';

import './App.css';


function App() {
  const [btnState, setBtnState] = useState('init');
  const [visible, setVisibility] = useState(false);

  return (
    <div className="tipjar" style={{ position: 'relative' }}>
      <Button status={'init'} onClick={() => setVisibility(true)} />

      <Modal visible={visible} hide={() => setVisibility(false)} />
    </div>
  );
}

export default App;
