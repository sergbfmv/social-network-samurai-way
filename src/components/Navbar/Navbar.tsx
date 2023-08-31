import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></div>
        </nav>
    );
};

