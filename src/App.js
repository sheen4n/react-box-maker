import React, { useState } from 'react';
import './App.css';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

function App() {
  const [boxes, setBoxes] = useState([{ width: 10, height: 20, color: 'red' }]);

  const handleSubmit = boxFields => {
    setBoxes([...boxes, boxFields]);
  };

  const handleDeleteBox = box => {
    setBoxes([...boxes.filter(b => b !== box)]);
  };

  return (
    <div className='App'>
      <h1>Color Boxer Maker Thing</h1>
      <NewBoxForm onSubmit={handleSubmit} />
      <BoxList boxes={boxes} deleteBox={handleDeleteBox} />
    </div>
  );
}

export default App;
