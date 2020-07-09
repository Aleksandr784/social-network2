import React from 'react';
import s from './Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.name} id={d.id} photo={d.photo} />);

    let messagesElement = state.messages.map(m => <Message mess={m.mess} key={m.id} whoseAnswer={m.whoseAnswer} />);

    /* let newMessageElement = React.createRef();
     let addNewMessage = () => {
        props.dispatch(sendMessageCreator());
     }
     let onMessageChenge = () => {
 let mesText = newMessageElement.current.value;
 let action = updateNewMessageBodyCreator(mesText);
 props.dispatch(action);
     }*/
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
                {/* <div className={s.textareaCN}>
                    <h5>New message</h5>
                    <textarea onChange={onMessageChenge} ref={newMessageElement}
                    value={props.state.newMessageText} />
                </div>
                <div className={s.messageBtn}>
                    <button onClick={addNewMessage}>Add message</button>
                </div>*/}
            </div>


        </div>
    )
}

export default Dialogs;
