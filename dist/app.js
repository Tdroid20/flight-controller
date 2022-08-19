"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const dotenv_1 = require("dotenv");
const colors_1 = __importDefault(require("colors"));
const http = require('http');
const app = (0, express_1.default)();
const server = http.createServer(app);
const mode = process.env.NODE_ENV || 'development';
(0, dotenv_1.config)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const { Sequelize } = require('sequelize');
let pg_passwd = process.env.PG_PASSWD;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new Sequelize('flight-controller', 'postgres', pg_passwd, {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    });
    try {
        yield sequelize.authenticate();
        console.log(colors_1.default.green('[DataBase] - Connection has been established successfully.'));
    }
    catch (error) {
        console.log(colors_1.default.red('[app.ts] - Unable to connect to the database:'), error);
    }
});
connectDB();
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    return res.send('Controle de voos Online!');
});
const listener = server.listen(/* process.env.PORT || */ 3001, () => {
    console.log(colors_1.default.green(`[app.js] - Controle de voos operando na porta ${colors_1.default.yellow(listener.address().port)} em modo ${mode}`));
});
