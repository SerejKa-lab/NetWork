import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({ 
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
 })

let store = createStore( reducers, composeWithDevTools() );

export default store;

//делаем store объектом window, чтобы можно было к нему обратиться в любой точке программы
window.store = store;