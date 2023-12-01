import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Submit(){
    const feelingFeedback = useSelector(store => store.feelingFeedback);
    const understandingFeedback = useSelector(store => store.understandingFeedback);
    const supportFeedback = useSelector(store => store.supportFeedback);
    const commentFeedback = useSelector(store => store.commentFeedback);
    const history = useHistory();

    const sendToServer = () => {
    
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feelings: feelingFeedback, 
                understanding: understandingFeedback, 
                support: supportFeedback, 
                comments: commentFeedback}
        }).then((response) => {
            history.push('/');
        }).catch((error) => {
            console.log('Could not post to database', error)
        });

    }

    return(
        <div>
            <p>You are in Submit.</p>
            <p>Feeling: {feelingFeedback}</p>
            <p>Understanding: {understandingFeedback}</p>
            <p>Support: {supportFeedback}</p>
            <p>Comments: {commentFeedback}</p>
            <button onClick={sendToServer}>Submit</button>
        </div>
    )
}

export default Submit;