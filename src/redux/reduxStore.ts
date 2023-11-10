import {combineReducers, createStore} from "redux";
import {AddPostActionType, ProfileReducer, UpdateNewPostTextActionType} from "./ProfileReducer";
import {DialogsReducer, SendMessageActionType, UpdateNewMessageBodyActionType} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";


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
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)