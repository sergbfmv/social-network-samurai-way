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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : s.pageSelector}
                                     onClick={(e) => this.onPageChanged(p)}>{p} </span>
                    })}
                </div>
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
