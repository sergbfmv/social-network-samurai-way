import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type headerType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: headerType) => {
    return (
        <header className={s.header}>
            <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="Company logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <p className={s.loginName}>{props.login}</p> :
                    <NavLink to={'/login'} className={s.loginLink}>Login</NavLink>}
            </div>
        </header>
    );
};
