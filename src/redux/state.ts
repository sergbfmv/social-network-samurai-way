export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const store: StoreType = {
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
            ]
        }
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
        if (action.type === 'ADD-POST') {
            const newPost = {id: 6, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
