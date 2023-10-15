import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UsersType} from "../../redux/UsersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)