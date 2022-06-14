import React from 'react';
import "./Card.css"
import { connect } from 'react-redux';

const Card = ({userData}) => {

  const name = userData["first_name"] + " " + userData["last_name"];

  const email = userData["email"];

  return (
    <div className="card">
      <div classname
      {
        `Name :- ${name}\n
         Email:- ${email}`
      }
    </div>
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