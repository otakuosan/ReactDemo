import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from 'root/redux/reducers/Index.js';
import thunk from 'redux-thunk';

const initState = {
    user :{
        isAuthed : false,
        username: null
    }
};

const appStore = createStore(
    appReducers,
    initState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default appStore;
