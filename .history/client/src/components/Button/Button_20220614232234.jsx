import React from 'react';
import "./Button.css";

const Button = ({num}) => {

  const handleClick =() => {
    console.log(n);
  }

  return (
    <div className="button">
        <button onClick={handleClick}  >{num}</button>
    </div>
  )
}

export default Button