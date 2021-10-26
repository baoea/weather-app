const request = require('postman-request')
const googleMapAPIKey = 'AIzaSyDvPvEiigSsYcF2WofU5qm3dyg1twlbKJQ'

const geocode = (address, callback) => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleMapAPIKey
    request({ url: url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connectto location services!', undefined)
        } else if (body.status !== 'OK') {
            callback(body.status, undefined)
        } else {
            const coordinates = body.results[0].geometry.location
            callback(undefined, {
                latitude : coordinates.lat,
                longtitude : coordinates.lng,
                location: body.results[0].formatted_address
            })
        }
    })
}

module.exports = geocode