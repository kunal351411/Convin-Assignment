import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';

const Buttons = ({}) => {
  return (
    <div className='buttons-container'>
        <Button/>
    </div>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

export default connect(mapStoreStateToProps , )(Buttons);