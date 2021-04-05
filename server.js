// Dependencies

const express = require('express');
const path = require('path');
const routes = require('./routes')

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "db")));


app.use(routes)
    // Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));