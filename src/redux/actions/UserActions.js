const USER_ACTIONS = {
    LOGIN: 'USER_LOGIN',
    LOGOUT: 'USER_LOGOUT'
}

function login(user) {
    return {
        type: USER_ACTIONS.LOGIN,
        user: user
    };
}

function logout() {
    return {
        type: USER_ACTIONS.LOGOUT
    };
}


export { USER_ACTIONS, login, logout }

