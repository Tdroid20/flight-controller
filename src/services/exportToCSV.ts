import { parseAsync, Options } from "json2csv";
import moment, { Duration, Moment, MomentCreationData, MomentInput, MomentInputObject } from 'moment';
import { writeFile } from 'fs';
import 'moment/locale/pt-br';
import c from 'colors';
import router from "../routes/routes";

const getTime = (data: any) => {
    console.log('getTime');
    
    let now: any = new Date();
    /* let date: any = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 26, 0, 0) */
    let date: any = new Date()
    let endIn: any  = (date) - now;
    if (endIn < 0) {
        console.log('if');
        endIn += 86400000;
    }
    setTimeout(function(){
        console.log(`Enviando arquivo CSV`.yellow);
        writeFile('itinerário.csv', data, () => {
            return console.log(`CSV Enviado com sucesso!`.green);
        })
        
    }, endIn);
}


export const toCSV = (startIn: Number) => {
    console.log('csv');
    
    var itinerarios = [
        { partidaLocal: 'GRU (SP)',
          partidaHorario: '08:00:00',
          parada1Local: 'CWB (PR)',
          parada1Chegada: '09:00:00',
          parada1Partida: '10:30:00',
          parada2Local: 'FLN (SC)',
          parada2Chegada: '11:30:00',
          parada2Partida: '13:00:00',
          destinoFinalLocal: 'POA (RS)',
          destinoFinalHorario: '14:00:00'
        },
        { partidaLocal: 'GRU (SP)',
          partidaHorario: '08:00:00',
          parada1Local: 'GIG (RJ)',
          parada1Chegada: '09:00:00',
          parada1Partida: '10:30:00',
          parada2Local: 'VIX (ES)',
          parada2Chegada: '11:30:00',
          parada2Partida: '13:00:00',
          destinoFinalLocal: 'SSA (BA)',
          destinoFinalHorario: '14:00:00'
        }	   
        
        ];
      
     var _gerarCsv = function(){
          
         var csv = 'partidaLocal,partidaHorario,parada1Local,parada1Chegada,parada1Partida,parada2Local,parada2Chegada,parada2Partida,destinoFinalLocal,destinoFinalHorario\n';
      
         itinerarios.forEach(function(row) {
                 csv += row.partidaLocal;
                 csv += ','+ row.partidaHorario;
                 csv += ','+ row.parada1Local;
                 csv += ','+ row.parada1Chegada;
                 csv += ','+ row.parada1Partida;
                 csv += ','+ row.parada2Local;
                 csv += ','+ row.parada2Chegada;
                 csv += ','+ row.parada2Partida;
                 csv += ','+ row.destinoFinalLocal;
                 csv += ','+ row.destinoFinalHorario;
                 csv += '\n';
         });
         return csv
         
        };
        let now: any = new Date();
        let date: any = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0)
        let endIn: any  = (date) - now;
        if (endIn < 0) {
            console.log('if');
            endIn += 86400000;
        }
        setTimeout(async function(){
            console.log(`Enviando arquivo CSV`.yellow);
            writeFile('itinerário.csv', await _gerarCsv(), () => {
                return console.log(`CSV Enviado com sucesso!`.green);
            })
            
        }, endIn);
}

export default toCSV;