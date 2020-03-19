import React from 'react';
import './Box.css';

const Box = ({ height, width, color, deleteBox }) => {
  const onDeleteClick = e => {
    e.preventDefault();
    deleteBox();
  };

  return (
    <div
      className='Box'
      style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor: color
      }}
    >
      <button onClick={onDeleteClick}>X</button>
    </div>
  );
};

export default Box;
