import React, { useEffect,useState } from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './styles/App.css';
import { getUsersList } from './api';
import Card from './components/Card/Card';
import Buttons from "./components/Buttons/Buttons";
import {CircularProgress} from "@material-ui/core";

const App = ({usersList, setUsersListAction}) => {
  
const [isLoading , setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUsersList().then((data) => {
      //console.log(data);

      setUsersListAction(data);
      setIsLoading(false)
      });
  },[]);

  

  return ( 
    <>
    { isLoading ? (
      <div className="loading">
                        <CircularProgress size="5rem"/>    
                    </div>
    ) : 
    (<div className="container">
      <div className='card-container'>
          <Card/>
      </div>
      <Buttons isLoading={isLoading}/>
    </div>)
}
    </>
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