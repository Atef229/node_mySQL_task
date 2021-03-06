const express = require('express');
const bodyParser = require('body-parser');

// DB Config
const db = require('./config/db');

const products = require('./routes/products');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});

// Use Routes
app.use('/api/products', products);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))