"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCSV = void 0;
const fs_1 = require("fs");
const getTime = (data) => {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 26, 0, 0);
    let endIn = (date) - now;
    if (endIn < 0) {
        endIn += 86400000;
    }
    setTimeout(function () {
        console.log(`Enviand arquivo CSV`.yellow);
        (0, fs_1.writeFile)('itinerário.csv', data, () => {
            return console.log(`CSV Enviado com sucesso!`.green);
        });
    }, endIn);
};
const toCSV = () => {
    let fields = ['horario de partida', 'primeira parada', 'segunda parada', 'horario de chegada'];
    let options = { fields };
    let now = new Date();
    let startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0).toISOString();
    console.log(startTime);
    let test = Date.parse(startTime);
    console.log(test);
    let stops = [test];
    for (let i = 1; i < 3; i++) {
        let event = new Date(stops[i]);
        console.log(event);
        console.log(new Date(event.getHours() + 1, event.getMinutes() + 30).toDateString());
        let setTime = new Date(event.setHours((event.getHours() + 1), (event.getMinutes() + 30)));
        stops[i] = setTime.toISOString();
        console.log(stops);
    }
    /* let itinerario =  parseAsync() */
};
exports.toCSV = toCSV;
exports.default = exports.toCSV;
