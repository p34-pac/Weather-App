const UPDATE_WEATHER = "UPDATE_WEATHER"
const CHANGE_LOCATION = "CHANGE_LOCATION"

export const updateWeather = (weatherData) => ({
    type: UPDATE_WEATHER,
    weatherData
})

export const changeLocation = (location) => ({
    type: CHANGE_LOCATION,
    location
})