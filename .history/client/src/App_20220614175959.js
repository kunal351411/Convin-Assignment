import React from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './App.css';

const App = () => {
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
        setUsersList : (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)) ,
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(App);