const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    const query = 'SELECT * FROM feedback';
    pool.query(query)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error retrieving data from server', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const feedback = req.body;
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`
    const queryValues = [
        feedback.feelings,
        feedback.understanding,
        feedback.support,
        feedback.comments,
    ];
    pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201); })
    .catch((error) => {
        console.log('Error posting to database', error);
        res.sendStatus(500);
    });
});

module.exports = router;