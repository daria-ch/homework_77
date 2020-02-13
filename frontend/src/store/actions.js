import axiosApi from '../axios-api';


export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';


export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const postMessageSuccess = () => ({type: POST_MESSAGE_SUCCESS});


export const fetchMessages = () => {
    return async dispatch => {
        const response = await axiosApi.get('/messages');
        dispatch(fetchMessagesSuccess(response.data));
    }
};

export const postMessage = message => {
    return async dispatch => {
        await axiosApi.post('/messages', message);
        dispatch(postMessageSuccess());
    }
};