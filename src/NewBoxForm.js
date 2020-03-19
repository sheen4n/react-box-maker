import React, { useState } from 'react';

const NewBoxForm = ({ onSubmit }) => {
  const [boxFields, setBoxFields] = useState({
    height: '',
    width: '',
    color: ''
  });

  const handleInputChange = e => {
    setBoxFields({ ...boxFields, [e.target.name]: e.target.value });
  };

  const handleClick = e => {
    e.preventDefault();
    if (boxFields.height > 0 && boxFields.width > 0) {
      onSubmit(boxFields);
      setBoxFields({
        height: '',
        width: '',
        color: ''
      });
    }
  };

  return (
    <form>
      <div className=''>
        <label htmlFor='height'>Height</label>
        <input
          type='text'
          name='height'
          value={boxFields.height}
          id='height'
          onChange={handleInputChange}
        />
      </div>
      <div className=''>
        <label htmlFor='width'>Width</label>
        <input
          type='text'
          name='width'
          value={boxFields.width}
          id='width'
          onChange={handleInputChange}
        />
      </div>
      <div className=''>
        <label htmlFor='color'>Color</label>
        <input
          type='text'
          name='color'
          value={boxFields.color}
          id='color'
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleClick}>Add New Box!</button>
    </form>
  );
};

export default NewBoxForm;
