import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';


const Buttons = ({length}) => {
  return (
    <div className='buttons-container'>
        {
            for(let i=1;i<=length;i++)
            {

            }
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