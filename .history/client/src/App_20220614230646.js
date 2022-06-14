import React, { useEffect,useState } from 'react';
import {connect} from "react-redux";
import { setUsersList } from './store/actions';
import './styles/App.css';
import { getUsersList } from './api';
import Card from './components/Card/Card';
import Buttons from "./components/Buttons/Buttons";
import { CircularProgress } from '@mui/material';

const App = ({usersList, setUsersListAction}) => {
  
const [isLoading , setIsLoading] = useState(false);
const [length,setLength] = useState(0);
const [list,setList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUsersList().then((data) => {
      //console.log(data);

      setUsersListAction(data);
      setList(data);
      setIsLoading(false)
      });
  },[]);

  useEffect(() => {
    setLength(usersList.length);
  },[usersList]);

console.log(length);
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
      <Buttons length={length}/>
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