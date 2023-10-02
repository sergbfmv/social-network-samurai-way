import {ActionsTypes, AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const ProfileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 6, message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
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