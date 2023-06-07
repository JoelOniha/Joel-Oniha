const express = require('express');

const app= express();
const port = 3000;


app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/posts', (req, res) => {
    res.send({
        name: 'Joel',
        surname: 'Oniha',
        age: 18,
        title: 'Software Engineering',
        body: 'Here is the body of the post',
    });
});

app.listen(port, () => {
    console.log('Listening on port 3000!');
});