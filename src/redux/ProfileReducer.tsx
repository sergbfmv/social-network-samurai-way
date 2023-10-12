import {ActionsTypes} from "./reduxStore";


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 11},
    ],
    newPostText: 'It-camasutra'
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 6, message: state.newPostText, likesCount: 0}
            // state.posts.unshift(newPost)
            // state.newPostText = ''

            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText
            return {...state, newPostText: action.newText}
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