const express = require('express');
const bodyParser = require('body-parser');
const CONFIG = require('./config/config');
const dbConnect = require('./db/mongodb');

const app = express();

//Connect to MongoDB Database
dbConnect();

//Add Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello shopeasy")
})

app.listen(CONFIG.PORT, () => {
    console.log(`listening on http://localhost:${CONFIG.PORT}`);
})