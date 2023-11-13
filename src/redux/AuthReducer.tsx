type SetUserDataACType = ReturnType<typeof setAuthUserData>

export type AuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type ActionsTypes = SetUserDataACType

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
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    } as const
}

