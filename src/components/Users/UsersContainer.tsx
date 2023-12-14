import {connect} from "react-redux";
import {
    follow,
    followTC,
    requestUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    unfollowTC,
    UsersType
} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)

        // this.props.toggleIsLoading(true)
        // this.props.setCurrentPage(pageNumber)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsLoading(false)
        //         this.props.setUsers(data.items)
        //     })
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersTC: requestUsersTC,
    followTC,
    unfollowTC
}))(UsersContainer)


//types
type UsersPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isLoading: boolean
    toggleFollowingProgress: (isFollowing: boolean, userId: number) => void
    followingInProgress: Number[]
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}