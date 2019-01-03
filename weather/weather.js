const axios = require('axios');
const apiWeather = require('../api-keys/api-keys').apiWeather();

const getWeather = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiWeather }`);

    if (resp.data.cod === 400) {
        throw new Error('Invalid lat or lng');
    }

    return temp = resp.data.main.temp

}
module.exports = {
    getWeather
}