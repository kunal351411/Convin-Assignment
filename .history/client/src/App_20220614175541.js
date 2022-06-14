import React from 'react';
import {connect} from "react-redux";
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
        setConnectOnlyWithAudio : (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)) ,
        setIdentityAction : (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction : (roomId) => dispatch(setRoomId(roomId))
    }
};

export default connect(mapStoreStateToProps , mapActionsToProps)(JoinRoomContent);