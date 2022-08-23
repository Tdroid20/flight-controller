import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import routers from './src/routes/routes';
import { config } from 'dotenv';
import c from 'colors';
config()


const http = require('http')
const app = express();
const server = http.createServer(app);
const mode = process.env.NODE_ENV || 'development';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const { Sequelize } = require('sequelize');
let pg_passwd = process.env.PG_PASSWD

const connectDB = async () => {
    const sequelize = new Sequelize('flight-controller', 'postgres', pg_passwd, {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    });

    try {
        await sequelize.authenticate();
        console.log(c.green('[DataBase] - Connection has been established successfully.'));
      } catch (error) {
        console.log(c.red('[app.ts] - Unable to connect to the database:'), error);
      }
};
connectDB()

app.use('/api', routers);

app.get('/', (req: Request, res: Response) => {
    return res.send('Controle de voos Online!');
})



try {
    const listener = server.listen(process.env.PORT, () => {
        console.log(
            c.green(`[app.js] - Controle de voos operando na porta ${c.yellow(listener.address().port)} em modo ${mode}`)
            )
    });
} catch (error) {
    const listener = server.listen(3001, () => {
        console.log(
            c.green(`[app.js] - Controle de voos operando na porta ${c.yellow(listener.address().port)} em modo ${mode}`)
            )
    });
}