import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPosTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChenge = () => {
        let text = newPostElement.current.value;
        /*let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};*/
        let action = updateNewPosTextActionCreator(text);
        props.dispatch(action);

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChenge} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Post remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />*/}
                {/*<Post/>
            <Post/>
            <Post/>
            <Post/>*/}
            </div>

        </div>
    )

}

export default MyPosts;