import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from './users-reducer'
import AuthReducer  from "./auth-reducer";
import thunk from 'redux-thunk'
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    navBar:navbarReducer,
    userPage:usersReducer,
    auth:AuthReducer
})

let store = createStore(reducers , applyMiddleware(thunk));
window.store = store;
 export default store;