import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={classes.content}>
    <div>
   <img src='https://d33wubrfki0l68.cloudfront.net/75dae7aa2c4990235428b3f9b98bcc74cb808e83/04e17/images/overlay-somethings-not-right.jpg' alt="image nature, Hallo World"></img>
   </div>
   <div>Ava+Discriptions</div>
  
  <MyPosts />
    
</div>
}

export default Profile;