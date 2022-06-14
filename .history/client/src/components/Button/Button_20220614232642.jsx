import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';

const Button = ({num}) => {

  const handleClick =() => {
    console.log(num);
  }

  return (
    <div className="button">
        <button onClick={handleClick}  >{num}</button>
    </div>
  )
}

export default Button