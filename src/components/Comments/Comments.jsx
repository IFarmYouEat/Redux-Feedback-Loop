import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [comment, setComment] = useState('');

    const handleChange = (value) => {
        setComment(value);
    };

    const addComment = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_COMMENT', payload: comment });
        setComment('');
        history.push('/submit');
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={addComment}>
                <p>Comments</p>
                <input
                    type='text'
                    value={comment}
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

export default Comments;