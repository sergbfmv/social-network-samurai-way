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
    likesCount: string
}

export type ProfilePageType = {
    posts: PostsType[]
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
            {id: 1, message: 'Hi! How are you?', likesCount: '5'},
            {id: 2, message: 'It is my first post', likesCount: '11'},
        ],
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