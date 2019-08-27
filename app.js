const forecast = require('./utils/foreCast')
const geoCode = require('./utils/geoCode')

const location = process.argv[2]

if (location) {
    geoCode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error : ', error)
        }
        forecast(latitude, longitude, (error, foreCastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(location)
            console.log(foreCastData)
        })
    })
} else {
    console.log('Please provide a location')
}