import {ActionsTypes, DialogsPageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const DialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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