const Actions = {
    SET_USERS_LIST : "SET_USERS_LIST"
};

export const setUsersList = (usersList) => {
    return {
        type : Actions.SET_USERS_LIST,
        list
    }
}

export default Actions;