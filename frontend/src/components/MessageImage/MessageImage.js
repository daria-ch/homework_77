import React from 'react';
import axiosApi from "../../axios-api";

const styles = {
    float: 'left',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '3px',
    marginBottom: '5px'
};

const MessageImage = props => {

    let image = null;

    if (props.image) {
        image = axiosApi + '/uploads/' + props.image;
        return <img alt="Thumb" src={image} style={styles} className="img-thumbnail"/>;
    }

    if (!props.image) {
        return null;
    }

};

export default MessageImage;