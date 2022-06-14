import React from 'react';
import "./Button.css";
import { getUserData } from '../../api';
import {connect} from "react-redux";
import { setUserData , setShowCard } from '../../store/actions';

const Button = ({num , setUserDataAction , userData , setShowCardAction}) => {

  const handleClick =() => {
    getUserData(num).then((data) => {
      setUserDataAction(data);
      setShowCardAction(true);
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
        setShowCardAction : (show) => dispatch(setShowCard(show)),
        setCardLoaderAction : (isLoading) => dispatch(setShowCard(isLoading))
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(Button);