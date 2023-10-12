import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: {}
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 5},
                {id: 2, message: 'It is my first post', likesCount: 11},
            ],
            newPostText: 'It-camasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Dasha'},
                {id: 3, name: 'Vanya'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Igor'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Where are you?'},
                {id: 3, message: 'WTF?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Man!'},
            ],
            newMessageBody: ''
        },
        sidebarPage: {}
    },
    _callSubscriber(state: RootStateType) {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebarPage = SideBarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)

    }
}
