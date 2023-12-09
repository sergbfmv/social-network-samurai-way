import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunk, {ThunkDispatch} from "redux-thunk";


// export type ActionsTypes =
//     AddPostActionType
//     | UpdateNewPostTextActionType
//     | UpdateNewMessageBodyActionType
//     | SendMessageActionType

// type StoreType = {
//     _state: AppStateType
//     getState: () => AppStateType
//     _callSubscriber: (state: AppStateType) => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsTypes) => void
// }

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebarPage: SideBarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const store = createStore(rootReducer, applyMiddleware(thunk))

