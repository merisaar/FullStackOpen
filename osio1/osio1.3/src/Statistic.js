import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


export const Statistic = ({stat, text, text2}) => {
  return (
    <tr><td>{text}</td> <td>{stat}</td> <td>{text2}</td></tr>
  )
}
