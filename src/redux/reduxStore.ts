import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {StoreType} from "./store";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebarPage: SideBarReducer
})

export const store: StoreType = createStore(reducers)