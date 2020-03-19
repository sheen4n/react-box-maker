import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import './BoxList.css';

const BoxList = ({ boxes, deleteBox }) => {
  return (
    <div className='BoxList'>
      {boxes.map(box => (
        <Box {...box} key={uuidv4()} deleteBox={() => deleteBox(box)} />
      ))}
    </div>
  );
};

export default BoxList;
