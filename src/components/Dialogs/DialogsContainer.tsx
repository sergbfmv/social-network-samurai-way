import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)