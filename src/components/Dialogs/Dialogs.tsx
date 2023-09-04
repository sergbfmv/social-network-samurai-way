import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)
    let dialogsElements = props.state.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
