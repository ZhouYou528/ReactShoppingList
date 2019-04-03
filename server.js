const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port =  process.env.PORT || 5000;

app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstname: 'John', lastName: 'Doe' },
        { id: 2, firstname: 'Brad', lastName: 'Traversy' },
        { id: 3, firstname: 'Mary', lastName: 'Swanson' }
    ];

    res.json(customers);
});

app.listen(port, () => console.log(`Server running on port ${port}`));