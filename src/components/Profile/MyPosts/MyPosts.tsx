import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, updateNewPostText} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount}/>
        )
    })

    const newPostElement = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

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

