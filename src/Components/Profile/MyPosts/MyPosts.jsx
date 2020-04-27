import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    
  return <div>My posts
     <div>New Post</div>
     <div className={classes.posts}></div>
       <div className={classes.item}>Post 1</div>
       <div className={classes.item}>Post 2</div>
     
   </div>
    

}

export default MyPosts;