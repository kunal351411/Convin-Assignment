import Actions from "./actions";

const initState = {
    usersList : [],
    userData : {},
    show:false,
    isLoading : false
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
            
        case Actions.SET_SHOW_CARD :
            return {
                ...state ,
                show : action.show
            }; 

        case Actions.SET_CARD_LOADER :
            return {
                ...state ,
                isLoading : action.isLoading
            };     

        default :
            return state;    

        }
}

export default reducer;