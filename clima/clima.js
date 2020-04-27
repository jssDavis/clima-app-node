const axios = require('axios');





const getClima = async(lat, lng) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?';
    const apiKey = '84a2d20a13b38dc2cfb514b2a22fb007';

    const resp = await axios.get(`${ url }lat=${ lat }&lon=${ lng }&appid=${ apiKey }&units=metric`);

    return resp.data.main.temp;

    // --------------------Mi solucion


    // const instance = axios.create({
    //     baseURL: `${ url }lat=${ lat }&lon=${ lng }&appid=${ apiKey }&units=metric`
    // });

    // const resp = await instance.get();
    // console.log(resp.data.main);

}


module.exports = {
    getClima
}