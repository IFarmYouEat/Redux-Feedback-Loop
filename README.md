# Redux Feedback Loop
A multi-part form which collects user feedback and stores in an SQL database.


## Description

A multi-part form which collects the users feedback, verifying a value is entered for Feeling, Understanding, and Support 
before asking for comments and having the user review the form before submitting. 

The values are stored in a Redux Store until the user presses the submit button on the review page. At which time they 
will be saved in the prime_feedback database.

## Prerequisits
    - node
    - npm

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

First copy the information in data.sql and create a database titled "prime_feedback"

Then run an install in the code editor you opened the project in to bring in the nessassary dependancys. 

    npm install

To Start Server:

    npm run server

To Start Client:

    npm run client

You will need to do all three before the app will start.
The npm run client should open up a page on your browser which will display the app.  

## Usage

The database will start with a sample entry and this should be dispayed on your startup page. 

    1. Press "Submit New Feedback" to start a new entry.
    2. Enter a value for Feeling.
        This has a min value of 0 and a max of 10.
        A value must be entered to proceed.
    3. Enter a value for Understanding.
        This has a min value of 0 and a max of 10.
        A value must be entered to proceed.
    4. Enter a value for Support.
        This has a min value of 0 and a max of 10.
        A value must be entered to proceed.
    5. Enter any comments you wish to submit
    6. Review your information and press submit when ready.

## Built With
    VS Code
    Postico
    Postgres
    Github

    
