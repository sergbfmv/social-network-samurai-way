import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    PostsType, updateNewPostTextActionCreator,
} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const newPostElement = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            // const action: ActionsTypes = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    let postsElements = props.posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount}/>
        )
    })

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>New post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

