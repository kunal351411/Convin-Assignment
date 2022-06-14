import React from 'react';
import "./Button.css";

const Button = ({num}) => {
  return (
    <div className="button">
        <button onClick={handle}  >{num}</button>
    </div>
  )
}

export default Button