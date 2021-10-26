const request = require('postman-request')
const weatherAPIKey = '714593dd81b96c51f79b5ea1fef69431'

const forecast = (latitude, longtitude, callback) => {
    currentWeathterUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longtitude + '&units=metric&appid=' + weatherAPIKey
    request({url: currentWeathterUrl, json: true}, (error, response, body) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.message) {
                callback(body.message, undefined)
            } else {
                callback(undefined, 'Weather is ' + body.weather[0].description + '.It is currently ' + body.main.temp + ' degrees out. It feels likes ' + body.main.feels_like + ' degrees out.')
            }
        })
    
}

module.exports = forecast