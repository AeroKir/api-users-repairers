const express = require('express');
const app = express();
const port = 16016;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.get('/checking', (req, res) => {
    res.json({"message": "Welcome To API Users repairers!"})
});

app.listen(port, () => {
    console.log(`The app listening at http://localhost:${port}`);
});
