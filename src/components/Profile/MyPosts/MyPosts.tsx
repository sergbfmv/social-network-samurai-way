import React, {memo} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {useFormik} from "formik";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (post: string) => void
}

export const MyPosts = memo((props: MyPostsPropsType) => {

    const addPost = (post: string) => {
        props.addPost(post)
    }


    let postsElements = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addPost={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})


export const AddPostForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.post) {
                errors.post = 'Сannot be empty'
            }

            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            // alert(JSON.stringify(values));
            props.addPost(values.post)
            formik.resetForm()
        },
    })

    return (
        <>
            <form className={s.sendMessageForm} onSubmit={formik.handleSubmit}>
                    <textarea
                        placeholder='Enter message'
                        className={formik.errors.post ? s.error + ' ' + s.messageArea : s.messageArea}
                        {...formik.getFieldProps('post')}
                        name="post"
                        onBlur={formik.handleBlur}
                        value={formik.values.post}
                    ></textarea>
                <button className={s.sendMessageBtn}
                        disabled={!formik.isValid || formik.values.post.length < 1}>Send
                </button>
            </form>
            <span style={{color: 'red'}}>{formik.errors.post}</span>
        </>
    )
}


//Types
type FormikErrorType = {
    post?: string
}

type PropsType = {
    addPost: (post: string) => void
}

