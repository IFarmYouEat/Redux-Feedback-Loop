import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [understand, setUnderstand] = useState('');

    const handleChange = (value) => {
        setUnderstand(value);
    }

    const addUnderstand = (event) => {
        event.preventDefault();
        if (understand === '') {
            alert('A value from 1 to 10 is required');
        } else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understand });
            setUnderstand('');
            history.push('/support');
        }
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={addUnderstand}>
                <p>Understanding?</p>
                <input
                    type='number'
                    min="1"
                    max="10"
                    value={understand}
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;