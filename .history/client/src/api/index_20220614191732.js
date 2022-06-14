import axios from "axios";

export const getUsersList = async () => 
{
    try {
        const {data : } = await axios.get("https://reqres.in/api/users");

        return data
    }
    catch (error) 
    {
        console.log(error);
    }
}