import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from './users-reducer'
import AuthReducer  from "./auth-reducer";
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    navBar:navbarReducer,
    userPage:usersReducer,
    auth:AuthReducer
})

let store = createStore(reducers);
window.store = store;
 export default store;