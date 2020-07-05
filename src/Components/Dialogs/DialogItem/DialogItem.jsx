import React from 'react';
import s from './../Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.photo}>
            <img
                src={props.photo}
                alt="no photo person"></img>
        </div>
            <NavLink to={path}>{props.name} </NavLink>

        </div>

)
}


export default DialogItem;
