import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';
import {connect} from "react-redux";

const Button = ({num}) => {

  const handleClick =() => {
    getUserData(num).then((data) => {
      console.log(data);
    })
  }

  return (
    <div className="button">
        <button onClick={handleClick}  >{num}</button>
    </div>
  )
}

export default Button