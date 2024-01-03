import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {AppDispatch} from "./reduxStore";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'
const GET_CAPTCHA_URL = 'samurai-network/auth/GET-CAPTCHA-URL'
const ERROR_MESSAGE = 'samurai-network/auth/ERROR-MESSAGE'

const initialState: AuthType = {
    userId: 1,
    email: '',
    login: '',
    isAuth: false,
    errorMessage: '',
    captchaUrl: ''
}

export const AuthReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case ERROR_MESSAGE: {
            return {...state, errorMessage: action.errorMessage}
        }
        case GET_CAPTCHA_URL:
            return {...state, captchaUrl: action.captchaUrl}
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: GET_CAPTCHA_URL, captchaUrl} as const
}


//TC
export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: AppDispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)

    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserDataTC())
        dispatch(errorAuthMessageAC(''))
        dispatch(getCaptchaUrlSuccess(''))
    } else {
        if (res.data.resultCode === 10) {
            await dispatch(getCaptchaUrl())
        }
        let errorMesage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(errorAuthMessageAC(errorMesage))
    }
}

const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
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
type GetCaptchaUrl = ReturnType<typeof getCaptchaUrlSuccess>

export type AuthType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
    errorMessage: string
    captchaUrl: string
}

type ActionsTypes = SetUserDataACType | ErrorMessageACType | GetCaptchaUrl

