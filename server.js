const express = require('express');
const { portMain } = require('./constants/config');
const repairers = require('./routes/repairers.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.get('/checking', (req, res) => {
    res.json({"message": "Welcome To API Users repairers!"})
});

app.use('/repairers', repairers);

app.listen(portMain, () => {
    console.log(`The app listening at http://localhost:${portMain}`);
});
