import { parseAsync } from "json2csv";
import moment, { Duration, Moment, MomentCreationData, MomentInput, MomentInputObject } from 'moment';
import { writeFile } from 'fs';
import 'moment/locale/pt-br';
import c from 'colors';

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
    let startTime: MomentInput | MomentCreationData = moment(now).format('YYYY-MM-DD HH:MM:SS')
    console.log(startTime);
    
    let test = startTime
    /* console.log(test); */
    

    let stops: any = [test];

    for(let i: any = 1; i < 3; i++) {
        let event: MomentInput | MomentCreationData = moment(stops[i]).format('YYYY-MM-DD HH:MM:SS')

        /* console.log(event); */
        
        let setTime: Duration = moment.duration(event).add({ hours: 1, minutes: 30 })
        /* console.log(setTime); */
        
        
        stops[i] = setTime
        console.log(stops);
        
    }

    /* let itinerario =  parseAsync() */
}

export default toCSV;