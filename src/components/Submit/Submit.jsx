import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Submit(){
    const feelingFeedback = useSelector(store => store.feelingFeedback);
    const understandingFeedback = useSelector(store => store.understandingFeedback);
    const supportFeedback = useSelector(store => store.supportFeedback);
    const commentFeedback = useSelector(store => store.commentFeedback);

    return(
        <div>
            <p>You are in Submit.</p>
            <p>Feeling: {feelingFeedback}</p>
            <p>Understanding: {understandingFeedback}</p>
            <p>Support: {supportFeedback}</p>
            <p>Comments: {commentFeedback}</p>
        </div>
    )
}

export default Submit;