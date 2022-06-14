import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';


const Buttons = ({length , list}) => {
  return (
    <div className='buttons-container'>
        {   
            length
        }
    </div>
  )
}

// const mapStoreStateToProps = (state) => {
//     return {
//         ...state
//     }
// };

export default Buttons;