import axios from "axios";
import { setUsersList } from "../store/actions";
import store from "../store/store";

export const getUsersList = async () => 
{
    let usersList = [];
    try {
        for(let i=0;i<2;i++)
        {
            const {data : {data}} = await axios.get(`https://reqres.in/api/users");

            usersList = [...usersList,...data];
        
        }
        
        const {data : {data : page2}} = await axios.get("https://reqres.in/api/users?page=2");

        usersList = [...usersList,...page2];

        store.dispatch(setUsersList(usersList));

        return usersList;
    }
    catch (error) 
    {
        console.log(error);
    }
}

