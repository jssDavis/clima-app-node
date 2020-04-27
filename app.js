const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return ` La temparatura en ${ direccion  } es de ${ temp }°C `;
    } catch (error) {
        return ` No se pudo determinar el clima de ${ direccion } `
    }



}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// lugar.getLugarLatLng((argv.direccion))
//     .then(

//     );


// // clima.getClima(19.250000, -98.900002).then(console.log).catch(console.log);
// clima.getClima(19.250000, -98.900002);