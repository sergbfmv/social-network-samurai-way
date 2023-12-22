import React from 'react';
import s from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/defaultAvatar.jpeg";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";

export const User = ({user, ...props}: UserPropsType) => {

    return (
        <div key={user.id} className={s.user}>
            <span className={s.avatarBlock}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userAvatar}
                             src={user.photos.small != null ? user.photos.small : defaultUserPhoto}
                             alt={'user photo'}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.unfollowTC(user.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.followTC(user.id)
                                  }}>
                            Follow
                        </button>}
                </div>
            </span>
            <span className={s.textBlock}>
                            <span>
                                <div className={s.userName}>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span className={s.locationBlock}>
                                <div className={s.userCountry}>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
        </div>
    )

};


//types
type UserPropsType = {
    user: UsersType
    followingInProgress: Number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}
