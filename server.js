const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port =  process.env.PORT || 5000;

const items = require('./routes/api/items');

app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));
    
//use routes
app.use('/api/items', items);

app.listen(port, () => console.log(`Server running on port ${port}`));