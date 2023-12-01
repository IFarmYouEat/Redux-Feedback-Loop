import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Home.css';

function Home() {
    let [feedback, setFeedback] = useState([]);
    const history = useHistory();

    useEffect(() => {
        console.log('In useEffect');
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedback(response.data);
            console.log(feedback);
        }).catch((error) => {
            console.log('Home could not retrieve feedback', error)
        });
    };

    const startForm = () => {
        history.push('/feelings');
    }

    return (
        <div>
        <p>You are home.</p>
        <button onClick={startForm}>Submit New Feedback</button>
        
        <table>
            <thead>
                <tr>
                    <td>Date:</td>
                    <td>Feeling</td>
                    <td>Understanding</td>
                    <td>Support</td>
                    <td>Comments</td>
                </tr>
            </thead>
            <tbody>
                {feedback.map((entry) => 
                <tr key={entry.id}>
                    <td>{entry.date.slice(0,10)}</td>
                    <td>{entry.feeling}</td>
                    <td>{entry.understanding}</td>
                    <td>{entry.support}</td>
                    <td>{entry.comments}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default Home;