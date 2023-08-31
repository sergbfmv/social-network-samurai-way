import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi! How are you?', likesCount: '5'},
        {id: 2, message: 'It is my first post', likesCount: '11'},
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
};

