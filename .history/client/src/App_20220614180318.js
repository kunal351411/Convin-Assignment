import React from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './App.css';

const App = ({usersList : list}) => {

  const usersList = ["KK","Vaishnavi"];

  setUsersList(usersList);

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
        setUsersList : (usersList) => dispatch(setUsersList(usersList)) ,
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(App);