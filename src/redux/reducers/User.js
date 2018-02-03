import { USER_ACTIONS } from 'root/redux/actions/UserActions.js';

var initState = {
    //isAuthed: false,    // 是否已登入
    //username: 'aaa'
}

function userReducer (state = initState, action) {
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            return Object.assign({}, state, action.user, {isAuthed: true});

        case USER_ACTIONS.LOGOUT:
            return initState;

        default:
            return state;
    }
}

export default userReducer;
