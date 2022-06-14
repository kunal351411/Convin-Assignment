import axios from "axios";

export const getUsersList = async () => 
{
    const users
    try {
        const {data : {data}} = await axios.get("https://reqres.in/api/users");

        return data
    }
    catch (error) 
    {
        console.log(error);
    }
}