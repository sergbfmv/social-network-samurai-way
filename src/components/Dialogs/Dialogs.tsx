import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/DialogsReducer";

type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage
    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onNewMessageChange(text)
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
