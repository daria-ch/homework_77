import React from 'react';
import './Message.css';
import MessageImage from "../MessageImage/MessageImage";

const Message = props => {
    return (
        <div className='message'>
            <div>
                <span className='name'>{props.author}</span>
                <span className='time'>({props.datetime})</span>
            </div>
            <div className='text'>
                <MessageImage image={props.img}/>
                {props.message}
            </div>
        </div>

    );
};

export default Message;