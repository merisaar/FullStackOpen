import React from 'react';
import ReactDOM from 'react-dom';

export const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
      </button>
)
