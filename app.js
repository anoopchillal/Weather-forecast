const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/4f33c2b5de2c5fa896ba442136d58d46/37.8267,-122.4233';

// request({url : url, json : true },(error,response) =>{
//     if (error){
//         console.log('Unable to connect to weather services!')
//     } else if(response.body.error){
//         console.log('Unable to find location!')
//     } else {
//         console.log(response.body.daily.summary + ' It is currently ' + response.body.currently.temperature +  ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain');
//     }
    
    
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.currently);
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mysore.json?access_token=pk.eyJ1IjoiYW5vb3AtY2hpbGxhbCIsImEiOiJjazFieXp2b2QwYmlmM2duOGl1dHRhcXBrIn0.1YacJ_ZUaENXRQQaSBnO2Q&limit=1';

// request({url : geocodeURL, json : true},(error,response) =>{

//     if (error){
//         console.log('Unable to connect to weather services!')
//     }else if(response.body.features.length === 0 ){
//         console.log('Unable to find coordinates for the place! Please try another search!')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]

//         console.log(longitude,latitude);
//         }
//     // console.log('The latitude of the place is ', + response.body.features[0].center[0]);
//     // console.log('The longitude of the place is ', + response.body.features[0].center[1])

    
// })


forecast('12.96991,77.59796',(error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


geocode('Belgaum',(error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

