import {rerenderEntireTree} from "../render";

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

export let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost = {id: 6, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}