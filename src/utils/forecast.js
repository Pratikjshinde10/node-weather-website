const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3120c89470ec874b5b71f619fb8ab68b&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain with humdity ' + body.current.humidity + ' & is_day ' + body.current.is_day )
        }
    })
}

module.exports = forecast