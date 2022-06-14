import axios from "axios";
import {connect} from "react-redux";
import { setUsersList } from "../store/actions";

export const getUsersList = async () => 
{
    
    try {
        const {data : {data}} = await axios.get("https://reqres.in/api/users");

        return data
    }
    catch (error) 
    {
        console.log(error);
    }
}

