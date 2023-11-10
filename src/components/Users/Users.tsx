import React from 'react';
import s from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/defaultAvatar.jpeg";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    users: UsersType[]
    onPageChanged: (p: number) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.pageSelector}
                                 onClick={(e) => props.onPageChanged(p)}>{p} </span>
                })}
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.user}>
                        <span className={s.avatarBlock}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.userAvatar}
                                         src={u.photos.small != null ? u.photos.small : defaultUserPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
                            </div>
                        </span>
                        <span className={s.textBlock}>
                            <span>
                                <div className={s.userName}>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span className={s.locationBlock}>
                                <div className={s.userCountry}>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};
