import React from 'react';
// import s from './Tables.module.css';

const Tables = (props) => {

    // let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
    // let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} avatar={m.avatar} author={m.author}/>);

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }

    let onTextChange = (e) => {
        let text = e.target.value;
        props.updateText(text);
    }

    return (
        <div>
            <input onChange={onTextChange} value={props.tablesPage.text}></input>
        </div>
    );
};

export default Tables;