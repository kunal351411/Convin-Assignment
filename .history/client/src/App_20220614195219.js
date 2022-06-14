import React, { useEffect } from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './styles/App.css';
import { getUsersList } from './api';

const App = ({usersList, setUsersListAction}) => {
  

  useEffect(() => {
    getUsersList().then((data) => {
      //console.log(data);

      setUsersListAction(data);
      });
  },[]);

  

  return ( 
    <div className="container">
      <div className='card-container'>

      </div>
      <div className='button'
    </div>
   );
}
 
const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        setUsersListAction : (usersList) => dispatch(setUsersList(usersList)) ,
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(App);