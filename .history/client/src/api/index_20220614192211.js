import axios from "axios";
import store from "../store/store";

export const getUsersList = async () => 
{
    const usersList = [];
    try {
        const {data : {data}} = await axios.get("https://reqres.in/api/users");

        c
    }
    catch (error) 
    {
        console.log(error);
    }
}

