import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
