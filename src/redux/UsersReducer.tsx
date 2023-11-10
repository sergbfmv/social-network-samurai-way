type FollowACType = {
    type: 'FOLLOW',
    userId: number
}

type UnfollowACType = {
    type: 'UNFOLLOW',
    userId: number
}

type SetUsersAC = ReturnType<typeof setUsers>

type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
type ToggleIsLoadingAC = ReturnType<typeof toggleIsLoading>

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
    currentPage: number,
    isLoading: boolean
}

type ActionsTypes =
    FollowACType
    | UnfollowACType
    | SetUsersAC
    | SetCurrentPageAC
    | SetTotalUsersCountAC
    | ToggleIsLoadingAC

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
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
        default:
            return state
    }
}

export const follow = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId: number): UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId
    }
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
