const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        descripcion: 'City address to get the weather',
        demand: true
    }
}).argv;

let getInfo = async(direction) => {

    try {
        let coords = await location.getLocationLatLng(direction);
        let temp = await weather.getWeather(coords.lat, coords.lng);

        return (`Weather in ${ coords.direction } is ${ temp }`);

    } catch (err) {
        return `The weather could not be determined in ${direction}`;
    }
}

getInfo(argv.direction)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));