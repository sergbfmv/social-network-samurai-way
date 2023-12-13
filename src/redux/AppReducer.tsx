import {AppDispatch} from "./reduxStore";
import {getAuthUserDataTC} from "./AuthReducer";

export type AppDataType = {
    initialized: boolean
}

const initState: AppDataType = {
    initialized: false
}

export const appReducer = (state = initState, action: AuthActionsType): AppDataType => {
    switch (action.type) {
        case 'APP/SET-INITIALIZED':
            return {...state, initialized: action.payload.initialized}
        default:
            return state
    }
}

const setInitAC = (initialized: boolean) => {
    return {
        type: 'APP/SET-INITIALIZED' as const,
        payload: {initialized}
    }
}

export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(getAuthUserDataTC()).then(() => {
        dispatch(setInitAC(true))
    })
}

export type AuthActionsType =
    | ReturnType<typeof setInitAC>