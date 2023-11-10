export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | undefined
}

export type SetUserProfileType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type usersPhotosStateType = {
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
    photos: usersPhotosStateType
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
    | UpdateNewPostTextActionType
    | SetUserProfileType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 11},
    ],
    newPostText: 'It-camasutra',
    profile: undefined
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 6, message: state.newPostText, likesCount: 0}
            // state.posts.unshift(newPost)
            // state.newPostText = ''

            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText
            return {...state, newPostText: (action as UpdateNewPostTextActionType).newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
