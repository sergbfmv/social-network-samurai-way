import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/DialogsReducer";
import {useFormik} from "formik";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id}/>
        )
    })

    const onSendMessageClick = (message: string) => {
        props.onSendMessageClick(message)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm sendMessage={onSendMessageClick}/>
            </div>
        </div>
    );
};


//Types
export type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: (message: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}


export const AddMessageForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.message) {
                errors.message = 'Сannot be empty'
            }

            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            // alert(JSON.stringify(values));
            props.sendMessage(values.message)
            formik.resetForm()
        },
    })

    return (
        <>
            <form className={s.sendMessageForm} onSubmit={formik.handleSubmit}>
                    <textarea
                        placeholder='Enter message'
                        className={formik.errors.message ? s.error + ' ' + s.messageArea : s.messageArea}
                        {...formik.getFieldProps('message')}
                        name="message"
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        // onChange={(e) => {
                        //     props.onChange(e);
                        //     formik.handleChange(e);
                        // }}
                    ></textarea>
                <button className={s.sendMessageBtn}
                        disabled={!formik.isValid || formik.values.message.length < 1}>Send
                </button>
            </form>
            <span style={{color: 'red'}}>{formik.errors.message}</span>
        </>
    )
}


//Types
type FormikErrorType = {
    message?: string
}

type PropsType = {
    sendMessage: (message: string) => void
}
