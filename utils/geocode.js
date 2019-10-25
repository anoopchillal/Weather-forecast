const request = require('request')

const geocode = (address, callback) =>{   
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5vb3AtY2hpbGxhbCIsImEiOiJjazFieXp2b2QwYmlmM2duOGl1dHRhcXBrIn0.1YacJ_ZUaENXRQQaSBnO2Q&limit=1'

    request({url : url, json : true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find coordinates for the place! Please try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode