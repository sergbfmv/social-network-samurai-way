type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type ActionsTypes =
    | SendMessageActionType

const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState: DialogsPageType = {
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

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: 6, message: action.message}
            // state.messages.push(newMessage)
            // state.newMessageBody = ''
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const sendMessageActionCreator = (message: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        message
    }
}
