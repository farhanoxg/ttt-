const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/pvc', (req, res) => {
    res.render('PvC');
})

app.get('/pvp', (req, res) => {
    res.render('PvP')
})

app.listen(port);
