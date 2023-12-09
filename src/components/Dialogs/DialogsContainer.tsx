import {sendMessageActionCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: (message: string) => {
            dispatch(sendMessageActionCreator(message))
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)
