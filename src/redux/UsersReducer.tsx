import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET-USERS'
const SET_CURRENT_PAGE = 'samurai-network/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_LOADING = 'samurai-network/users/TOGGLE-IS-LOADING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'samurai-network/users/TOGGLE-IS-FOLLOWING-IN-PROGRESS'

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


//AC
export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}

export const toggleIsLoading = (isLoading: boolean) => {
    return {
        type: TOGGLE_IS_LOADING,
        isLoading
    } as const
}

export const toggleFollowingProgress = (isFollowing: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFollowing,
        userId
    } as const
}


//TC
export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true))

    const data = await usersAPI.getUsers(page, pageSize)

    dispatch(setCurrentPage(page));
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}

export const unfollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    const data = await usersAPI.unfollow(userId)

    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    const data = await usersAPI.follow(userId)

    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


//types
type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>

type SetUsersAC = ReturnType<typeof setUsers>

type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
type ToggleIsLoadingAC = ReturnType<typeof toggleIsLoading>
type ToggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Number[]
}

type ActionsTypes =
    FollowACType
    | UnfollowACType
    | SetUsersAC
    | SetCurrentPageAC
    | SetTotalUsersCountAC
    | ToggleIsLoadingAC
    | ToggleFollowingProgress

