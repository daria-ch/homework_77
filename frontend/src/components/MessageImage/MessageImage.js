import React from 'react';

const styles = {
    width: '100px',
    height: '120px',
    marginRight: '10px'
};

const MessageImage = props => {

    let image = null;

    if (props.image) {
        image = 'http://localhost:8000/uploads/' + props.image;
        return <img alt="Thumb" src={image} style={styles} className="img-thumbnail"/>;
    }

    if (!props.image) {
        return null;
    }

};

export default MessageImage;