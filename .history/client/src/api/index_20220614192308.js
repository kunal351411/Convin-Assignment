import axios from "axios";
import store from "../store/store";

export const getUsersList = async () => 
{
    let usersList = [];
    try {
        const {data : {data}} = await axios.get("https://reqres.in/api/users");

        usersList = [...usersList,data];
        
    }
    catch (error) 
    {
        console.log(error);
    }
}

