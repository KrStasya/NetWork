import React, {ChangeEvent} from "react";
import classes from './Myposts.module.css'
import Post from "./Post/Post"
import {postsPropsType} from "./MypostsContainer";



const Myposts = (props: postsPropsType) => {


    let PostElement =
        props.profilePage.posts.map(p => <Post message={p.message} count={p.LikeCount}/>)

    let newPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         props.ChangePost(e.currentTarget.value)
        // props.dispatch({type:'UPDETE-NEW-POST-TEXT', newPost:e.currentTarget.value})
        //props.dispatch(newPostTextChangeAC(e.currentTarget.value))
    }

    const AddPost = () => {
        props.AddPost()
        // props.dispatch({type:'ADD-POST',newPostText:props.newPostText})
       //props.dispatch(addPostAC(props.newPostText))
    }

    return <div className={classes.content}>
        <div className={classes.MyPostsBlock}>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea
                value={props.profilePage.newPostText}
                onChange={newPostTextChange}/>
        </div>
        <div className={classes.AddMessage}>
            <button onClick={AddPost}>Add post</button>
        </div>
        {PostElement}

    </div>
}

export default Myposts;