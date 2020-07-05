import React from 'react';
import s from './../Dialogs.module.css'
import classes from "../../Navbar/Navbar.module.css";


const Message = (props) => {
let whoseAnswerr= props.whoseAnswer;
console.log(whoseAnswerr);
    return (
        <div className={`${s.whoseAnswerr}`}>
            {props.mess}
        {whoseAnswerr};
        </div>

    )

}
/*s.message + ' ' + props.whoseAnswer*/
/*{`${classes.item} ${classes.active}`}*/
/*{s.message + ' ' + s.whoseAnswerr}*/
/*`${s.whoseAnswerr}`*/

export default Message;
