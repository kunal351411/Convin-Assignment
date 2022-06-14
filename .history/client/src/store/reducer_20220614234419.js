import Actions from "./actions";

const initState = {
    usersList : [],
    userData : {},
    show:f
};

const reducer = (state = initState , action) => {
    switch (action.type) {
        case Actions.SET_USERS_LIST :
            return {
                ...state ,
                usersList : action.usersList
            };

        case Actions.SET_USER_DATA :
            return {
                ...state ,
                userData : action.userData
            };    

        default :
            return state;    

        }
}

export default reducer;