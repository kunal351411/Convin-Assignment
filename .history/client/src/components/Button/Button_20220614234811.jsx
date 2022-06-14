import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';
import {connect} from "react-redux";
import { setUserData , setShowCard } from '../../store/actions';

const Button = ({num , setUserDataAction , userData , setShowCardAction}) => {

  const handleClick =() => {
    getUserData(num).then((data) => {
      setUserDataAction(data);
      setShowCard
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
        setUserDataAction : (userData) => dispatch(setUserData(userData)) ,
        setShowCardAction : (show) => dispatch(setShowCard(show))
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(Button);