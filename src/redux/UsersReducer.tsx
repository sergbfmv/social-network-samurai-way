type FollowACType = {
    type: 'FOLLOW',
    userId: number
}

type UnfollowACType = {
    type: 'UNFOLLOW',
    userId: number
}

type SetUsersAC = ReturnType<typeof setUsersAC>

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: {
        small: string
        large: string
    }
}

export type UsersPageType = {
    users: UsersType[]
}

type ActionsTypes = FollowACType | UnfollowACType | SetUsersAC

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

const initialState = {
    users: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId: number): UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
