const express = require('express');
const app = express();
const port =3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
})


app.get('/tweet', (req, res) => {
    res.send('<h1>Tweeter Page</h1>');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});