import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feelings() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState('');

    const handleChange = (value) => {
        setFeeling(value);
    }

    const addFeeling = (event) => {
        event.preventDefault();
        if (feeling === '') {
            alert('A value from 1 to 10 is required.')
        } else {
            dispatch({ type: 'ADD_FEELING', payload: feeling });
            setFeeling('');
            history.push('/understanding');
        }
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <br></br>
            <form onSubmit={addFeeling}>
                Feeling:
                <input
                    type='number'
                    min="1"
                    max="10"
                    value={feeling}
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

export default Feelings;