import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/UsersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";


export const Users = (props: UsersPropsType) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <Pagination
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                pageSize={props.pageSize}
                totalItemsCount={props.totalUsersCount}
                portionSize={10}
            />
            {props.users.map(u => {
                return (
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        followTC={props.followTC}
                        unfollowTC={props.unfollowTC}
                    />
                )
            })}
        </div>
    );
};


//types
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    users: UsersType[]
    onPageChanged: (p: number) => void
    toggleFollowingProgress: (isFollowing: boolean, userId: number) => void
    followingInProgress: Number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}
