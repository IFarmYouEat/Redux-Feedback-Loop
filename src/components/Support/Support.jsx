import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();
    let [support, setSupport] = useState(5);

    const handleChange = (value) => {
        setSupport(value);
    }

    const addSupport = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_SUPPORT', payload: support});
        setSupport(5);
        history.push('/comments');
    }

    return(
        <div>
            <h1>How well are you being supported?</h1>
            <form onSubmit={addSupport}>
                <p>Support?</p>
                <input
                    type='number'
                    min="1"
                    max="10"
                    value={support}
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

export default Support;