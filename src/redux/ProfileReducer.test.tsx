import {addPostActionCreator, deletePost, ProfileReducer} from "./ProfileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 11},
    ],
    profile: undefined,
    status: '',
    errorMessage: ''
}

test('post should be added', () => {
    let action = addPostActionCreator('new post text')


    let newState = ProfileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('post text should be correct', () => {
    let action = addPostActionCreator('new post text')


    let newState = ProfileReducer(state, action)

    expect(newState.posts[0].message).toBe('new post text')
})

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)


    let newState = ProfileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})