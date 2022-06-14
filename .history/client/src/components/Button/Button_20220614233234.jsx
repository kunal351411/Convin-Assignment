import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';
import {connect} from "react-redux";
import { setUserData } from '../../store/actions';

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
const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        setUserDataAction : (userData) => dispatch(setUserData(usersList)) ,
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(Button);