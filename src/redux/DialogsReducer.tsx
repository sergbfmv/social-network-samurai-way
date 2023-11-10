type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

type ActionsTypes =
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ''
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // state.newMessageBody = action.body
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            const newMessage = {id: 6, message: state.newMessageBody}
            // state.messages.push(newMessage)
            // state.newMessageBody = ''
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
        default:
            return state
    }
}

export const sendMessageActionCreator = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyActionCreator = (text: string): UpdateNewMessageBodyActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
