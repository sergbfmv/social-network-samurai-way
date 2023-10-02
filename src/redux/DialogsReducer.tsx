import {ActionsTypes, DialogsPageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage = {id: 6, message: state.newMessageBody}
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
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