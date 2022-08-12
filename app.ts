import express from 'express';
import c from 'colors';

const http = require('http')
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Controle de voos Online!')
})

const listener = server.listen(process.env.PORT || 3000, () => {
    console.log(
        c.green(`[app.js] - Controle de voos operando na porta ${c.yellow(listener.address().port)}`)
        )
});