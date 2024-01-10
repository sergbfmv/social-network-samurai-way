import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {AppDispatch, AppStateType} from "./reduxStore";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const DELETE_POST = 'samurai-network/profile/DELETE-POST';
const SET_USER_PROFILE = 'samurai-network/profile/SET-USER-PROFILE'
const SET_STATUS = 'samurai-network/profile/SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE-PHOTO-SUCCESS'
const ERROR_MESSAGE = 'social-network/profile/ERROR-MESSAGE'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 11},
    ],
    profile: undefined,
    status: '',
    errorMessage: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 6, message: action.post, likesCount: 0}
            // state.posts.unshift(newPost)
            // state.newPostText = ''

            return {...state, posts: [newPost, ...state.posts]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case ERROR_MESSAGE: {
            return {...state, errorMessage: action.errorMessage}
        }
        default:
            return state
    }
}


//AC
export const addPostActionCreator = (post: string) => {
    return {
        type: ADD_POST,
        post
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const deletePost = (id: number) => {
    return {
        type: DELETE_POST,
        id
    } as const
}

export const savePhotoSuccess = (photos: UsersPhotosStateType) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    } as const
}

export const errorProfileMessageAC = (errorMessage: string): errorProfileMessageACType => {
    return {type: ERROR_MESSAGE, errorMessage} as const
}


//TC
export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(res.data))
}

export const getUserStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)

    dispatch(setStatus(res.data))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)

        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    }

}

export const savePhoto = (profile: ProfileType) => async (dispatch: Dispatch) => {
    const res = await profileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType, setEditMode: (editMode: boolean) => void) => async (dispatch: AppDispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId
    const res = await profileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
        await dispatch(getUserProfileTC(userId))
        dispatch(errorProfileMessageAC(''))
        setEditMode(false)
    }
    if (res.data.resultCode === 1) {
        let errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(errorProfileMessageAC(errorMessage))
        setEditMode(true)
    }
}


//Types
export type SetStatusACType = ReturnType<typeof setStatus>
export type DeletePost = ReturnType<typeof deletePost>
export type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
type errorProfileMessageACType = {
    type: 'social-network/profile/ERROR-MESSAGE',
    errorMessage: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileType | undefined
    status: string
    errorMessage: string
}

export type UsersPhotosStateType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: profileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UsersPhotosStateType
}

export type profileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type ActionsTypes =
    AddPostActionType
    | SetUserProfileType
    | SetStatusACType
    | DeletePost
    | SavePhotoSuccess
    | errorProfileMessageACType