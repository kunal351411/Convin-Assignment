import Actions from "./actions";

const initState = {
    usersList : [],
    userData : {}
};

const reducer = (state = initState , action) => {
    switch (action.type) {
        case Actions.SET_USERS_LIST :
            return {
                ...state ,
                usersList : action.usersList
            };

        case Actions.SET_USER :
            return {
                ...state ,
                usersList : action.usersList
            };    

        default :
            return state;    

        }
}

export default reducer;