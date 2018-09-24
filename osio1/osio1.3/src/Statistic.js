import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


export const Statistic = ({stat, text, text2}) => {
  return (
    <div>{text} {stat} {text2}</div>
  )
}
