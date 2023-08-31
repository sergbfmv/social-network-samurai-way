import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    let path = 'dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}
export const Dialogs: React.FC = () => {

    let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Igor'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Where are you?'},
        {id: 3, message: 'WTF?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Man!'},
    ]

    let messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)
    let dialogsElements = dialogs.map((d) => {
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
