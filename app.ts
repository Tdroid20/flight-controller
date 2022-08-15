import bodyParser from 'body-parser';
import express from 'express';
import c from 'colors';

const http = require('http')
const app = express();
const server = http.createServer(app);

import routers from './src/routes/routes'

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', routers);

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Controle de voos Online!')
})



const listener = server.listen(process.env.PORT || 3000, () => {
    console.log(
        c.green(`[app.js] - Controle de voos operando na porta ${c.yellow(listener.address().port)}`)
        )
});