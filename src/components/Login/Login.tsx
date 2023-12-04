import React from 'react';
import LoginForm from './LoginForm';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

export const Login = () => {
    const isLoggedIn = useSelector<AppStateType>(state => state.auth.isAuth)

    // if (isLoggedIn) {
    //     return <Redirect to={'/profile'}/>
    // }

    return (
        <>
            <h1>Login</h1>
            <LoginForm/>
        </>
    );
};


