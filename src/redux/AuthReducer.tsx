import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatch} from "./reduxStore";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}

        default:
            return state
    }
}


//AC
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}


//TC
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


//Types
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export type AuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type ActionsTypes = SetUserDataACType

