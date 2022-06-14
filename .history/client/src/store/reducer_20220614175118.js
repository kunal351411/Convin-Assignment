import Actions from "./actions";

const initState = {
    usersList : []
};

const reducer = (state = initState , action) => {
    switch (action.type) {
        case Actions.SET_USERS_LIST :
            return {
                ...state ,
                usersList : action.usersList
            };
        }
                