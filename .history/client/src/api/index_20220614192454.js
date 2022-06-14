import axios from "axios";
import store from "../store/store";

export const getUsersList = async () => 
{
    let usersList = [];
    try {
        const {data : {data :page1}} = await axios.get("https://reqres.in/api/users");

        usersList = [...usersList,page1];
        
        const {data : {data : page2}} = await axios.get("https://reqres.in/api/users?page=2");

        user
    }
    catch (error) 
    {
        console.log(error);
    }
}

