import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    
  
  return (
  
     
       <div className={classes.item}>
       <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11cea91b-0913-46a9-abb5-25dba6209645/d30ezjd-9af10624-4477-4db1-a6e4-627a897a9bd7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExY2VhOTFiLTA5MTMtNDZhOS1hYmI1LTI1ZGJhNjIwOTY0NVwvZDMwZXpqZC05YWYxMDYyNC00NDc3LTRkYjEtYTZlNC02MjdhODk3YTliZDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wp1pS0GayZLK-fAaX4wjyYaRQABJ0Rrvu6HdsyIi7iI'></img>
     
         {props.message}
        
         <div><span>like {props.likesCount}</span></div>
         
         <div><span>dislike</span></div>
         </div>
         
         
       
  ) 

}

export default Post;