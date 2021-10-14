const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: false }))
app.use(express.json());
require('dotenv').config();

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => { 
    console.log(`Listening http://localhost:3000`);
    console.log(process.env.PASS);
})