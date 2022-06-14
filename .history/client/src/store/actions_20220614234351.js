const Actions = {
    SET_USERS_LIST : "SET_USERS_LIST",
    SET_USER_DATA : "SET_USER_DATA",
    SET_SHOW_CARD : "SET_SHOW_CARD"
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

export const setShowCard =  => {
    return {
        type : Actions.SET_USER_DATA,
        userData
    }
}

export default Actions;