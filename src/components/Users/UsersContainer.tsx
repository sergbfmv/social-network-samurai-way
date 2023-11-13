import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsLoading,
    unfollow,
    UsersType
} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isLoading: boolean
    toggleIsLoading: (isLoading: boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsLoading(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    totalUsersCount={this.props.totalUsersCount}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsLoading: (isLoading: boolean) => {
//             dispatch(toggleIsLoadingAC(isLoading))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading
})(UsersContainer)