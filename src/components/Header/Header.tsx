import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type headerType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

export const Header = (props: headerType) => {
    return (
        <header className={s.header}>
            <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="Company logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <p className={s.loginName}>
                        <div>{props.login}
                            <button onClick={props.logoutTC} className={s.logoutBtn}>Log out</button>
                        </div>
                    </p>
                    : <NavLink to={'/login'} className={s.loginLink}>Login</NavLink>}
            </div>
        </header>
    );
};
