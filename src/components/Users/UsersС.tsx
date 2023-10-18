import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import s from './Users.module.css'
import axios from "axios";
import defaultUserPhoto from '../../assets/images/defaultAvatar.jpeg'

type UsersPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div className={s.users}>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id} className={s.user}>
                        <span className={s.avatarBlock}>
                            <div>
                                <img className={s.userAvatar}
                                     src={u.photos.small != null ? u.photos.small : defaultUserPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}
