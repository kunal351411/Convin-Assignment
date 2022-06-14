import React, { useEffect } from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './styles/App.css';
import { getUsersList } from './api';

const App = ({usersList : list , setUsersListAction}) => {

  const usersList = ["KK","Vaishnavi"];

  useEffect(() => {
    
  },[]);

  console.log(list);

  return ( 
    <div>
      App
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