import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import c from 'colors';

const http = require('http')
const app = express();
const server = http.createServer(app);
const mode = process.env.NODE_ENV || 'development';

const { Sequelize } = require('sequelize');

let pg_passwd = process.env.PG_PASSWD



const connectDB = async () => {
    const sequelize = new Sequelize('flight-controller', 'postgres', pg_passwd, {
        host: 'localhost',
        dialect: 'postgres'
    })

    try {
        await sequelize.authenticate();
        console.log(c.green('Connection has been established successfully.'));
      } catch (error) {
        console.log(c.red('Unable to connect to the database:'), error);
      }
};

connectDB()

import routers from './src/routes/routes'

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', routers);

app.get('/', (req: Request, res: Response) => {
    return res.send('Controle de voos Online!')
})



const listener = server.listen(process.env.PORT || 3000, () => {
    console.log(
        c.green(`[app.js] - Controle de voos operando na porta ${c.yellow(listener.address().port)} em modo ${mode}`)
        )
});