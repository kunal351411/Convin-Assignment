import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';


const Buttons = ({length , list , usersList}) => {
  console.log(list);
  return (
    <div className='buttons-container'>
        {   
            length>0 ? (
              list.map((user,index) => {
                return (
                  <Button/>
                )
              })
            ) : null
        }
    </div>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

export default connect(mapStoreStateToProps)(Buttons);