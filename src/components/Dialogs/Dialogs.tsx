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

    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Igor'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Where are you?'},
        {id: 3, message: 'WTF?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Man!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
            </div>
        </div>
    );
};
