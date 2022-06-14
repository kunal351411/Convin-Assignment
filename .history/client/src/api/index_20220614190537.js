import axios from "axios";

export const getUsersList = async () => 
{
    const {data} = axios.get("https://reqres.in/api/users")
}