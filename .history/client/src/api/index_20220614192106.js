import axios from "axios";
import store from "../store/s"

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

