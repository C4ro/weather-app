const axios = require('axios');
const apiGoogleMaps = require('../api-keys/api-keys').apiGoogleMaps();

const getLocationLatLng = async(direction) => {

    let encodedUrl = encodeURI(direction);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=${ apiGoogleMaps }`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for the city ${ direction }`);
    }

    let location = resp.data.results[0];
    let coord = location.geometry.location

    return {
        direction: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLocationLatLng
}