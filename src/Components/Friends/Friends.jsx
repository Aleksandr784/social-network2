import React from 'react';
import s from './Friends.module.css'
import NavLink from "react-router-dom/es/NavLink";
import FriendItem from "./FriendItem/FriendItem";
import {Route} from "react-router";



const Friends = (props) => {

       let friendsElements = props.sidebar.friends.map(d => <FriendItem name={d.name} id={d.id} photo={d.photo} />);



    return (
        <div className={s.friendsF}>
            <h2>Friends</h2>

            <div className={s.friendsItems}>
                {friendsElements}

            </div>

        </div>
    )
}

export default Friends;
