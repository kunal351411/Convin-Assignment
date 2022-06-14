import axios from "axios";
import store from "../store/store";

export const getUsersList = async () => 
{
    let usersList = [];
    try {
        const {data : {data :page1}} = await axios.get("https://reqres.in/api/users");

        usersList = [...usersList,data];
        
        const {data : {data}} = await axios.get("https://reqres.in/api/users");
    }
    catch (error) 
    {
        console.log(error);
    }
}

