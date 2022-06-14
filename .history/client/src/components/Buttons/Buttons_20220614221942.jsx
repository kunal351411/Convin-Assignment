import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';

const Buttons = ({userList}) => {
  return (
    <div className='buttons-container'>
        {
            userList.fora
        }
    </div>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

export default connect(mapStoreStateToProps , )(Buttons);