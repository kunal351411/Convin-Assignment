import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';

const Button = ({num}) => {

  const handleClick =() => {
    getUserData(num).then((data) => {
      console.log();
    })
  }

  return (
    <div className="button">
        <button onClick={handleClick}  >{num}</button>
    </div>
  )
}

export default Button