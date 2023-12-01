import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'


function Feelings () {
    const dispatch = useDispatch();
    let [feeling, setFeeling] = useState('');
    const storedFeeling = useSelector(store => store.feelingFeedback)

    const handleChange = (value) => {
        setFeeling(value);
    }

    const addFeeling = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_FEELING', payload: feeling});
        setFeeling('');
    }

    return(
        <div>
            <form onSubmit={addFeeling}>
                Feeling:
                <input 
                    type='text' 
                    value={feeling} 
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
                <button type='submit'>Submit</button>
            </form>
            {storedFeeling}
        </div>
    )
}

export default Feelings;