import React from 'react';
import "./Card.css"
import { connect } from 'react-redux';

const Card = ({userData}) => {
  return (
    <div className="card">
      {
        userData.fi
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