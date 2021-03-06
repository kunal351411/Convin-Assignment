import React from 'react';
import Button from '../Button/Button';
import "./Buttons.css";
import { connect } from 'react-redux';


const Buttons = ({usersList}) => {
  return (
    <div className='buttons-container'>
        { 
          usersList?.map((user,index) => {
                return (
                  <Button key={index} num={index+1}  />
                )
              })
            
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