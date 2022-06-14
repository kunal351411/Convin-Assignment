const Actions = {
    SET_USERS_LIST : "SET_USERS_LIST",
    SET_USER_DATA : "SET_USER_DATA",
    SET_SHOW_
};

export const setUsersList = (usersList) => {
    return {
        type : Actions.SET_USERS_LIST,
        usersList
    }
}

export const setUserData = (userData) => {
    return {
        type : Actions.SET_USER_DATA,
        userData
    }
}

export default Actions;