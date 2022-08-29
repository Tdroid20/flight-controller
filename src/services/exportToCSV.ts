import { parseAsync } from "json2csv";
import { writeFile } from 'fs';
import c from 'colors'

const getTime = (data: any) => {
    let now: any = new Date();
    let date: any = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 26, 0, 0)
let endIn: any  = (date) - now;
if (endIn < 0) {
    endIn += 86400000;
}
setTimeout(function(){
    console.log(`Enviand arquivo CSV`.yellow);
    writeFile('itinerário.csv', data, () => {
        return console.log(`CSV Enviado com sucesso!`.green); 
    })

}, endIn);
}

export const toCSV = () => {
    let fields: any = ['horario de partida', 'primeira parada', 'segunda parada', 'horario de chegada'];
    let options: any = {fields}

    let now: any = new Date();
    let startTime: any = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0).toISOString();

    console.log(startTime);
    
    let test = Date.parse(startTime)
    console.log(test);
    

    let stops: any = [test];

    for(let i: any = 1; i < 3; i++) {
        let event = new Date(stops[i])

        console.log(event);
        console.log(new Date(event.getHours() + 1, event.getMinutes() + 30).toDateString());
        
        let setTime: any = new Date(event.setHours((event.getHours() + 1), (event.getMinutes() + 30)))
        
        stops[i] = setTime.toISOString()
        console.log(stops);
        
    }

    /* let itinerario =  parseAsync() */
}

export default toCSV;