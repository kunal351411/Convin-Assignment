import React from 'react';
import "./Card.css"
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';

const Card = ({userData}) => {

  const name = userData["first_name"] + " " + userData["last_name"];

  const email = userData["email"];

  return (
    <>
    {
    isLoading ? (
      <div className="loading">
          <CircularProgress size="5rem"/>    
      </div> ): 
    (<div className="card">
      <div className="left">
          <img src={userData["avatar"]}/>
      </div>
      {
        <div className='right'>
        <h5>{`Name :- ${name}`}</h5>
         <p>{`Email:- ${email}`}</p>
      </div>)
      }
    </div>
    </>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

// const mapActionsToProps = (dispatch) => {
//     return {
//         setUsersListAction : (usersList) => dispatch(setUsersList(usersList)) ,
//     }
// };

export default connect(mapStoreStateToProps)(Card);