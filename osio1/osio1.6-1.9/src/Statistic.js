import React from 'react';


export const Statistic = ({stat, text, text2}) => {
  return (text2 == null)
  ? <tr><td>{text}</td><td>{stat}</td></tr>
  : <tr><td>{text}</td><td>{stat}</td><td>{text2}</td></tr>

}
