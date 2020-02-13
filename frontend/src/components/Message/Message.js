import React from 'react';
import {Media} from "reactstrap";

const Message = props => {
    return (
        <Media body>
            <Media heading>
               {props.author}
            </Media>
            {props.message}
        </Media>
    );
};

export default Message;