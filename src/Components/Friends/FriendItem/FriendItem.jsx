import React from 'react';
import s from './../Friends.module.css'
import NavLink from "react-router-dom/es/NavLink";

const FriendItem = (props) => {
    let path = "/friends/" + props.id;
    return (
        <div className={s.friendsCSS + ' ' + s.active}>
            <div className={s.photo}>
            <img
                src={props.photo}
                alt="no photo person"></img>
        </div>
            <NavLink to={path}>{props.name} </NavLink>

        </div>

)
}


export default FriendItem;
