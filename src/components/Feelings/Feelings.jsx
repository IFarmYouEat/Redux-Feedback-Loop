import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Feelings () {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState(5);

    const handleChange = (value) => {
        setFeeling(value);
    }

    const addFeeling = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_FEELING', payload: feeling});
        setFeeling(5);
        history.push('/understanding');
    }

    return(
        <div>
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