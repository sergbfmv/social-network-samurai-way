import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatch} from "./reduxStore";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'
const ERROR_MESSAGE = 'samurai-network/auth/ERROR-MESSAGE'

const initialState: AuthType = {
    userId: 1,
    email: '',
    login: '',
    isAuth: false,
    errorMessage: ''
}

export const AuthReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case ERROR_MESSAGE: {
            return {...state, errorMessage: action.errorMessage}
        }
        default:
            return state
    }
}


//AC
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
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

export const errorAuthMessageAC = (errorMessage: string) => {
    return {type: ERROR_MESSAGE, errorMessage} as const
}

//TC
export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    const res = await authAPI.login(email, password, rememberMe)

    if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
        dispatch(errorAuthMessageAC(''))
    } else {
        if (res.data.resultCode === 10) {
            dispatch(errorAuthMessageAC('Bad captcha, go to main site =('))
        }
        let errorMesage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(errorAuthMessageAC(errorMesage))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}


//Types
type SetUserDataACType = ReturnType<typeof setAuthUserData>
type ErrorMessageACType = ReturnType<typeof errorAuthMessageAC>

export type AuthType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
    errorMessage: string
}

type ActionsTypes = SetUserDataACType | ErrorMessageACType

