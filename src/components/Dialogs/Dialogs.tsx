import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";

type DialogsPropsType = {
    store: StoreType
    // state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogsPage
    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.sendMessageForm}>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}
                              placeholder='Enter message' className={s.messageArea}></textarea>
                    <button className={s.sendMessageBtn} onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};
