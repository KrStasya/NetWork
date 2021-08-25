import React from "react";
import { postType } from '../../../redux/state';
import classes from './Myposts.module.css'
import Post from "./Post/Post"

type postsType ={
    posts: Array<postType>
}

const Myposts = (props:postsType) => {

    let PostElement =
        props.posts.map(p=> <Post message={p.message} count={p.LikeCount}/>)

    return <div className={classes.content}>
        <div className={classes.MyPostsBlock}>
            <h3>My posts</h3>
        </div>
        <div >
            <textarea></textarea>
        </div>
        <div className={classes.AddPost}>
            <button >Add post</button>
        </div>
        {PostElement}

    </div>
}

export default Myposts;