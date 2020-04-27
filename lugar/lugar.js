const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'x-rapidapi-key': '54423f892fmshe5c30fc1688cfefp1db317jsnee639a9dda16' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch((err) => {
    //         console.log('Error !!!!!!!!!!!!');
    //     });


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}