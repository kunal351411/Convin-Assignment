import axios from "axios";

export const getUsersList = async () => 
{
    let usersList = [];
    try {
        for(let i=0;i<2;i++)
        {
            const {data : {data}} = await axios.get(`https://reqres.in/api/users?page=${i+1}`);

            usersList = [...usersList,...data];
        }

        return usersList;
    }
    catch (error) 
    {
        console.log(error);
    }
}

export const getUserData = async ()

