import React from 'react';
import './Message.css';

const Message = props => {
    return (
        <div className='message'>
            <div>
                <span className='name'>{props.author}</span>
                <span className='time'>({props.datetime})</span>
            </div>
            <div className='text'>
                {props.message}
            </div>
        </div>

    );
};

export default Message;