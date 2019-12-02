import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers, composeWithDevTools());

export default store;
