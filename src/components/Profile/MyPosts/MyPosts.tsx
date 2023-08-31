import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: '5'},
        {id: 2, message: 'It is my first post', likesCount: '11'},
    ]

    let postsElements = posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount}/>
        )
    })

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>New post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

