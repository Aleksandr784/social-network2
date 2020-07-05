import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return <div>

        <div className={classes.mainImg}>
            <img
                src='https://www.fluentin3months.com/wp-content/uploads/2018/07/how-to-learn-english-fast.jpg'
                alt="image nature, Hallo World"></img>
        </div>
        <div className={classes.discriptionBlock}>Ava+Discriptions</div>



    </div>
}

export default ProfileInfo;