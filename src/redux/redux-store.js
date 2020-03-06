import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    navBar:navbarReducer
})

let store = createStore(reducers);
console.log(createStore(reducers))
 export default store;