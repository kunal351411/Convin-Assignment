import React, { useEffect } from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './App.css';

const App = ({usersList : list , }) => {

  const usersList = ["KK","Vaishnavi"];

  useEffect(() => {
    setUsersListAction(usersList);
  })

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